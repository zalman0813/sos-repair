'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#f2d50d] py-16 md:py-20" style={{ fontFamily: '"Microsoft JhengHei", "微軟正黑體", sans-serif' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Founded Year */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-3">
              {t.stats.founded.number}
            </h3>
            <div className="w-36 h-0.5 bg-gray-900 mx-auto mb-3"></div>
            <p className="text-gray-900 font-bold text-base md:text-lg">
              {t.stats.founded.label}
            </p>
          </div>

          {/* Google Reviews */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-3">
              {t.stats.reviews.number}
            </h3>
            <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-3"></div>
            <p className="text-gray-900 font-bold text-base md:text-lg">
              {t.stats.reviews.label}
            </p>
          </div>

          {/* Success Cases */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-3">
              {t.stats.cases.number}
            </h3>
            <div className="w-36 h-0.5 bg-gray-900 mx-auto mb-3"></div>
            <p className="text-gray-900 font-bold text-base md:text-lg">
              {t.stats.cases.label}
            </p>
          </div>

          {/* Partnership */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-3">
              {t.stats.partnership.number}
            </h3>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-3"></div>
            <p className="text-gray-900 font-bold text-base md:text-lg">
              {t.stats.partnership.label}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}