'use client'

import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'

export default function ContactNew() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-warm-yellow text-glow">聯絡我們</span>
          </h2>
          <div className="w-24 h-1 bg-warm-yellow mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            大台北 免費到府檢測 快速估價服務
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-warm-yellow/10 rounded-full flex items-center justify-center">
                  <FaPhone className="text-warm-yellow text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-warm-yellow">電話</h3>
              </div>
              <a
                href="tel:02-2396-0505"
                className="text-2xl text-gray-700 hover:text-warm-yellow transition-colors font-bold"
              >
                02-2396-0505
              </a>
              <p className="text-gray-600 text-sm mt-2">平日工務繁忙 歡迎直接洽詢</p>
            </div>

            {/* LINE */}
            <div className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                  <SiLine className="text-green-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-warm-yellow">LINE</h3>
              </div>
              <a
                href="https://lin.ee/sSZiFBV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors font-semibold"
              >
                @616zrzay
              </a>
              <p className="text-gray-600 text-sm mt-2">點擊加入好友</p>
            </div>

            {/* Address */}
            <div className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-warm-yellow/10 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-warm-yellow text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-warm-yellow">地址</h3>
              </div>
              <p className="text-gray-700">
                台北市中正區<br />青島東路21-3號
              </p>
              <a
                href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-yellow text-sm hover:underline mt-2 inline-block"
              >
                在地圖上查看 →
              </a>
            </div>

            {/* Hours */}
            <div className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-warm-yellow/10 rounded-full flex items-center justify-center">
                  <FaClock className="text-warm-yellow text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-warm-yellow">營業時間</h3>
              </div>
              <p className="text-gray-700">
                週一至週六<br />10:00 - 19:00
              </p>
              <p className="text-gray-600 text-sm mt-2">週日公休</p>
            </div>
          </div>

          {/* LINE QR Code */}
          <div className="backdrop-blur-lg bg-white/80 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-warm-yellow mb-6 text-center">
              LINE 快速加入
            </h3>
            <div className="relative w-48 h-48 mx-auto mb-6 bg-white p-4 rounded-xl">
              <Image
                src="/images/lineQR.png"
                alt="LINE QR Code"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-gray-700 text-sm">
              掃描 QR Code 或點擊下方按鈕
            </p>
            <a
              href="https://lin.ee/sSZiFBV"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 py-3 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors text-center font-semibold"
            >
              加入 LINE 好友
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">追蹤我們的社群媒體</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://pse.is/82cjls"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center hover:bg-blue-600/30 transition-colors"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/sosrepair__/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 text-pink-400 rounded-full flex items-center justify-center hover:from-purple-600/30 hover:to-pink-600/30 transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="mailto:sosrepair0505@gmail.com"
              className="w-12 h-12 bg-gray-600/20 text-gray-400 rounded-full flex items-center justify-center hover:bg-gray-600/30 transition-colors"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="backdrop-blur-lg bg-white/80 rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5759831435595!2d121.52576631544686!3d25.048571283963673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96d88888888%3A0x8888888888888888!2z5Y-w5YyX5biC5Lit5q2j5Y2A6Z2S5bO25p2x6LevMjEtM-iZnw!5e0!3m2!1szh-TW!2stw!4v1635840000000!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}