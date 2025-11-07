"use client"

import Footer from "@/components/landingpage/footer"
import Header from "@/components/landingpage/header"
import { useState } from "react"

export default function GalleryPage() {
  const allGalleryItems = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    type: "image",
    title: `Gallery Item ${i + 1}`,
    image: `/placeholder.svg?height=300&width=400&query=children learning activity ${i + 1}`,
  }))

  const [displayedCount, setDisplayedCount] = useState(6)

  const displayedItems = allGalleryItems.slice(0, displayedCount)
  const hasMore = displayedCount < allGalleryItems.length

  const handleViewMore = () => {
    setDisplayedCount((prev) => Math.min(prev + 6, allGalleryItems.length))
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Gallery</h1>
          <p className="text-lg text-white/90">Moments from Shining Star - celebrating learning and growth</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                    View
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleViewMore}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
