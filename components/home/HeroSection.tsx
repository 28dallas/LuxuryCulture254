import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Shield, Truck, Award } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] bg-secondary overflow-hidden">
      {/* Background Image with Optimization */}
      <div className="absolute inset-0">
        <img
          src="/IMG/Arrivals/DSC02186.JPG"
          alt="Luxury Culture Hero"
          className="w-full h-full object-cover opacity-50"
          loading="eager"
          decoding="async"
          sizes="(max-width: 1024px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-custom h-full flex items-center">
        <div className="max-w-2xl text-primary py-16 lg:py-24">
          {/* Brand Badge with Kenyan flag colors */}
          <div className="inline-flex items-center space-x-2 bg-accent text-primary px-4 py-2 rounded-lg font-bold text-sm mb-6 animate-fade-in-up">
            <Award size={18} />
            <span>Kenyan Owned & Operated</span>
          </div>

          {/* Main Headline with refined typography */}
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in-up stagger-1">
            PREMIUM
            <br />
            <span className="text-accent">SNEAKERS</span>
            <br />
            & STREETWEAR
          </h1>

          {/* Enhanced Subtitle with brand mission */}
          <p className="text-lg lg:text-xl mb-4 opacity-90 max-w-lg animate-fade-in-up stagger-2">
            Your ultimate destination for authentic premium drops and exclusive releases.
          </p>
          <p className="text-base lg:text-lg mb-8 opacity-75 max-w-lg animate-fade-in-up stagger-3">
            We bring luxury directly to your doorstep — 100% authentic, verified, and trusted by thousands across Kenya.
          </p>

          {/* CTA Buttons with improved copy */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up stagger-4">
            <Link href="/shop?filter=new">
              <Button size="lg" className="group w-full sm:w-auto">
                DISCOVER PREMIUM DROPS
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/shop?sale=true">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-secondary w-full sm:w-auto">
                EXPLORE LIMITED RELEASES
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in-up stagger-5">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-accent" />
                <span>Authenticity Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck size={16} className="text-accent" />
                <span>Same-Day Delivery in Nairobi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-accent" />
                <span>10,000+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
