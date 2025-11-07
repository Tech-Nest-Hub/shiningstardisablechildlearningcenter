export default function HighlightsSection() {
  const highlights = [
    {
      title: "Expert Staff",
      description: "Trained professionals dedicated to each child's success",
    },
    {
      title: "Personalized Learning",
      description: "Customized programs for individual needs and abilities",
    },
    {
      title: "Holistic Development",
      description: "Academic, social, emotional, and physical growth",
    },
    {
      title: "Safe Environment",
      description: "Inclusive, supportive community for all learners",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition">
              <h3 className="font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
