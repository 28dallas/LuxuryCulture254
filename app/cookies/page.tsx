import Link from 'next/link'

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">How we use cookies to improve your browsing experience.</p>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <p>We use cookies to remember your preferences, keep the site secure, and understand how visitors use our store.</p>
          <p>Cookies help us improve page speed, personalize content, and keep your shopping experience smooth.</p>
          <p>You can disable cookies in your browser settings, but some parts of the site may not function properly.</p>
          <div className="text-center pt-4">
            <Link href="/privacy" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
