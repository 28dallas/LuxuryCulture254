import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-paystack-signature')

    // Verify webhook signature
    const hash = crypto
      .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
      .update(body)
      .digest('hex')

    if (hash !== signature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 400 })
    }

    const event = JSON.parse(body)

    if (event.event === 'charge.success') {
      const { reference, amount, currency, customer } = event.data

      // Verify transaction with Paystack
      const verifyResponse = await fetch(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
          headers: {
            'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          },
        }
      )

      const verifyData = await verifyResponse.json()

      if (verifyData.status && verifyData.data.status === 'success') {
        // Update your database here
        console.log('Payment verified:', {
          reference,
          amount: amount / 100,
          currency,
          email: customer.email,
        })

        // TODO: Update order status in database
      }
    }

    return NextResponse.json({ message: 'Webhook processed' })
  } catch (error) {
    return NextResponse.json(
      { message: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}