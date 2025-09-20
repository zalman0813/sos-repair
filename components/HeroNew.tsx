'use client'

import Image from 'next/image'
import { FaPhone, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'

export default function HeroNew() {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background Image with responsive aspect ratio handling */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Image container with aspect ratio control */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/images/background.jpg"
            alt="Background"
            fill
            className="hero-bg-responsive"
            priority
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
        
        {/* Responsive fade effects */}
        <div className="absolute inset-0 hero-fade-left" />
        <div className="absolute inset-0 hero-fade-right" />
        
        {/* Text readability overlay */}
        <div className="absolute inset-0 hero-text-overlay" />
      </div>

      <div className="relative z-10 w-full h-full flex items-center">
        <div className="relative w-full h-full">
          {/* Glass morphism card - positioned absolutely to the left */}
          <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2">
            <div className="w-80 lg:w-96">
              <div className="relative backdrop-blur-[20px] backdrop-saturate-[180%] bg-gradient-to-br from-white/10 via-white/8 to-white/5 border border-white/20 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(255,255,255,0.15),inset_0_4px_20px_rgba(255,255,255,0.25)] overflow-hidden">
                {/* Liquid glass shine effect - multiple layers for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30 pointer-events-none" />
                {/* Water droplet reflection effect */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/8 rounded-full blur-[40px] pointer-events-none" />

                {/* Premium tagline */}
                <div className="relative flex justify-start mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-[15px] backdrop-saturate-[150%] bg-gradient-to-r from-white/15 to-white/10 rounded-full border border-white/30 shadow-[0_4px_15px_rgba(255,255,255,0.2),inset_0_2px_10px_rgba(255,255,255,0.15)]">
                    <FaShieldAlt className="text-warm-yellow text-xs drop-shadow-md" />
                    <span className="text-xs font-bold text-gray-900">專業認證維修團隊</span>
                  </div>
                </div>
                
                {/* Main Title */}
                <div className="relative text-left mb-4">
                  <h1 className="text-3xl md:text-4xl font-black mb-2">
                    <span className="text-warm-gold drop-shadow-lg">
                      SOS Repair
                    </span>
                  </h1>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 drop-shadow-sm">
                    維修中心
                  </h2>

                  <p className="text-base md:text-lg font-bold text-warm-gold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    快速・精準・負責
                  </p>
                </div>

                {/* Product Badges */}
                <div className="relative flex justify-start mb-4">
                  <div className="inline-flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 backdrop-blur-[12px] backdrop-saturate-[150%] bg-gradient-to-r from-white/20 to-white/15 rounded-full text-xs font-semibold border border-white/30 text-gray-900 shadow-[0_2px_10px_rgba(255,255,255,0.15),inset_0_1px_5px_rgba(255,255,255,0.1)]">iPhone</span>
                    <span className="px-2.5 py-1 backdrop-blur-[12px] backdrop-saturate-[150%] bg-gradient-to-r from-white/20 to-white/15 rounded-full text-xs font-semibold border border-white/30 text-gray-900 shadow-[0_2px_10px_rgba(255,255,255,0.15),inset_0_1px_5px_rgba(255,255,255,0.1)]">iPad</span>
                    <span className="px-2.5 py-1 backdrop-blur-[12px] backdrop-saturate-[150%] bg-gradient-to-r from-white/20 to-white/15 rounded-full text-xs font-semibold border border-white/30 text-gray-900 shadow-[0_2px_10px_rgba(255,255,255,0.15),inset_0_1px_5px_rgba(255,255,255,0.1)]">MacBook</span>
                    <span className="px-2.5 py-1 backdrop-blur-[12px] backdrop-saturate-[150%] bg-gradient-to-r from-white/20 to-white/15 rounded-full text-xs font-semibold border border-white/30 text-gray-900 shadow-[0_2px_10px_rgba(255,255,255,0.15),inset_0_1px_5px_rgba(255,255,255,0.1)]">iMac</span>
                  </div>
                </div>

                {/* Key Features Grid - 2x2 layout */}
                <div className="relative grid grid-cols-2 gap-2.5 mb-5">
                  <div className="relative backdrop-blur-[15px] backdrop-saturate-[160%] bg-gradient-to-br from-white/15 to-white/10 rounded-xl p-2.5 border border-white/25 shadow-[0_4px_15px_rgba(255,255,255,0.15),inset_0_2px_8px_rgba(255,255,255,0.2)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 pointer-events-none" />
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                    <FaCheckCircle className="relative text-warm-yellow text-sm mb-1 drop-shadow-md" />
                    <p className="relative font-bold text-gray-900 text-xs">10年以上經驗</p>
                    <p className="relative text-[10px] text-gray-800">專業技術保證</p>
                  </div>
                  <div className="relative backdrop-blur-[15px] backdrop-saturate-[160%] bg-gradient-to-br from-white/15 to-white/10 rounded-xl p-2.5 border border-white/25 shadow-[0_4px_15px_rgba(255,255,255,0.15),inset_0_2px_8px_rgba(255,255,255,0.2)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 pointer-events-none" />
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                    <FaCheckCircle className="relative text-warm-yellow text-sm mb-1 drop-shadow-md" />
                    <p className="relative font-bold text-gray-900 text-xs">原廠品質零件</p>
                    <p className="relative text-[10px] text-gray-800">品質有保障</p>
                  </div>
                  <div className="relative backdrop-blur-[15px] backdrop-saturate-[160%] bg-gradient-to-br from-white/15 to-white/10 rounded-xl p-2.5 border border-white/25 shadow-[0_4px_15px_rgba(255,255,255,0.15),inset_0_2px_8px_rgba(255,255,255,0.2)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 pointer-events-none" />
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                    <FaCheckCircle className="relative text-warm-yellow text-sm mb-1 drop-shadow-md" />
                    <p className="relative font-bold text-gray-900 text-xs">免費檢測</p>
                    <p className="relative text-[10px] text-gray-800">誠信開立發票</p>
                  </div>
                  <div className="relative backdrop-blur-[15px] backdrop-saturate-[160%] bg-gradient-to-br from-white/15 to-white/10 rounded-xl p-2.5 border border-white/25 shadow-[0_4px_15px_rgba(255,255,255,0.15),inset_0_2px_8px_rgba(255,255,255,0.2)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-40 pointer-events-none" />
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                    <FaCheckCircle className="relative text-warm-yellow text-sm mb-1 drop-shadow-md" />
                    <p className="relative font-bold text-gray-900 text-xs">當日完修</p>
                    <p className="relative text-[10px] text-gray-800">快速維修服務</p>
                  </div>
                </div>

                {/* Phone Button - Full width at bottom */}
                <a
                  href="tel:02-2396-0505"
                  className="relative flex items-center justify-center gap-2 w-full px-5 py-3 bg-warm-gold text-white rounded-xl font-bold text-base shadow-[0_4px_20px_rgba(251,191,36,0.4)] hover:shadow-[0_6px_30px_rgba(251,191,36,0.5)] transition-all hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-50 pointer-events-none" />
                  <FaPhone className="relative text-base drop-shadow-md" />
                  <span className="relative drop-shadow-md">02-2396-0505</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}