 'use client'

import Link from 'next/link'
import { Product } from '@/types'

interface CatalogCardProps {
  product: Product
}

export function CatalogCard({ product }: CatalogCardProps) {
  const price = typeof product.price === 'number' ? product.price.toLocaleString() : product.price

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block border border-gray-200 bg-white hover:shadow-sm transition-shadow group"
    >
      <div className="relative">
        <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
          <img
            src={product.images?.[0] || '/logo2.png'}
            alt={product.name}
            className="max-h-[60%] object-contain"
          />
        </div>

        {product.isBestseller && (
          <span className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 bg-white/95 border rounded text-gray-700">BESTSELLER</span>
        )}
      </div>

      <div className="px-3 py-3">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold text-gray-900">KSh {price}</div>
          {product.originalPrice && product.originalPrice > (product.price as number) && (
            <div className="text-xs text-gray-500 line-through">KSh {(product.originalPrice as number).toLocaleString()}</div>
          )}
        </div>
      </div>
    </Link>
  )
}
