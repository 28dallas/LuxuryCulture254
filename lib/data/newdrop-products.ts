import { Product } from '@/types'

export const newDropProducts: Product[] = [
  {
    id: 'newdrop-001',
    name: 'Adidas Samba OG Aurora Ivy Core',
    slug: 'adidas-samba-og-aurora-ivy-core',
    price: 400,
    images: ['/IMG/NewDrop/Samba Og aurora ivy core Size 41 $500.jpeg'],
    category: 'sneakers' as const,
    gender: 'unisex',
    brand: 'Adidas',
    sizes: ['42'],
    colors: ['Aurora Ivy'],
    description: 'Adidas Samba OG Aurora Ivy Core — premium suede construction with the iconic Samba silhouette in a fresh Aurora Ivy colorway.',
    features: ['Premium suede upper', 'Gum rubber outsole', 'Classic 3-stripes design'],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false,
    rating: 4.9,
    reviews: 0,
    sku: 'ADS-SAMBA-AIC-41',
  },
]
