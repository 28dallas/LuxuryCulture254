 'use client'

import { useState, useMemo } from 'react'
import { useParams } from 'next/navigation'
import { ProductGrid } from '@/components/product/ProductGrid'
import { CatalogCard } from '@/components/product/CatalogCard'
import FilterPanel from '@/components/shop/FilterPanel'
import SortDropdown from '@/components/shop/SortDropdown'
import { Search, SlidersHorizontal, Grid, List, ChevronLeft, ChevronRight } from 'lucide-react'
import { mockProducts } from '@/lib/data/products'
import { Product } from '@/types'

interface Filters {
  category: string[]
  brand: string[]
  gender: string[]
  size: string[]
  color: string[]
  priceRange: [number, number]
  inStock: boolean
  onSale: boolean
}

const collectionInfo: Record<string, { name: string; description: string; image: string }> = {
  footwear: {
    name: 'Footwear',
    description: 'Premium sneakers and athletic shoes from the world\'s top brands',
    image: '/logo2.png'
  },
  apparel: {
    name: 'Apparel',
    description: 'Streetwear essentials, hoodies, and fashion-forward clothing',
    image: '/logo2.png'
  },
  accessories: {
    name: 'Accessories',
    description: 'Complete your look with bags, belts, and lifestyle accessories',
    image: '/logo2.png'
  }
}

export default function CollectionPage() {
  const params = useParams()
  const collectionSlug = params.slug as string
  const collection = collectionInfo[collectionSlug]
  
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const [filters, setFilters] = useState<Filters>({
    category: [collectionSlug],
    brand: [],
    gender: [],
    size: [],
    color: [],
    priceRange: [0, 2000],
    inStock: false,
    onSale: false
  })

  // Filter products for this collection
  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const matchesCollection = product.category === collectionSlug
      const matchesSearch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ?? false)
      
      const matchesBrand = filters.brand.length === 0 || filters.brand.includes(product.brand)
      const matchesGender = filters.gender.length === 0 || filters.gender.includes(product.gender)
      const matchesSize = filters.size.length === 0 || product.sizes.some(size => filters.size.includes(size))
      const matchesColor = filters.color.length === 0 || product.colors.some(color => filters.color.includes(color))
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      const matchesStock = !filters.inStock || product.inStock
      const matchesSale = !filters.onSale || product.isOnSale

      return matchesCollection && matchesSearch && matchesBrand && matchesGender && 
             matchesSize && matchesColor && matchesPrice && matchesStock && matchesSale
    })
  }, [mockProducts, collectionSlug, searchQuery, filters])

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts]
    
    switch (sortBy) {
      case 'newest':
        return sorted.sort((a, b) => (b.createdAt ? new Date(b.createdAt).getTime() : 0) - (a.createdAt ? new Date(a.createdAt).getTime() : 0))
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price)
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name))
      case 'bestseller':
        return sorted.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0))
      default:
        return sorted
    }
  }, [filteredProducts, sortBy])

  // Paginate products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return sortedProducts.slice(startIndex, startIndex + itemsPerPage)
  }, [sortedProducts, currentPage, itemsPerPage])

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)

  // Product counts for filters
  const productCounts = useMemo(() => {
    const categoryCounts: Record<string, number> = {}
    const brandCounts: Record<string, number> = {}
    
    const collectionProducts = mockProducts.filter(p => p.category === collectionSlug)
    collectionProducts.forEach(product => {
      categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1
      brandCounts[product.brand] = (brandCounts[product.brand] || 0) + 1
    })
    
    return {
      total: collectionProducts.length,
      categories: categoryCounts,
      brands: brandCounts
    }
  }, [mockProducts, collectionSlug])

  const handleFilterChange = (newFilters: Filters) => {
    setFilters({ ...newFilters, category: [collectionSlug] })
    setCurrentPage(1)
  }

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy)
    setCurrentPage(1)
  }

  if (!collection) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Collection Not Found</h1>
          <p className="text-gray-600">The collection you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Collection Hero */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{collection.name}</h1>
              <p className="text-xl text-gray-300 mb-6">{collection.description}</p>
              <p className="text-gray-400">
                {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={`Search ${collection.name.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden pt-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-black/20 rounded-md hover:border-black/40 transition-colors"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="sticky top-4">
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                productCounts={productCounts}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 py-6">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <SortDropdown sortBy={sortBy} onSortChange={handleSortChange} />
                
                {/* View Mode Toggle */}
                <div className="flex items-center border border-black/20 rounded-md">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {(() => {
              if (viewMode === 'grid') {
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {paginatedProducts.map(p => (
                      <CatalogCard key={p.id} product={p as import('@/types').Product} />
                    ))}
                  </div>
                )
              }

              return paginatedProducts.length > 0 ? (
                <ProductGrid products={paginatedProducts} viewMode={viewMode} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found in this collection.</p>
                  <button
                    onClick={() => {
                      setFilters({
                        category: [collectionSlug],
                        brand: [],
                        gender: [],
                        size: [],
                        color: [],
                        priceRange: [0, 2000],
                        inStock: false,
                        onSale: false
                      })
                      setSearchQuery('')
                    }}
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )
            })()}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-black/20 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:border-black/40 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 border rounded-md transition-colors ${
                      currentPage === page
                        ? 'bg-black text-white border-black'
                        : 'border-black/20 hover:border-black/40'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-black/20 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:border-black/40 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}