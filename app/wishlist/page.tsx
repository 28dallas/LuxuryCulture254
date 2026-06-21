'use client'

import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'
import { useWishlistStore } from '@/lib/store/wishlist'

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore()

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Wishlist</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Keep track of the pieces you want to come back to.</p>
        </div>
      </section>

      <section className="container-custom py-16">
        {items.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl border border-gray-200 p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-600 mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Save your favorite sneakers and streetwear pieces to keep them close.</p>
            <Link href="/shop" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Browse Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <img src={item.product.images[0] || '/placeholder-shoe.jpg'} alt={item.product.name} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{item.product.brand}</p>
                  <h3 className="mt-1 text-lg font-semibold text-black">{item.product.name}</h3>
                  <p className="mt-2 text-xl font-bold text-black">${item.product.price}</p>
                  <div className="mt-5 flex gap-3">
                    <Link href={`/product/${item.product.slug}`} className="inline-flex flex-1 items-center justify-center rounded-lg bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                      View Product
                    </Link>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
