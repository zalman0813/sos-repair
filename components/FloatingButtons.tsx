'use client'

import { FaPhone, FaArrowUp, FaGlobe } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FloatingButtons() {
  const { t, language, setLanguage } = useLanguage()
  const [showScrollTop, setShowScrollTop] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === 'zh-TW' ? 'en' : 'zh-TW')
  }

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
            aria-label={language === 'zh-TW' ? '回到頂部' : 'Back to top'}
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}

        {/* Phone */}
        <a
          href="tel:02-2396-0505"
          className="p-4 metallic-button text-white rounded-full shadow-lg transition-all hover:scale-110 animate-pulse"
          aria-label={t.floating.phone}
        >
          <FaPhone className="text-xl" />
        </a>

        {/* LINE */}
        <a
          href="https://lin.ee/sSZiFBV"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
          aria-label={t.floating.line}
        >
          <SiLine className="text-xl" />
        </a>

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="flex flex-col items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-110"
          aria-label={t.floating.language}
        >
          <FaGlobe className="text-white text-lg" />
          <span className="text-white text-[8px] font-medium leading-tight">EN/中文</span>
        </button>
      </div>
    </>
  )
}