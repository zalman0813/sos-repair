'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: '關於我們', href: '#about' },
    { label: '服務項目', href: '#services' },
    { label: '最新消息', href: '#news' },
    { label: '客戶評價', href: '#reviews' },
    { label: '聯絡我們', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo.png"
                alt="SOS Repair"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-warm-yellow font-bold text-lg md:text-xl">SOS Repair</h1>
              <p className="text-gray-600 text-xs">專業維修中心</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-warm-yellow transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:02-2396-0505"
              className="flex items-center gap-2 px-4 py-2 bg-warm-yellow hover:bg-warm-orange text-white rounded-full transition-colors"
            >
              <FaPhone className="text-sm" />
              <span>立即撥打</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-warm-yellow p-2"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-orange-200">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:text-warm-yellow hover:bg-orange-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:02-2396-0505"
                className="mx-4 mt-2 py-3 text-center bg-warm-yellow hover:bg-warm-orange text-white rounded-lg transition-colors"
              >
                立即撥打 02-2396-0505
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}