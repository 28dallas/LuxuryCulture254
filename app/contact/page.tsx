import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">We’re here to help with orders, styling advice, and anything else you need.</p>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Email:</strong> Luxuryculture254@outlook.com</p>
              <p><strong>Support Email:</strong> Luxuryculture254@gmail.com</p>
              <p><strong>Phone:</strong> +254 787 507945</p>
              <p><strong>Location:</strong> Nairobi, Kenya</p>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-50 p-8">
            <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
            <p className="text-gray-700 mb-4">For order updates, product questions, or delivery concerns, reach out and we’ll respond as soon as possible.</p>
            <Link href="/shipping" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              View Shipping Info
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
