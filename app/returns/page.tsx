import Link from 'next/link'

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Returns & Exchanges</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We want you to be confident in every purchase.
          </p>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            <p className="text-gray-700 mb-4">
              You may request a return within 7 days of receiving your order if the item is unused, in original condition, and includes all tags and packaging.
            </p>
            <p className="text-gray-700">
              Items that are worn, altered, or not in original condition may not be eligible for a refund or exchange.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">How to Start a Return</h3>
              <p className="text-sm text-gray-600">Contact our support team with your order number and reason for return.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Processing Time</h3>
              <p className="text-sm text-gray-600">Approved returns are usually processed within 3–5 business days after inspection.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
