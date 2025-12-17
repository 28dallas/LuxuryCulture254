'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface PaystackPaymentProps {
  amount: number
  email: string
  onSuccess: (reference: string) => void
  onError: (error: string) => void
}

export function PaystackPayment({ amount, email, onSuccess, onError }: PaystackPaymentProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)
    
    try {
      const reference = `SHOPJR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      // Initialize transaction
      const response = await fetch('/api/payment/paystack/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          amount,
          currency: 'NGN',
          reference,
          metadata: {
            custom_fields: [
              {
                display_name: 'Order ID',
                variable_name: 'order_id',
                value: reference,
              },
            ],
          },
        }),
      })

      const data = await response.json()

      if (data.success) {
        // Load Paystack popup
        const handler = (window as any).PaystackPop.setup({
          key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
          email,
          amount: amount * 100,
          currency: 'NGN',
          ref: reference,
          channels: ['card', 'bank', 'ussd', 'mobile_money'],
          onClose: () => {
            setIsLoading(false)
          },
          callback: (response: any) => {
            setIsLoading(false)
            onSuccess(response.reference)
          },
        })

        handler.openIframe()
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      setIsLoading(false)
      onError(error instanceof Error ? error.message : 'Payment failed')
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-secondary-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Pay with Paystack (Nigeria)</h3>
        <p className="text-sm text-secondary-600 mb-4">
          Secure payment via Card, Bank Transfer, USSD, or Mobile Money
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-primary text-white px-2 py-1 rounded">Cards</span>
          <span className="bg-primary text-white px-2 py-1 rounded">Bank Transfer</span>
          <span className="bg-primary text-white px-2 py-1 rounded">USSD</span>
          <span className="bg-primary text-white px-2 py-1 rounded">OPay/PalmPay</span>
        </div>
      </div>

      <Button
        onClick={handlePayment}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Processing...' : `Pay ₦${amount.toLocaleString()}`}
      </Button>

      <script src="https://js.paystack.co/v1/inline.js" async></script>
    </div>
  )
}