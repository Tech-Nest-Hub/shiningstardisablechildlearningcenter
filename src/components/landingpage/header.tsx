"use client"

import { useState } from "react"
import { Menu, Share2, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
     import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from 'next-share';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"



export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
const shareUrl = 'https://shiningstarlearningcenter.edu.np';
const shareTitle = 'Shining Star Learning Center - Quality Education for a Brighter Future';

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
{/* Top Bar - Contact & Social */}
<div className="bg-primary text-white py-3 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
    {/* Contact Information */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>+977-98-4984030405</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>info@shiningstar.edu.np</span>
      </div>
          {/* Address */}
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>Koteshwor, Nepal</span>
    </div>

    </div>


    {/* Social Icons & Offices Dropdown */}
    <div className="flex items-center gap-3">
      {/* Social Icons */}
      <div className="flex gap-2">
        <FacebookShareButton
          url={shareUrl}
          quote={shareTitle}
          blankTarget
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition"
        >
          <FacebookIcon size={24} round />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          title={shareTitle}
          blankTarget
          separator=":: "
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition"
        >
          <WhatsappIcon size={24} round />
        </WhatsappShareButton>

        <button
          onClick={() => navigator.share?.({
            title: shareTitle,
            url: shareUrl,
          })}
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition"
        >
          <Share2 className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Offices Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-1 border border-white/30 rounded-md hover:bg-white/10 transition text-xs sm:text-sm">
          Our Offices
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Nepal</DropdownMenuItem>
          <DropdownMenuItem>India</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</div>

      {/* Main Header */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Branding Area */}
          <Link href="/" className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/shining_star_logo.svg" alt="Shining Star Logo" width={64} height={64} />
              <div>
                <h1 className="font-serif font-extrabold text-4xl text-primary">Shining Star</h1>
                <p className="text-xl text-muted-foreground">Disable Child Learning Center</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition font-medium">
              About Us
            </Link>
            <Link href="/programs" className="text-foreground hover:text-primary transition font-medium">
              Programs
            </Link>
            <Link href="/updates" className="text-foreground hover:text-primary transition font-medium">
              Updates
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition font-medium">
              Gallery
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block py-2 text-foreground hover:text-primary transition font-medium">
                Home
              </Link>
              <Link href="/about" className="block py-2 text-foreground hover:text-primary transition font-medium">
                About Us
              </Link>
              <Link href="/programs" className="block py-2 text-foreground hover:text-primary transition font-medium">
                Programs
              </Link>
              <Link href="/updates" className="block py-2 text-foreground hover:text-primary transition font-medium">
                Updates
              </Link>
              <Link href="/gallery" className="block py-2 text-foreground hover:text-primary transition font-medium">
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block py-3 bg-primary text-white rounded-lg font-semibold text-center hover:opacity-90 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
