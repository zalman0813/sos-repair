'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, Translation, zhTW, en } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Translation> = {
  'zh-TW': zhTW,
  'en': en,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh-TW')
  const [mounted, setMounted] = useState(false)

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'zh-TW' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage)
    }
    setMounted(true)
  }, [])

  // Save language preference to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Update HTML lang attribute
    document.documentElement.lang = lang
  }

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    // Return default values for SSR
    return {
      language: 'zh-TW' as Language,
      setLanguage: () => {},
      t: zhTW,
    }
  }
  return context
}
