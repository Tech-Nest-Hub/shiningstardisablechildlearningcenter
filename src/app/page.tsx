import Footer from "@/components/landingpage/footer";
import GallerySection from "@/components/landingpage/gallery-section";
import Header from "@/components/landingpage/header";
import Hero from "@/components/landingpage/hero";
import HighlightsSection from "@/components/landingpage/highlights-section";
import NewsSection from "@/components/landingpage/news-section";
import VideoSection from "@/components/landingpage/video-section";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-background">
      <Header />
       <Hero />
      <HighlightsSection />
      <NewsSection />
      <GallerySection />
      <VideoSection />
      <Footer />
    </main>
  );
}
