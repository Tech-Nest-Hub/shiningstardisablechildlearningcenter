export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "New Sensory Learning Room Launched",
      date: "November 15, 2025",
      excerpt:
        "We're excited to announce our new state-of-the-art sensory learning space designed for multisensory education and therapy.",
      category: "Facilities",
    },
    {
      id: 2,
      title: "Special Achievement Celebration",
      date: "November 10, 2025",
      excerpt:
        "Our students showcased incredible progress in their annual achievement ceremony. Parents and staff celebrated their growth.",
      category: "Events",
    },
    {
      id: 3,
      title: "New Art Therapy Program",
      date: "November 5, 2025",
      excerpt:
        "Introducing our innovative art therapy program designed to enhance emotional expression and creative development.",
      category: "Programs",
    },
    {
      id: 4,
      title: "Community Inclusion Initiative",
      date: "October 28, 2025",
      excerpt: "Partnering with local organizations to create more inclusive community activities for our students.",
      category: "Community",
    },
  ]

  return (
    <section id="news" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3 text-balance">News & Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest news and announcements from Shining Star Disable Child Learning Center
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="group bg-card rounded-lg border border-border p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
              <button className="mt-4 text-primary font-semibold hover:opacity-80 transition">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
