'use client'

import { FaLaptop, FaDesktop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'

const services = [
  {
    id: 'macbook',
    title: 'MacBook',
    subtitle: '免費檢測．專業維修',
    icon: FaLaptop,
    issues: [
      '無法開機', '鍵盤故障', '內部清潔', '觸控板失靈',
      '潑到水', '螢幕破裂', '顯示異常', '無法充電',
      '蓄電不佳', '速度太慢', '主機板異常'
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'imac',
    title: 'iMac',
    subtitle: '免費檢測．專業維修',
    icon: FaDesktop,
    issues: [
      '無法開機', '內部清潔', '潑到水', '螢幕破裂',
      '顯示異常', '速度太慢', '喇叭破音', '主機板異常'
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'ipad',
    title: 'iPad',
    subtitle: '免費檢測．專業維修',
    icon: FaTabletAlt,
    issues: [
      '無法開機', '面板破裂', '顯示異常', '無充電反應',
      '喇叭破音', '泡水', '蓄電不佳', '按鍵失靈', '主機板異常'
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'iphone',
    title: 'iPhone',
    subtitle: '免費檢測．專業維修',
    icon: FaMobileAlt,
    issues: [
      '無法開機', '蓄電不佳', '泡水', '螢幕破裂',
      '顯示異常', '觸控失靈', '聽筒無聲', '無充電反應', '主機板異常'
    ],
    color: 'from-red-400 to-red-600'
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-warm-cream to-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          專業維修服務
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          蘋果產品，免費檢測，誠信開立發票
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <Icon className="text-4xl" />
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-white/90">{service.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Issues list */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">常見維修項目：</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.issues.map((issue, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-warm-beige text-gray-700 rounded-full text-sm hover:bg-primary-100 transition-colors"
                      >
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <a
                    href="https://lin.ee/sSZiFBV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-colors"
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
          <p className="text-gray-600 mb-4">其他服務項目：</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white shadow-md rounded-full text-gray-700">
              配件販售（手機殼 / 充電器）
            </span>
            <span className="px-6 py-3 bg-white shadow-md rounded-full text-gray-700">
              二手機買賣
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}