'use client'

import Image from 'next/image'
import { FaTools } from 'react-icons/fa'

const services = [
  {
    id: 'macbook',
    title: 'MacBook',
    subtitle: '免費檢測．專業維修',
    image: '/images/services/macbook.jpg',
    issues: [
      '無法開機', '鍵盤故障', '內部清潔', '觸控板失靈',
      '潑到水', '螢幕破裂', '顯示異常', '無法充電',
      '蓄電不佳', '速度太慢', '主機板異常'
    ],
  },
  {
    id: 'imac',
    title: 'iMac',
    subtitle: '免費檢測．專業維修',
    image: '/images/services/imac.png',
    issues: [
      '無法開機', '內部清潔', '潑到水', '螢幕破裂',
      '顯示異常', '速度太慢', '喇叭破音', '主機板異常'
    ],
  },
  {
    id: 'ipad',
    title: 'iPad',
    subtitle: '免費檢測．專業維修',
    image: '/images/services/ipad.jpg',
    issues: [
      '無法開機', '面板破裂', '顯示異常', '無充電反應',
      '喇叭破音', '泡水', '蓄電不佳', '按鍵失靈', '主機板異常'
    ],
  },
  {
    id: 'iphone',
    title: 'iPhone',
    subtitle: '免費檢測．專業維修',
    image: '/images/services/iphone.jpg',
    issues: [
      '無法開機', '蓄電不佳', '泡水', '螢幕破裂',
      '顯示異常', '觸控失靈', '聽筒無聲', '無充電反應'
    ],
  }
]

export default function ServicesNew() {
  return (
    <section id="services" className="section-padding bg-gradient-to-r from-orange-100 to-yellow-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-warm-yellow text-glow">服務項目</span>
          </h2>
          <div className="w-24 h-1 bg-warm-yellow mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            35年裝修經驗的自有工班，提供專業維修服務
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="group relative bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-200 hover:border-orange-300 transition-all hover:scale-105 shadow-lg"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Product Image */}
                <div className="p-8 text-center">
                  <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-orange-50 to-warm-yellow/5 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-warm-yellow/20 transition-all duration-300 overflow-hidden">
                    <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={service.image}
                        alt={`${service.title} 維修服務`}
                        fill
                        className="object-contain drop-shadow-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-warm-yellow mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {service.subtitle}
                  </p>
                </div>

                {/* Issues - Two Column Layout */}
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 max-h-40 overflow-y-auto custom-scrollbar">
                    {service.issues.map((issue, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 text-gray-700 text-xs"
                      >
                        <FaTools className="text-warm-yellow/60 text-xs flex-shrink-0" />
                        <span className="leading-tight">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-4 bg-orange-50">
                  <a
                    href="https://lin.ee/sSZiFBV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2 bg-warm-yellow/10 text-warm-yellow rounded-lg hover:bg-warm-yellow/20 transition-colors font-semibold"
                  >
                    立即諮詢
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional services */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 p-6 bg-orange-50 rounded-2xl border border-orange-200">
            <div className="px-6 py-3 bg-warm-yellow/10 rounded-full">
              <span className="text-warm-yellow font-semibold">配件販售</span>
            </div>
            <div className="px-6 py-3 bg-warm-yellow/10 rounded-full">
              <span className="text-warm-yellow font-semibold">二手機買賣</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}