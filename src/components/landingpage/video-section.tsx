export default function VideoSection() {
  const videos = [
    { id: 1, title: "Welcome to Shining Star", thumbnail: "inclusive learning center welcome" },
    { id: 2, title: "Our Teaching Approach", thumbnail: "special education teaching methods" },
    { id: 3, title: "Student Success Stories", thumbnail: "student testimonials achievements" },
  ]

  return (
    <section id="videos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3 text-balance">Video Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about our programs and inclusive community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group relative">
              <div className="relative overflow-hidden rounded-lg h-48 bg-muted">
                <img
                  src={`/.jpg?height=300&width=500&query=${video.thumbnail}`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <button className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-3 font-semibold text-foreground group-hover:text-primary transition">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
