import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">How we collect, use, and protect your information.</p>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>
            We value your privacy and are committed to protecting the personal information you share with us.
          </p>
          <p>
            We collect information needed to process orders, improve your shopping experience, and communicate updates about products and services.
          </p>
          <p>
            Your information is never sold to third parties. We may share it only with trusted providers that help us operate our store and fulfill orders.
          </p>
          <p>
            You can contact us at any time if you want to review or update the information we hold about you.
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
