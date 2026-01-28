import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DB_DIR = path.join(process.cwd(), 'data')
const DB_FILE = path.join(DB_DIR, 'notifications.json')

async function ensureDb() {
  try {
    await fs.mkdir(DB_DIR, { recursive: true })
    try {
      await fs.access(DB_FILE)
    } catch (e) {
      await fs.writeFile(DB_FILE, '[]', 'utf8')
    }
  } catch (err) {
    // ignore
  }
}

export async function GET() {
  await ensureDb()
  const raw = await fs.readFile(DB_FILE, 'utf8')
  let data = []
  try {
    data = JSON.parse(raw || '[]')
  } catch (e) {
    data = []
  }
  return NextResponse.json({ success: true, data })
}

export async function POST(req: Request) {
  await ensureDb()
  let body: any
  try {
    body = await req.json()
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const { email, brand, productSlug } = body || {}
  if (!email) {
    return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 })
  }

  const raw = await fs.readFile(DB_FILE, 'utf8')
  let data: any[] = []
  try {
    data = JSON.parse(raw || '[]')
  } catch (e) {
    data = []
  }

  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    email,
    brand: brand || null,
    productSlug: productSlug || null,
    createdAt: new Date().toISOString(),
  }

  data.push(entry)

  try {
    await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), 'utf8')
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 })
  }

  return NextResponse.json({ success: true, data: entry }, { status: 201 })
}

export async function DELETE(req: Request) {
  await ensureDb()
  let body: any = {}
  try {
    body = await req.json()
  } catch (e) {
    body = {}
  }

  const raw = await fs.readFile(DB_FILE, 'utf8')
  let data: any[] = []
  try {
    data = JSON.parse(raw || '[]')
  } catch (e) {
    data = []
  }

  if (body && body.id) {
    const id = body.id
    const filtered = data.filter((d) => d.id !== id)
    await fs.writeFile(DB_FILE, JSON.stringify(filtered, null, 2), 'utf8')
    return NextResponse.json({ success: true, data: { id } })
  }

  // If no id provided, clear all
  await fs.writeFile(DB_FILE, '[]', 'utf8')
  return NextResponse.json({ success: true, data: [] })
}
