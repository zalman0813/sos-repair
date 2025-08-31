'use client'

import { FaPhone, FaArrowUp } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'
import { useState, useEffect } from 'react'

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Fixed contact buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Scroll to top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-4 metallic-surface border border-metallic-rosegold/30 text-metallic-copper rounded-full shadow-lg hover:border-metallic-copper/50 transition-all hover:scale-110"
            aria-label="回到頂部"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}

        {/* Phone */}
        <a
          href="tel:02-2396-0505"
          className="p-4 metallic-button text-white rounded-full shadow-lg transition-all hover:scale-110 animate-pulse"
          aria-label="撥打電話"
        >
          <FaPhone className="text-xl" />
        </a>

        {/* LINE */}
        <a
          href="https://lin.ee/sSZiFBV"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
          aria-label="LINE 聯絡"
        >
          <SiLine className="text-xl" />
        </a>
      </div>
    </>
  )
}