"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'
import { brands as availableBrands } from '@/lib/data/all-products'

export default function AccountPage() {
  const [isRegistered, setIsRegistered] = useState(false)
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null)

  // Signup form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Subscription form
  const [subEmail, setSubEmail] = useState('')
  const [brand, setBrand] = useState(availableBrands?.[0] || '')
  const [productSlug, setProductSlug] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('lc_user')
    if (stored) {
      setUser(JSON.parse(stored))
      setIsRegistered(true)
    }
  }, [])

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) return toast.error('Please provide name and email')
    const newUser = { name, email }
    localStorage.setItem('lc_user', JSON.stringify(newUser))
    setUser(newUser)
    setIsRegistered(true)
    setName('')
    setEmail('')
    setPassword('')
    toast.success('Account created — you are signed in locally')
  }

  const handleSignout = () => {
    localStorage.removeItem('lc_user')
    setUser(null)
    setIsRegistered(false)
    toast.success('Signed out')
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    const notifyEmail = subEmail || user?.email
    if (!notifyEmail) return toast.error('Please provide an email to receive notifications')

    // POST to API
    fetch('/api/notifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: notifyEmail, brand, productSlug: productSlug || null }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to subscribe')
        const json = await res.json()
        setSubEmail('')
        setProductSlug('')
        toast.success('Subscribed for stock notifications — we will notify you')
      })
      .catch((err) => {
        // Fallback to localStorage if API fails
        const existing = JSON.parse(localStorage.getItem('lc_notifications') || '[]')
        const entry = { email: notifyEmail, brand, productSlug: productSlug || null, createdAt: new Date().toISOString() }
        existing.push(entry)
        localStorage.setItem('lc_notifications', JSON.stringify(existing))
        setSubEmail('')
        setProductSlug('')
        toast.success('Subscribed locally — offline fallback used')
      })
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-grid-4">
          <h2 className="heading-md mb-4">My Account</h2>

          {!isRegistered ? (
            <form onSubmit={handleSignup} className="space-y-4">
              <p className="text-sm text-secondary-600">Create a free account to receive restock notifications and manage your preferences.</p>
              <div>
                <label className="text-sm font-medium">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="input-primary mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-primary mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-primary mt-1" />
              </div>
              <div className="flex items-center gap-3">
                <Button type="submit">Create Account</Button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <p className="text-sm">Signed in as <strong>{user?.name}</strong> — <span className="text-sm text-secondary-600">{user?.email}</span></p>
              <div>
                <Button onClick={handleSignout}>Sign Out</Button>
              </div>
            </div>
          )}

          <hr className="my-6" />

          <div>
            <h3 className="text-lg font-semibold mb-2">Subscribe for New Stock Notifications</h3>
            <p className="text-sm text-secondary-600 mb-4">Enter an email and choose a brand or specific product to be notified when new stock arrives.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <label className="text-sm font-medium">Email to notify</label>
                <input value={subEmail} onChange={(e) => setSubEmail(e.target.value)} placeholder={user?.email || 'your@email.com'} className="input-primary mt-1" />
              </div>

              <div>
                <label className="text-sm font-medium">Brand</label>
                <select value={brand} onChange={(e) => setBrand(e.target.value)} className="input-primary mt-1">
                  {availableBrands.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Specific product slug (optional)</label>
                <input value={productSlug} onChange={(e) => setProductSlug(e.target.value)} placeholder="e.g. air-force-1-low-aztec" className="input-primary mt-1" />
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit">Subscribe</Button>
                <Button onClick={async () => {
                  try {
                    const res = await fetch('/api/notifications')
                    const json = await res.json()
                    const saved = json?.data || []
                    await navigator.clipboard?.writeText(JSON.stringify(saved, null, 2))
                    toast.success('Saved subscriptions copied to clipboard')
                  } catch (e) {
                    const saved = JSON.parse(localStorage.getItem('lc_notifications') || '[]')
                    await navigator.clipboard?.writeText(JSON.stringify(saved, null, 2))
                    toast.success('Local subscriptions copied to clipboard')
                  }
                }} variant="outline">Export (demo)</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
