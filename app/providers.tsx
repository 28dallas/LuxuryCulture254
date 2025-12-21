'use client'

import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

interface ProvidersProps {
  children: React.ReactNode
}

// PayPal expects the key to be 'client-id' in the script options; include a fallback
const initialPayPalOptions: any = {
  'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test',
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test',
  currency: 'USD',
  intent: 'capture',
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <PayPalScriptProvider options={initialPayPalOptions}>
        {children}
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#FFFFFF',
              color: '#000000',
              border: '1px solid #000000',
            },
            success: {
              iconTheme: {
                primary: '#FF0000',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#FF0000',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </PayPalScriptProvider>
    </SessionProvider>
  )
}
