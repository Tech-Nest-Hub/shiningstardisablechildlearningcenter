export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-balance">
            Every Child Shines Bright
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 text-balance max-w-2xl mx-auto leading-relaxed">
            Shining Star provides inclusive, compassionate education for children with diverse learning needs. We
            believe in unlocking every child's potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about">
            <button 
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition shadow-lg">
              Learn More
            </button>
              </a>
              <a href="/contact">
            <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition shadow-lg">
              Enroll Now
            </button>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}
