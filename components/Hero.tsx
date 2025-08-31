'use client'

import Image from 'next/image'
import { FaPhone, FaTools } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-warm-cream to-primary-50" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/images/logo.png"
                alt="SOS Repair Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">
            SOS Repair
            <span className="block text-2xl md:text-3xl lg:text-4xl text-primary-600 mt-2">
              維修中心
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            快速、精準、負責
          </p>

          {/* Services highlight */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-gray-700 shadow-md">
              iPhone
            </span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-gray-700 shadow-md">
              iPad
            </span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-gray-700 shadow-md">
              MacBook
            </span>
            <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-gray-700 shadow-md">
              iMac
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02-2396-0505"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaPhone />
              立即撥打 02-2396-0505
            </a>
            <a
              href="https://lin.ee/sSZiFBV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              LINE 諮詢估價
            </a>
          </div>

          {/* Features */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <FaTools className="text-primary-600" />
              <span>免費檢測</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTools className="text-primary-600" />
              <span>專業維修</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTools className="text-primary-600" />
              <span>誠信開立發票</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}