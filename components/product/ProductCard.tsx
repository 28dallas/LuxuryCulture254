'use client'

import Link from 'next/link'
import { Heart, ShoppingCart, Star, Shield, Truck } from 'lucide-react'
import { Product } from '@/types'
import { useCartStore } from '@/lib/store/cart'
import { Button } from '@/components/ui/Button'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: Product
  className?: string
}

// Mock rating function - in real app this would come from product data
const getProductRating = (product: Product) => {
  // Generate consistent ratings based on product ID
  const rating = 4 + (product.id.charCodeAt(0) % 10) / 10
  return Math.min(rating, 5)
}

const getReviewCount = (product: Product) => {
  return (product.id.charCodeAt(0) * 7) % 100 + 5
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [isMounted, setIsMounted] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!product.inStock) {
      toast.error('This item is currently out of stock')
      return
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: product.colors[0] || 'Default',
      image: product.images[0] || '/placeholder-shoe.jpg',
      quantity: 1,
      brand: product.brand,
      slug: product.slug,
    }

    addItem(cartItem)
    toast.success('Added to cart!')
  }

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
    toast.success(isLiked ? 'Removed from wishlist' : 'Added to wishlist')
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const rating = getProductRating(product)
  const reviewCount = getReviewCount(product)

  return (
    <Link href={`/product/${product.slug}`} className={`group relative block ${className || ''}`}>
      <div 
        className="card-hover overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden bg-secondary-100">
            <img
              src={product.images[0] || '/placeholder-shoe.jpg'}
              alt={product.name}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              loading="lazy"
            />
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.isOnSale && discount > 0 && (
                <span className="product-badge-sale">
                  -{discount}%
                </span>
              )}
              {product.isNewArrival && (
                <span className="product-badge bg-secondary text-primary">
                  NEW
                </span>
              )}
              {product.isBestseller && (
                <span className="product-badge bg-accent text-primary">
                  BESTSELLER
                </span>
              )}
              {!product.inStock && (
                <span className="product-badge bg-secondary-800 text-primary">
                  SOLD OUT
                </span>
              )}
            </div>

            {/* Trust Badge - Authenticity */}
            <div className="absolute top-2 right-10 hidden sm:flex">
              <div className="bg-white/90 backdrop-blur-sm text-accent px-2 py-1 rounded-full flex items-center gap-1">
                <Shield size={12} />
                <span className="text-[10px] font-semibold">100% Authentic</span>
              </div>
            </div>

            {/* Like Button */}
            {isMounted && (
              <button
                onClick={handleLike}
                className={`absolute touch-target-sm rounded-full transition-all duration-200 ${
                  isLiked 
                    ? 'bg-accent text-primary' 
                    : 'bg-primary-100 text-secondary hover:bg-accent hover:text-primary'
                } active-scale`}
                style={{ top: '8px', right: '8px' }}
                aria-label="Add to wishlist"
              >
                <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
              </button>
            )}

            {/* Quick Add to Cart */}
            {product.inStock && isMounted && (
              <div className={`absolute left-2 right-2 transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ bottom: '8px' }}>
                <Button
                  onClick={handleAddToCart}
                  className="w-full text-sm active-scale"
                  size="sm"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  QUICK ADD
                </Button>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-grid-2">
            {/* Brand & Name */}
            <div className="mb-grid-1">
              <p className="text-xs text-secondary-600 uppercase tracking-wide font-medium">
                {product.brand}
              </p>
              <h3 className="text-sm font-semibold text-secondary line-clamp-2 group-hover:text-accent transition-colors">
                {product.name}
              </h3>
            </div>

            {/* Star Rating */}
            {isMounted && (
              <div className="flex items-center gap-1 mb-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      className={`${
                        star <= Math.floor(rating) 
                          ? 'fill-accent text-accent' 
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-secondary-500">
                  ({reviewCount})
                </span>
              </div>
            )}

            {/* Size Selection */}
            <div className="mb-grid-2">
              <div className="flex flex-wrap gap-1">
                {product.sizes.slice(0, 4).map((size) => (
                  <button
                    key={size}
                    onClick={isMounted ? (e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setSelectedSize(size)
                    } : undefined}
                    className={`touch-target-sm text-xs border rounded transition-colors active-scale ${
                      selectedSize === size
                        ? 'border-accent bg-accent text-primary'
                        : 'border-secondary-300 text-secondary hover:border-accent'
                    }`}
                  >
                    {size}
                  </button>
                ))}
                {product.sizes.length > 4 && (
                  <span className="text-xs text-secondary-600 self-center ml-1">
                    +{product.sizes.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Price & Delivery Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-secondary text-lg">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="price-original text-sm">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              {/* Quick Delivery Info */}
              {product.inStock && (
                <div className="flex items-center gap-1 text-xs text-secondary-500">
                  <Truck size={12} className="text-accent" />
                  <span>Same-day Nairobi delivery</span>
                </div>
              )}
            </div>
          </div>
        </div>
    </Link>
  )
}
