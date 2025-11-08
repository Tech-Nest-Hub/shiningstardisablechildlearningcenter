export default function VideoSection() {
  const videos = [
    { id: 4, title: "YouTube Feature Video", platform: "youtube", url: "https://www.youtube.com/watch?v=XWvyK2hkvMI" },
    { id: 1, title: "Welcome to Shining Star", platform: "facebook", url: "https://www.facebook.com/watch/?v=585593169980929&rdid=7XPo1ki4UTqeGCxP" },
    { id: 2, title: "Our Teaching Approach", platform: "facebook", url: "https://www.facebook.com/watch/?v=1185861098611283&rdid=sNN33sBPR5NB0Kol" },
    { id: 3, title: "Student Success Stories", platform: "facebook", url: "https://www.facebook.com/watch/?v=6873287509398312&rdid=fnzwhF8QXdnFrsDh" },
  ]

  function getEmbedUrl(video:String | any) {
    if (video.platform === "youtube") {
      const videoId = new URL(video.url).searchParams.get("v")
      return `https://www.youtube.com/embed/${videoId}`
    } else if (video.platform === "facebook") {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=500`
    }
    return video.url
  }

  return (
    <section id="videos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3 text-balance">Video Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about our programs and inclusive community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.length > 3 && videos.slice(0, 3).map((video) => (
            <div key={video.id} className="group relative">
              <div className="relative overflow-hidden rounded-xl bg-muted aspect-video">
                <iframe
                  src={getEmbedUrl(video)}
                  title={video.title}
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
              <h3 className="mt-3 font-semibold text-foreground group-hover:text-primary transition text-center">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
