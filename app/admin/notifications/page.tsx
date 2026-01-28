'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import toast from 'react-hot-toast'

export default function AdminNotifications() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const fetchItems = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/notifications')
      const json = await res.json()
      setItems(json?.data || [])
    } catch (e) {
      toast.error('Failed to load notifications')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const removeItem = async (id: string) => {
    try {
      const res = await fetch('/api/notifications', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
      if (!res.ok) throw new Error('Delete failed')
      toast.success('Deleted')
      setItems((prev) => prev.filter(i => i.id !== id))
    } catch (e) {
      toast.error('Failed to delete')
    }
  }

  const clearAll = async () => {
    try {
      const res = await fetch('/api/notifications', { method: 'DELETE' })
      if (!res.ok) throw new Error('Clear failed')
      toast.success('Cleared all')
      setItems([])
    } catch (e) {
      toast.error('Failed to clear')
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg p-grid-4">
          <h2 className="heading-md mb-4">Notifications Admin</h2>

          <div className="mb-4 flex items-center gap-3">
            <Button onClick={fetchItems}>Refresh</Button>
            <Button variant="outline" onClick={clearAll}>Clear All</Button>
          </div>

          <div>
            {loading ? (
              <p>Loading...</p>
            ) : items.length === 0 ? (
              <p className="text-sm text-secondary-600">No subscriptions yet.</p>
            ) : (
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.id} className="flex items-center justify-between border p-3 rounded">
                    <div>
                      <div className="text-sm font-semibold">{item.email}</div>
                      <div className="text-xs text-secondary-600">{item.brand || 'Any brand'} • {item.productSlug || 'Any product'}</div>
                      <div className="text-xs text-gray-400">{new Date(item.createdAt).toLocaleString()}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" onClick={() => navigator.clipboard?.writeText(JSON.stringify(item, null, 2)).then(()=>toast.success('Copied'))}>Copy</Button>
                      <Button onClick={() => removeItem(item.id)}>Delete</Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
