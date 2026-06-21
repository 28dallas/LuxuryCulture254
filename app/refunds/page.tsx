import Link from 'next/link'

export default function RefundsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Everything you need to know about refunds and reimbursements.</p>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>Refunds are available for eligible items that meet our return conditions and are approved by our support team.</p>
          <p>Once approved, refunds are usually processed back to the original payment method within a few business days.</p>
          <p>Custom, personalized, or worn items may not be eligible for refund unless there is a verified issue.</p>
          <div className="text-center pt-4">
            <Link href="/returns" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Review Returns Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
