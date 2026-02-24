'use client'

export function MoreThanStore() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="mb-8">
          <h2 className="text-sm font-bold text-secondary-600 uppercase tracking-wide mb-2">
            MORE THAN A STORE 🏪
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Community */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/5] bg-secondary-100 rounded-lg overflow-hidden">
              <img
                src="/IMG/Lux/lux23.jpg"
                alt="Community member"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Blurred overlay that appears on hover */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Always visible content */}
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white font-bold text-lg drop-shadow-lg">COMMUNITY</h3>
            </div>
            {/* Expanded details on hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h3 className="text-white font-bold text-2xl mb-2 drop-shadow-lg">COMMUNITY</h3>
              <p className="text-white text-center text-sm opacity-95 drop-shadow-md">
                Join our community of sneaker enthusiasts and footwear culture
              </p>
              <p className="text-white/80 text-center text-xs mt-3 drop-shadow-md">
                Connect with fellow collectors • Share your kicks • Exclusive events
              </p>
            </div>
          </div>

          {/* Collaboration */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/5] bg-secondary-100 rounded-lg overflow-hidden">
              <img
                src="/IMG/Lux/lux2.jpg"
                alt="Collaboration workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Blurred overlay that appears on hover */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Always visible content */}
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white font-bold text-lg drop-shadow-lg">COLLABORATION</h3>
            </div>
            {/* Expanded details on hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h3 className="text-white font-bold text-2xl mb-2 drop-shadow-lg">COLLABORATION</h3>
              <p className="text-white text-center text-sm opacity-95 drop-shadow-md">
                Working with sneaker brands to bring exclusive drops
              </p>
              <p className="text-white/80 text-center text-xs mt-3 drop-shadow-md">
                Partner with us • Limited editions • Brand collaborations
              </p>
            </div>
          </div>

          {/* Authenticity */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/5] bg-secondary-100 rounded-lg overflow-hidden">
              <img
                src="/IMG/Lux/lux1.jpg"
                alt="Authentic sneakers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Blurred overlay that appears on hover */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Always visible content */}
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white font-bold text-lg drop-shadow-lg">AUTHENTICITY</h3>
            </div>
            {/* Expanded details on hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h3 className="text-white font-bold text-2xl mb-2 drop-shadow-lg">AUTHENTICITY</h3>
              <p className="text-white text-center text-sm opacity-95 drop-shadow-md">
                100% authentic sneakers. Real kicks for real enthusiasts
              </p>
              <p className="text-white/80 text-center text-xs mt-3 drop-shadow-md">
                Verified authentic • Original packaging • Quality guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
