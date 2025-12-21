'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import { brands, categories, genders, sizes, colors } from '@/lib/data/products'

interface FilterPanelProps {
  filters: {
    category: string[]
    brand: string[]
    gender: string[]
    size: string[]
    color: string[]
    priceRange: [number, number]
    inStock: boolean
    onSale: boolean
  }
  onFilterChange: (filters: any) => void
  productCounts: {
    total: number
    categories: Record<string, number>
    brands: Record<string, number>
  }
}

export default function FilterPanel({ filters, onFilterChange, productCounts }: FilterPanelProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brand: true,
    gender: false,
    size: false,
    color: false,
    price: false,
    availability: false
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }))
  }

  const handleFilterChange = (type: string, value: string | boolean | [number, number]) => {
    if (type === 'priceRange' || type === 'inStock' || type === 'onSale') {
      onFilterChange({ ...filters, [type]: value })
    } else {
      const currentValues = filters[type as keyof typeof filters] as string[]
      const newValues = currentValues.includes(value as string)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value as string]
      onFilterChange({ ...filters, [type]: newValues })
    }
  }

  const clearAllFilters = () => {
    onFilterChange({
      category: [],
      brand: [],
      gender: [],
      size: [],
      color: [],
      priceRange: [0, 2000],
      inStock: false,
      onSale: false
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => 
    Array.isArray(value) ? value.length > 0 : value !== false && !(Array.isArray(value) && value[0] === 0 && value[1] === 2000)
  )

  return (
    <div className="w-full lg:w-80 bg-white border-r border-black/10">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Filters</h2>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Clear All
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('category')}
            className="flex items-center justify-between w-full py-2 text-left font-medium"
          >
            Category
            {expandedSections.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.category && (
            <div className="mt-2 space-y-2">
              {categories.map(category => (
                <label key={category} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(category)}
                    onChange={() => handleFilterChange('category', category)}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-sm capitalize">{category}</span>
                  <span className="text-xs text-gray-500 ml-auto">
                    ({productCounts.categories[category] || 0})
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('brand')}
            className="flex items-center justify-between w-full py-2 text-left font-medium"
          >
            Brand
            {expandedSections.brand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.brand && (
            <div className="mt-2 space-y-2">
              {brands.map(brand => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.brand.includes(brand)}
                    onChange={() => handleFilterChange('brand', brand)}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-sm">{brand}</span>
                  <span className="text-xs text-gray-500 ml-auto">
                    ({productCounts.brands[brand] || 0})
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Gender Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('gender')}
            className="flex items-center justify-between w-full py-2 text-left font-medium"
          >
            Gender
            {expandedSections.gender ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.gender && (
            <div className="mt-2 space-y-2">
              {genders.map(gender => (
                <label key={gender} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.gender.includes(gender)}
                    onChange={() => handleFilterChange('gender', gender)}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-sm capitalize">{gender}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Size Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('size')}
            className="flex items-center justify-between w-full py-2 text-left font-medium"
          >
            Size
            {expandedSections.size ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.size && (
            <div className="mt-2 grid grid-cols-3 gap-2">
              {sizes.map(size => (
                <label key={size} className="flex items-center gap-1 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={filters.size.includes(size)}
                    onChange={() => handleFilterChange('size', size)}
                    className="w-3 h-3 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  {size}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between w-full py-2 text-left font-medium"
          >
            Price
            {expandedSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.price && (
            <div className="mt-2 space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange[0]}
                  onChange={(e) => handleFilterChange('priceRange', [Number(e.target.value), filters.priceRange[1]])}
                  className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange[1]}
                  onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], Number(e.target.value)])}
                  className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
                />
              </div>
            </div>
          )}
        </div>

        {/* Availability */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('availability')}
            className="flex items-center justify-between w-full py-2 text-left font-medium"
          >
            Availability
            {expandedSections.availability ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedSections.availability && (
            <div className="mt-2 space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={() => handleFilterChange('inStock', !filters.inStock)}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm">In Stock Only</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.onSale}
                  onChange={() => handleFilterChange('onSale', !filters.onSale)}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm">On Sale</span>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}