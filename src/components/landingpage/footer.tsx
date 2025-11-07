import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-3">Shining Star</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              An inclusive learning center dedicated to supporting children with diverse learning needs and helping
              every child shine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/updates" className="text-white/80 hover:text-white transition">
                  News
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-white/80 hover:text-white transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#videos" className="text-white/80 hover:text-white transition">
                  Videos
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition">
                  Early Intervention
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition">
                  Skill Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition">
                  Therapy Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition">
                  Parent Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <p className="text-white/80">Kathmandu, Nepal</p>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={16} />
                <a href="tel:9849840305" className="text-white/80">(977) 9849840305</a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={16} />
                <p className="text-white/80">info@shiningstar.edu.np</p>
              </div>
              <div className="flex gap-2 items-start">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <p className="text-white/80">Mon-Fri: 8AM - 5PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-white/80">© 2025 Shining Star Disable Child Learning Center. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
