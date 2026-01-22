'use client'

import { Shield, Award, Truck, RefreshCw, Lock, CheckCircle } from 'lucide-react'

interface TrustBadgeProps {
  icon: 'shield' | 'award' | 'truck' | 'refresh' | 'lock' | 'check'
  title: string
  description: string
}

const icons = {
  shield: Shield,
  award: Award,
  truck: Truck,
  refresh: RefreshCw,
  lock: Lock,
  check: CheckCircle,
}

export function TrustBadge({ icon, title, description }: TrustBadgeProps) {
  const IconComponent = icons[icon]

  return (
    <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-accent text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <IconComponent size={20} />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
        <p className="text-white/70 text-xs mt-1">{description}</p>
      </div>
    </div>
  )
}

export function TrustBadgeRow() {
  const badges = [
    { icon: 'shield' as const, title: '100% Authentic', description: 'Every item verified for authenticity' },
    { icon: 'truck' as const, title: 'Fast Delivery', description: 'Same-day delivery in Nairobi' },
    { icon: 'refresh' as const, title: '30-Day Returns', description: 'Hassle-free returns policy' },
    { icon: 'lock' as const, title: 'Secure Payments', description: 'SSL encrypted transactions' },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <TrustBadge key={index} {...badge} />
      ))}
    </div>
  )
}

export function AuthenticityBadge() {
  return (
    <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 text-accent px-3 py-1.5 rounded-full">
      <Shield size={16} />
      <span className="text-xs font-semibold">100% Authentic</span>
    </div>
  )
}

export function SecurityBadge() {
  return (
    <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 text-green-500 px-3 py-1.5 rounded-full">
      <Lock size={16} />
      <span className="text-xs font-semibold">SSL Secured</span>
    </div>
  )
}

export function KenyanOwnedBadge() {
  return (
    <div className="inline-flex items-center space-x-2 bg-secondary text-primary px-3 py-1.5 rounded-full">
      <Award size={16} />
      <span className="text-xs font-semibold">Kenyan Owned & Operated</span>
    </div>
  )
}

export function MpesaBadge() {
  return (
    <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-3 py-1.5 rounded-full">
      <span className="text-xs font-bold">M-Pesa</span>
    </div>
  )
}

