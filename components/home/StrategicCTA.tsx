'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, TrendingUp, Bell, Percent, Users } from 'lucide-react'

export function StrategicCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-accent via-red-600 to-accent relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Copy */}
          <div className="flex-1 max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={24} />
              <p className="font-bold uppercase tracking-widest text-sm">LIMITED TIME OFFERS</p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
              Unlock Exclusive Access
              <br />
              to Premium Drops
            </h2>

            <p className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed">
              Be the first to know about upcoming collections, flash sales, and exclusive previews. 
              Join 10,000+ sneaker enthusiasts who never miss a drop.
            </p>

            {/* Newsletter Form */}
            <form className="flex flex-col sm:flex-row gap-3 mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white text-secondary placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <Button className="bg-white text-accent hover:bg-gray-100 whitespace-nowrap">
                GET EXCLUSIVE ACCESS
              </Button>
            </form>

            <p className="text-sm text-white/70">
              🔒 No spam. Unsubscribe anytime. 15% off your first order.
            </p>
          </div>

          {/* Right: Feature List */}
          <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="font-bold text-xl text-white mb-6">Member Benefits</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white text-accent rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  <Bell size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Early Access</p>
                  <p className="text-white/80 text-sm">Be first to grab limited releases before they sell out</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white text-accent rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  <Percent size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Exclusive Discounts</p>
                  <p className="text-white/80 text-sm">Get up to 30% off on select items + birthday rewards</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white text-accent rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Community Events</p>
                  <p className="text-white/80 text-sm">Access to exclusive pop-ups, giveaways, and meetups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
