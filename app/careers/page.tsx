import Link from 'next/link'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Join the Luxury Culture team and help shape the future of streetwear culture.</p>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto text-center rounded-2xl border border-gray-200 p-10">
          <h2 className="text-2xl font-semibold mb-3">We’re always looking for talent</h2>
          <p className="text-gray-700 mb-6">If you’re passionate about fashion, retail, customer experience, or content creation, we’d love to hear from you.</p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Send Us a Message
          </Link>
        </div>
      </section>
    </main>
  )
}
