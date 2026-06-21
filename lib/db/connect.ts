import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null }

if (!global.mongoose) {
  global.mongoose = cached
}

// Track if we're in simulated mode (when DB is unavailable)
let isSimulatedMode = false

export function isDatabaseSimulated(): boolean {
  return isSimulatedMode
}

async function connectDBWithRetry(retries = 3, delay = 2000): Promise<typeof mongoose> {
  if (!MONGODB_URI) {
    console.warn('⚠️ MONGODB_URI is not set. Running in simulation mode.')
    isSimulatedMode = true
    return null as any
  }

  let lastError: Error | null = null
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const opts = {
        bufferCommands: false,
        // Add options to handle SRV connection issues
        serverSelectionTimeoutMS: 15000,
        socketTimeoutMS: 45000,
      }

      console.log(`🔄 MongoDB connection attempt ${attempt}/${retries}...`)
      
      const connection = await mongoose.connect(MONGODB_URI, opts)
      
      console.log('✅ MongoDB connected successfully')
      isSimulatedMode = false
      return connection
      
    } catch (error: any) {
      lastError = error
      
      // Check if it's an SRV/DNS error
      if (error?.message?.includes('querySrv') || 
          error?.message?.includes('ENOTFOUND') ||
          error?.message?.includes('SRV')) {
        console.warn(`⚠️ MongoDB SRV/DNS issue on attempt ${attempt}:`, error.message)
        
        // Try with legacy connection string format (without +srv)
        if (attempt === 1 && !MONGODB_URI.includes('+srv')) {
          console.log('🔄 Trying direct MongoDB connection (non-SRV)...')
          try {
            const directUri = MONGODB_URI.replace('mongodb://', 'mongodb://').replace('mongodb+srv://', 'mongodb://')
            const opts = {
              bufferCommands: false,
              serverSelectionTimeoutMS: 10000,
              socketTimeoutMS: 45000,
            }
            const connection = await mongoose.connect(directUri, opts)
            console.log('✅ MongoDB connected via direct connection')
            isSimulatedMode = false
            return connection
          } catch (directError) {
            console.warn('⚠️ Direct connection also failed:', directError)
          }
        }
      }
      
      if (attempt < retries) {
        console.log(`⏳ Retrying in ${delay}ms...`)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }
  
  // All retries failed, enable simulated mode
  console.error('❌ MongoDB connection failed after all retries. Enabling simulated mode.')
  isSimulatedMode = true
  throw lastError
}

async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = connectDBWithRetry(3, 2000)
      .then((mongoose) => {
        return mongoose
      })
      .catch((e) => {
        console.error('MongoDB connection error:', e.message)
        isSimulatedMode = true
        // Return a mock mongoose object for simulation mode
        return null as any
      })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    isSimulatedMode = true
    // Don't throw - allow the app to continue in simulation mode
    console.warn('⚠️ Running in MongoDB simulation mode')
    return null as any
  }

  return cached.conn
}

export default connectDB

