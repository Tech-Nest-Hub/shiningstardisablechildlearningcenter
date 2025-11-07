import Footer from "@/components/landingpage/footer"
import Header from "@/components/landingpage/header"


export const metadata = {
  title: "Updates & News | Shining Star Disable Child Learning Center",
  description: "Latest news and updates from Shining Star learning center.",
}

export default function UpdatesPage() {
  const updates = [
    {
      title: "New Summer Programs Launched",
      date: "November 2024",
      category: "Program",
      excerpt:
        "We are excited to announce our comprehensive summer learning programs designed to keep students engaged and progressing.",
      image: "/summer-learning-program.jpg",
    },
    {
      title: "Parent Workshop: Supporting Your Child's Learning",
      date: "November 2024",
      category: "Workshop",
      excerpt:
        "Join us for an interactive workshop on effective strategies to support your child's educational journey at home.",
      image: "/parent-workshop-education.jpg",
    },
    {
      title: "Annual Sports Day Success",
      date: "October 2024",
      category: "Event",
      excerpt:
        "Our students showcased incredible talent and spirit at the annual sports day celebration. Thank you to all participants!",
      image: "/sports-day-children-celebration.jpg",
    },
    {
      title: "New State-of-the-Art Therapy Center Opening",
      date: "October 2024",
      category: "Facility",
      excerpt:
        "We're thrilled to announce the opening of our new therapy center with modern equipment and enhanced facilities.",
      image: "/therapy-center-facility.jpg",
    },
    {
      title: "Student Success Story: From Struggles to Shine",
      date: "September 2024",
      category: "Success Story",
      excerpt:
        "Read the inspiring journey of how Shining Star helped one student overcome challenges and achieve academic excellence.",
      image: "/student-success-achievement.jpg",
    },
    {
      title: "Staff Training: Latest in Special Education",
      date: "September 2024",
      category: "Training",
      excerpt:
        "Our team completed comprehensive training on the latest approaches and best practices in special education.",
      image: "/teacher-training-education.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Updates & News</h1>
          <p className="text-lg text-white/90">Stay informed about the latest happenings at Shining Star</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {updates.map((update, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
                <div className="h-48 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src={update.image || "/placeholder.svg"}
                    alt={update.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {update.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{update.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition cursor-pointer">
                    {update.title}
                  </h3>
                  <p className="text-foreground/80">{update.excerpt}</p>
                  <button className="mt-4 text-primary font-medium hover:opacity-80 transition">Read More →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
