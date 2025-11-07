"use client"

import { useState } from "react"
import {  Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar - Quick Links */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <div className="flex gap-4 md:gap-8">
            <a href="#" className="hover:opacity-80 transition">
              Parents
            </a>
            <a href="#" className="hover:opacity-80 transition">
              Students
            </a>
            <a href="#" className="hover:opacity-80 transition">
              Staff
            </a>
            <a href="#" className="hover:opacity-80 transition">
              Community
            </a>
          </div>
          {/* Social Icons Placeholder */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-600 text-xs hover:opacity-80 transition"
            >

f            </a>
            <a
              href="#"
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-600 text-xs hover:opacity-80 transition"
            >
              y
            </a>
            <a
              href="#"
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-600 text-xs hover:opacity-80 transition"
            >
              in
            </a>
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
                <h1 className="font-serif font-bold text-lg text-primary">Shining Star</h1>
                <p className="text-xs text-muted-foreground">Disable Child Learning Center</p>
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
