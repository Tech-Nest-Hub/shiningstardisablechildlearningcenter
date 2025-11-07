import Footer from "@/components/landingpage/footer"
import Header from "@/components/landingpage/header"


export const metadata = {
  title: "Programs | Shining Star Disable Child Learning Center",
  description: "Explore our specialized programs designed for children with diverse learning needs.",
}

export default function ProgramsPage() {
  const programs = [
    {
      title: "Early Intervention Program",
      description: "Specialized support for children aged 2-5 with developmental delays.",
      features: ["Speech Therapy", "Occupational Therapy", "Developmental Assessment"],
    },
    {
      title: "Academic Excellence Program",
      description: "Customized curriculum for children with learning disabilities aged 6-12.",
      features: ["Personalized Learning Plans", "One-on-One Tutoring", "Assistive Technology"],
    },
    {
      title: "Life Skills Program",
      description: "Practical skills training for adolescents to prepare for independence.",
      features: ["Daily Living Skills", "Social Development", "Vocational Training"],
    },
    {
      title: "Therapeutic Services",
      description: "Comprehensive therapeutic support for overall well-being.",
      features: ["Speech-Language Pathology", "Physical Therapy", "Mental Health Support"],
    },
    {
      title: "Parent Support Program",
      description: "Resources and counseling to empower families in their journey.",
      features: ["Workshops", "Counseling", "Support Groups"],
    },
    {
      title: "Transition Program",
      description: "Preparing students for secondary education and adult life.",
      features: ["Career Counseling", "Higher Education Planning", "Life Skills"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Programs</h1>
          <p className="text-lg text-white/90">
            Comprehensive educational and support programs tailored to each child's needs
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">{program.title}</h3>
                <p className="text-foreground/80 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-foreground">Key Features:</p>
                  <ul className="space-y-1">
                    {program.features.map((feature, i) => (
                      <li key={i} className="text-foreground/70 text-sm flex items-center gap-2">
                        <span className="text-primary">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
