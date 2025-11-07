import Footer from "@/components/landingpage/footer"
import Header from "@/components/landingpage/header"
import Image from "next/image"


export const metadata = {
  title: "About Us | Shining Star Disable Child Learning Center",
  description: "Learn about our mission, vision, and the dedicated team at Shining Star.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background" >
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Shining Star</h1>
          <p className="text-lg text-white/90">Dedicated to inclusive education and holistic development</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Shining Star Disable Child Learning Center is dedicated to providing exceptional, personalized education
                and support to children with disabilities. We believe every child deserves the opportunity to learn,
                grow, and shine.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our mission is to create an inclusive, nurturing environment where children with diverse learning needs
                can develop their full potential through innovative teaching methods and compassionate care.
              </p>
            </div>
            <div className="bg-linear-to-br from-orange-100 to-orange-50 rounded-xl p-8 min-h-64 flex items-center justify-center">
              <Image 
              src="/photo_gallery/8.jpg" 
              alt="Our mission" 
              className="w-full rounded-lg"
              width={500}
              height={500} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-linear-to-br from-orange-100 to-orange-50 rounded-xl p-8 min-h-64 flex items-center justify-center order-last md:order-first">
              <img src="/vision-bright-future-education.jpg" alt="Our vision" className="w-full rounded-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                We envision a world where children with disabilities are fully included in mainstream education and
                society, valued for their unique strengths and contributions.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our vision extends to empowering families, educating communities, and advocating for policy changes that
                ensure equitable opportunities for all children, regardless of their abilities.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-secondary/10 rounded-xl p-12 mb-16">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-primary">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  ❤️
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Compassion</h3>
                <p className="text-foreground/80">We treat every child with love, respect, and understanding.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🌟
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Excellence</h3>
                <p className="text-foreground/80">We strive for the highest standards in education and care.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🤝
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Inclusion</h3>
                <p className="text-foreground/80">We foster a community where every child belongs and thrives.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-linear-to-r from-primary/50 to-accent/50 h-32"></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Team Member {i}</h3>
                  <p className="text-primary font-medium mb-2">Position</p>
                  <p className="text-foreground/70 text-sm">
                    Dedicated educator with years of experience in inclusive learning.
                  </p>
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
