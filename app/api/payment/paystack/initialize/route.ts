import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, amount, currency = 'NGN', reference, metadata } = await request.json()

    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Convert to kobo
        currency,
        reference,
        channels: ['card', 'bank', 'ussd', 'mobile_money'],
        metadata,
      }),
    })

    const data = await response.json()

    if (data.status) {
      return NextResponse.json({
        success: true,
        data: data.data,
      })
    } else {
      return NextResponse.json({
        success: false,
        message: data.message,
      }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Payment initialization failed',
    }, { status: 500 })
  }
}