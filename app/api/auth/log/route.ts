import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ logs: [] })
}

export async function POST() {
  return NextResponse.json({ success: true })
}