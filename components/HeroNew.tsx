'use client'

import Image from 'next/image'
import { FaPhone, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'

export default function HeroNew() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Soft overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-4">
          {/* Glass morphism card - positioned based on red block reference */}
          <div className="flex justify-start">
            <div className="w-full max-w-md ml-8 lg:ml-16">
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-5 shadow-2xl">
                {/* Premium tagline */}
                <div className="flex justify-start mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-md bg-white/20 rounded-full border border-warm-yellow/50">
                    <FaShieldAlt className="text-warm-yellow text-xs" />
                    <span className="text-xs font-bold text-gray-900">專業認證維修團隊</span>
                  </div>
                </div>
                
                {/* Main Title */}
                <div className="text-left mb-4">
                  <h1 className="text-3xl md:text-4xl font-black mb-2">
                    <span className="bg-gradient-to-r from-warm-yellow to-warm-gold bg-clip-text text-transparent">
                      SOS Repair
                    </span>
                  </h1>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    維修中心
                  </h2>
                  
                  <p className="text-base md:text-lg font-bold bg-gradient-to-r from-warm-yellow to-warm-gold bg-clip-text text-transparent">
                    快速・精準・負責
                  </p>
                </div>

                {/* Product Badges */}
                <div className="flex justify-start mb-4">
                  <div className="inline-flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 backdrop-blur-md bg-white/30 rounded-full text-xs font-semibold border border-warm-yellow/30 text-gray-900">iPhone</span>
                    <span className="px-2.5 py-1 backdrop-blur-md bg-white/30 rounded-full text-xs font-semibold border border-warm-yellow/30 text-gray-900">iPad</span>
                    <span className="px-2.5 py-1 backdrop-blur-md bg-white/30 rounded-full text-xs font-semibold border border-warm-yellow/30 text-gray-900">MacBook</span>
                    <span className="px-2.5 py-1 backdrop-blur-md bg-white/30 rounded-full text-xs font-semibold border border-warm-yellow/30 text-gray-900">iMac</span>
                  </div>
                </div>

                {/* Key Features Grid - 2x2 layout */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  <div className="backdrop-blur-md bg-white/20 rounded-lg p-2.5 border border-white/30">
                    <FaCheckCircle className="text-warm-yellow text-sm mb-1" />
                    <p className="font-bold text-gray-900 text-xs">10年以上經驗</p>
                    <p className="text-[10px] text-gray-800">專業技術保證</p>
                  </div>
                  <div className="backdrop-blur-md bg-white/20 rounded-lg p-2.5 border border-white/30">
                    <FaCheckCircle className="text-warm-yellow text-sm mb-1" />
                    <p className="font-bold text-gray-900 text-xs">原廠品質零件</p>
                    <p className="text-[10px] text-gray-800">品質有保障</p>
                  </div>
                  <div className="backdrop-blur-md bg-white/20 rounded-lg p-2.5 border border-white/30">
                    <FaCheckCircle className="text-warm-yellow text-sm mb-1" />
                    <p className="font-bold text-gray-900 text-xs">免費檢測</p>
                    <p className="text-[10px] text-gray-800">誠信開立發票</p>
                  </div>
                  <div className="backdrop-blur-md bg-white/20 rounded-lg p-2.5 border border-white/30">
                    <FaCheckCircle className="text-warm-yellow text-sm mb-1" />
                    <p className="font-bold text-gray-900 text-xs">當日完修</p>
                    <p className="text-[10px] text-gray-800">快速維修服務</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="tel:02-2396-0505"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-warm-yellow to-warm-gold text-white rounded-lg font-bold text-sm shadow-xl hover:shadow-warm-yellow/30 transition-all hover:scale-105"
                  >
                    <FaPhone className="text-sm" />
                    <span>02-2396-0505</span>
                  </a>
                  <a
                    href="https://lin.ee/sSZiFBV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 backdrop-blur-md bg-white/30 border-2 border-green-500 text-green-600 rounded-lg font-bold text-sm hover:bg-white/50 transition-all hover:scale-105 shadow-lg"
                  >
                    <SiLine className="text-base" />
                    <span>LINE 免費諮詢</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}