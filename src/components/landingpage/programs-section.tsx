export default function ProgramsSection() {
  const programs = [
    {
      title: "Early Intervention",
      description: "Ages 0-3: Early development support and foundational learning skills",
      icon: "👶",
    },
    {
      title: "Elementary Education",
      description: "Ages 4-8: Core academic subjects with individualized support",
      icon: "📚",
    },
    {
      title: "Skill Development",
      description: "Life skills, vocational training, and independence building",
      icon: "🎯",
    },
    {
      title: "Therapy Services",
      description: "Speech, occupational, and physical therapy integrated learning",
      icon: "💪",
    },
  ]

  return (
    <section id="programs" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl text-foreground mb-4">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored educational programs designed to meet each child's unique needs and learning goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-border"
            >
              <p className="text-4xl mb-3">{program.icon}</p>
              <h3 className="font-bold text-lg text-foreground mb-2">{program.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
