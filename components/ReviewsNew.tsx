'use client'

import Image from 'next/image'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ReviewsNew() {
  const { t } = useLanguage()
  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900" style={{ textShadow: '2px 2px 4px rgba(160, 160, 160, 0.5)' }}>{t.reviews.title}</span>
          </h2>
          <div className="w-24 h-1 bg-warm-yellow mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Store photos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 group hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10" />
            <Image
              src="/images/front.png"
              alt="SOS Repair 店面"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-warm-yellow font-bold text-xl" style={{ textShadow: '2px 2px 4px rgba(128, 128, 128, 0.4)' }}>{t.reviews.storeTitle}</h3>
              <p className="text-gray-700">{t.reviews.storeAddress}</p>
            </div>
          </div>

          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 group hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10" />
            <Image
              src="/images/comment.png"
              alt="Customer Reviews"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-warm-yellow font-bold text-xl" style={{ textShadow: '2px 2px 4px rgba(128, 128, 128, 0.4)' }}>{t.reviews.reviewsTitle}</h3>
              <p className="text-gray-700">{t.reviews.googleRating}</p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.reviews.testimonials.map((review, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start gap-2 mb-4">
                <FaQuoteLeft className="text-warm-yellow/30 text-2xl" />
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-sm text-warm-yellow"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-grow">
                {review.comment}
              </p>

              <div className="pt-4 border-t border-white/20 mt-auto">
                <p className="font-semibold text-warm-yellow" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>{review.name}</p>
                <p className="text-xs text-gray-500">{review.device}</p>
                <p className="text-xs text-gray-600 mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews reference */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/SOS+Repair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-sm bg-gradient-to-r from-amber-50/50 to-orange-50/50 rounded-full text-warm-yellow hover:from-amber-100/50 hover:to-orange-100/50 transition-all duration-300 border border-white/20 shadow-[0_4px_16px_0_rgba(31,38,135,0.05)]"
          >
            <span>{t.reviews.viewMore}</span>
          </a>
        </div>
      </div>
    </section>
  )
}