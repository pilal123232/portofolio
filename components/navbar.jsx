"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github, Instagram, Twitter, Facebook } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              AbdulMoein<span className="text-white">Portfolio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link href={link.href} className="text-gray-300 hover:text-white transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="group inline-block">
              <a
                href="https://www.facebook.com/share/1AJ8fUgk1Y/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 group-hover:text-white transition-transform duration-200"
              >
                <span className="inline-block transform group-hover:-translate-y-1">
                  <Facebook size={20} />
                </span>
              </a>
            </div>
            <div className="group inline-block">
              <a
                href="https://www.instagram.com/abdulmoeinkhalil?igsh=Mmx1bnFyZ2c0NDhn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 group-hover:text-white transition-transform duration-200"
              >
                <span className="inline-block transform group-hover:-translate-y-1">
                  <Instagram size={20} />
                </span>
              </a>
            </div>
            <div className="group inline-block">
              <a
                href="https://x.com/Abdulmoeinkaba?t=Cz_TOj6ItMlPJ0pkl20c8A&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 group-hover:text-white transition-transform duration-200"
              >
                <span className="inline-block transform group-hover:-translate-y-1">
                  <Twitter size={20} />
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-gray-900 shadow-lg transition-all duration-300 ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
          }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-800">
              <a
                href="https://www.facebook.com/share/1AJ8fUgk1Y/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/abdulmoeinkhalil?igsh=Mmx1bnFyZ2c0NDhn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/Abdulmoeinkaba?t=Cz_TOj6ItMlPJ0pkl20c8A&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={20} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

