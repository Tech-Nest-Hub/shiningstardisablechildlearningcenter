'use client'
import Image from "next/image"
import { redirect } from "next/navigation"

export default function GallerySection() {
  const images = [
    { id: 1, title: "Classroom Learning", query: "photo_gallery/1.jpg" },
    { id: 2, title: "Therapy Sessions", query: "photo_gallery/2.jpg" },
    { id: 3, title: "Creative Activities", query: "photo_gallery/3.jpg" },
    { id: 4, title: "Outdoor Play", query: "photo_gallery/4.jpg" },
    { id: 5, title: "Group Activities", query: "photo_gallery/5.jpg" },
    { id: 6, title: "Campus Facilities", query: "photo_gallery/6.jpg" },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3 text-balance">Photo Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments from our inclusive learning community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg h-64 bg-muted cursor-pointer">
              <Image
                src={`/${image.query}`}
                alt={image.title}
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="flex justify-center mt-8">
              <button
              onClick={()=> redirect("/gallery")}
                className="bg-primary hover:cursor-pointer hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                View More
              </button>
            </div>
    </section>
  )
}
