import Link from 'next/link'

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping & Delivery</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about receiving your order quickly and safely.
          </p>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-2">Same-Day Nairobi</h2>
              <p className="text-sm text-gray-600">Orders placed before 2PM are delivered the same day within Nairobi.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-2">Regional Delivery</h2>
              <p className="text-sm text-gray-600">We offer fast delivery to major towns and cities across Kenya.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-2">Tracking Updates</h2>
              <p className="text-sm text-gray-600">Once dispatched, you’ll receive updates so you know exactly where your order is.</p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold mb-4">Delivery Timeline</h2>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Order confirmation:</strong> Immediately after checkout.</li>
              <li><strong>Processing:</strong> 1–2 business hours for in-stock items.</li>
              <li><strong>Dispatch:</strong> Same day for Nairobi orders before cut-off.</li>
              <li><strong>Delivery:</strong> Typically within 24 hours for Nairobi and 2–5 days for other regions.</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/shop" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
