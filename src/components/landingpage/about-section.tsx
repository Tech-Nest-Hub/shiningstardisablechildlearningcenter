import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="aspect-square rounded-2xl flex items-center justify-center overflow-hidden">
            <Image
              src="/aboutusbg.jpg"
              alt="Classroom learning environment"
              width={500}
              height={500}
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-foreground mb-4">
              About <span className="text-primary">Shining Star</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Shining Star Disable Child Learning Center is dedicated to providing specialized education and support for
              children with various disabilities. We believe in the unique potential of every child.
            </p>
            <div className="space-y-3">
              {[
                "Personalized learning programs",
                "Trained special education staff",
                "Inclusive and supportive environment",
                "Holistic child development focus",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
