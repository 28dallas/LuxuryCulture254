import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-xl text-center bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">404</p>
        <h1 className="mt-3 text-3xl font-bold text-black">Page not found</h1>
        <p className="mt-3 text-gray-600">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="inline-flex items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
            Go Home
          </Link>
          <Link href="/shop" className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Shop Now
          </Link>
        </div>
      </div>
    </main>
  )
}
