export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent text-primary px-4 py-2 rounded-full font-bold text-sm mb-6">
              <span>🏢</span>
              <span>KENYAN OWNED & OPERATED</span>
            </div>
            <h1 className="heading-lg mb-6">About Luxury Culture</h1>
            <p className="text-body-lg text-secondary-600 max-w-2xl mx-auto">
              Born in Nairobi, serving the continent. We're more than a store — we're a movement 
              celebrating sneaker culture and streetwear across East Africa.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Our Story */}
            <div className="card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-accent text-primary p-3 rounded-lg">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Our Story</h2>
                  <p className="text-body mb-4">
                    Luxury Culture was founded with a simple mission: to bring the latest and greatest in sneaker culture 
                    to Kenya and beyond. We believe that great footwear is more than just shoes – it's a statement, 
                    a lifestyle, and a way to express your unique personality.
                  </p>
                  <p className="text-body">
                    From the bustling streets of Nairobi to the global sneaker community, we curate the finest 
                    selection of premium sneakers and streetwear that represent quality, style, and authenticity.
                  </p>
                </div>
              </div>
              
              {/* Mission Statement */}
              <div className="bg-secondary text-primary p-6 rounded-lg mt-6">
                <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-body">
                  To democratize luxury streetwear in Kenya and across Africa, making authentic premium products 
                  accessible to every enthusiast who appreciates quality, craftsmanship, and culture.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💯</span>
                  </div>
                  <h3 className="font-bold mb-2">Authenticity First</h3>
                  <p className="text-sm text-secondary-600">
                    Every product is verified for authenticity. We stand behind 100% genuine items with our guarantee.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="font-bold mb-2">Community Driven</h3>
                  <p className="text-sm text-secondary-600">
                    Building connections among sneaker enthusiasts across Kenya and East Africa.
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="font-bold mb-2">Excellence Always</h3>
                  <p className="text-sm text-secondary-600">
                    Uncompromising standards in product quality and customer service.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="card p-8 bg-secondary text-primary">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Trust Us?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-3xl font-bold text-accent mb-1">10K+</p>
                  <p className="text-sm">Happy Customers</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-3xl font-bold text-accent mb-1">4.9★</p>
                  <p className="text-sm">Average Rating</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-3xl font-bold text-accent mb-1">100%</p>
                  <p className="text-sm">Authentic Products</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-3xl font-bold text-accent mb-1">24hr</p>
                  <p className="text-sm">Max Delivery Time</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="flex items-center space-x-2">
                  <span>🔒</span>
                  <span>SSL Secured</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span>🛡️</span>
                  <span>Money Back Guarantee</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span>📦</span>
                  <span>Trackable Delivery</span>
                </span>
              </div>
            </div>

            {/* Contact Section */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">📍 Visit Our Store</h3>
                  <p className="text-sm text-secondary-600">
                    Killimani, Nairobi<br />
                    Kenya<br />
                    Open: Mon-Sat 9AM-11PM
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">📞 Get In Touch</h3>
                  <p className="text-sm text-secondary-600">
                    📞 +254 787 507945<br />
                    📧 Luxuryculture254@outlook.com <br></br>
                    📧 Luxuryculture254@gmail.com<br />
                    🌐 www.LuxuryCulture254.com
                  </p>
                </div>
              </div>
              
              {/* M-Pesa Badge */}
              <div className="mt-6 pt-6 border-t border-secondary-100">
                <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg">
                  <span className="font-bold">M-Pesa</span>
                  <span className="text-sm">Accepted</span>
                </div>
                <p className="text-sm text-secondary-600 mt-2">
                  Fast and secure payments via M-Pesa, Credit Card, and PayPal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
