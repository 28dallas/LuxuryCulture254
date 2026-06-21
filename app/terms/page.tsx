import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Please review our terms before placing an order.</p>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>
            By using this website, you agree to comply with all applicable laws and these terms of use.
          </p>
          <p>
            Product availability, pricing, and promotions are subject to change without notice.
          </p>
          <p>
            All content on this site is intended for informational and shopping purposes and may not be copied or reused without permission.
          </p>
          <p>
            If you have questions about these terms, please contact our support team.
          </p>
          <div className="text-center pt-4">
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
