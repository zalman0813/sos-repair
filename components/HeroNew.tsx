'use client'

import Image from 'next/image'
import { FaPhone, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-orange-100 to-yellow-100">
      {/* Warm yellow gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-warm-yellow/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-warm-orange/10 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Premium tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 border border-orange-200">
              <FaShieldAlt className="text-warm-yellow text-sm" />
              <span className="text-sm font-semibold text-gray-700">專業認證維修團隊</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-warm-yellow">
                SOS Repair
              </span>
              <span className="block text-3xl md:text-4xl text-gray-700 mt-3">
                維修中心
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-3 font-medium">
              快速、精準、負責
            </p>

            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
              專業 Apple 產品維修服務<br />
              <span className="inline-flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm border border-orange-200 text-gray-700">iPhone</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm border border-orange-200 text-gray-700">iPad</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm border border-orange-200 text-gray-700">MacBook</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm border border-orange-200 text-gray-700">iMac</span>
              </span>
            </p>

            {/* Key benefits in a clean grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-orange-200">
                <FaCheckCircle className="text-warm-yellow mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-gray-700 text-sm">10年以上經驗</p>
                  <p className="text-xs text-gray-600">專業技術保證</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-orange-200">
                <FaCheckCircle className="text-warm-yellow mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-gray-700 text-sm">原廠品質零件</p>
                  <p className="text-xs text-gray-600">品質有保障</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-orange-200">
                <FaCheckCircle className="text-warm-yellow mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-gray-700 text-sm">免費檢測</p>
                  <p className="text-xs text-gray-600">誠信開立發票</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-orange-200">
                <FaCheckCircle className="text-warm-yellow mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold text-gray-700 text-sm">當日完修</p>
                  <p className="text-xs text-gray-600">快速維修服務</p>
                </div>
              </div>
            </div>

            {/* CTAs with improved design */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:02-2396-0505"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-warm-yellow text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 hover:bg-warm-orange"
              >
                <FaPhone className="text-lg" />
                <span>02-2396-0505</span>
              </a>
              <a
                href="https://lin.ee/sSZiFBV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-green-500 text-green-600 rounded-xl font-bold text-lg hover:bg-green-50 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <SiLine className="text-xl" />
                <span>LINE 免費諮詢</span>
              </a>
            </div>
          </div>

          {/* Right Side - Pure Logo */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-96 h-96">
              <Image
                src="/images/logo.png"
                alt="SOS Repair Professional Service"
                width={500}
                height={500}
                className="w-full h-full object-contain filter brightness-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}