'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/data/products'

const collections = [
  {
    slug: 'footwear',
    name: 'Footwear',
    description: 'Premium sneakers and athletic shoes from top brands',
    image: '/logo2.png',
    productCount: 150
  },
  {
    slug: 'apparel',
    name: 'Apparel',
    description: 'Streetwear, hoodies, and fashion essentials',
    image: '/logo2.png',
    productCount: 89
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    description: 'Bags, belts, and lifestyle accessories',
    image: '/logo2.png',
    productCount: 45
  }
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Collections</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our curated collections of premium streetwear, sneakers, and accessories
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{collection.name}</h3>
                  <p className="text-sm opacity-90">{collection.productCount} products</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <div className="flex items-center text-red-600 font-medium group-hover:text-red-700">
                  <span>Shop Collection</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All Products Link */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            View All Products
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}