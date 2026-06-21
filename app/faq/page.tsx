import Link from 'next/link'

const faqs = [
  {
    question: 'How long does delivery take?',
    answer: 'Orders in Nairobi are typically delivered the same day when placed before our daily cutoff. Other regions usually arrive within 2–5 business days.'
  },
  {
    question: 'Do you offer authentic products?',
    answer: 'Yes. Every product is verified for authenticity and backed by our quality guarantee.'
  },
  {
    question: 'Can I change my order after checkout?',
    answer: 'If your order has not been dispatched yet, we’ll do our best to help update it. Please contact support immediately.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa, card payments, and PayPal for customer convenience.'
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Answers to common questions about shopping, delivery, and returns.</p>
        </div>
      </section>

      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-2">{item.question}</h2>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
          <div className="text-center pt-4">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
