'use client'

import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-warm-cream">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          聯絡我們
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          歡迎來電或 LINE 諮詢，我們將竭誠為您服務
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <FaPhone className="text-2xl text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">電話</h3>
                  <a
                    href="tel:02-2396-0505"
                    className="text-xl text-primary-600 font-bold hover:underline"
                  >
                    02-2396-0505
                  </a>
                  <p className="text-gray-600 text-sm mt-1">平日工務繁忙，歡迎直接洽詢</p>
                </div>
              </div>
            </div>

            {/* LINE */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <SiLine className="text-2xl text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">LINE 官方帳號</h3>
                  <a
                    href="https://lin.ee/sSZiFBV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-bold hover:underline"
                  >
                    @616zrzay
                  </a>
                  <div className="mt-3">
                    <Image
                      src="/images/lineQR.png"
                      alt="LINE QR Code"
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">地址</h3>
                  <p className="text-gray-700">台北市中正區青島東路21-3號</p>
                  <a
                    href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 text-sm hover:underline mt-1 inline-block"
                  >
                    在 Google 地圖上查看
                  </a>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <FaClock className="text-2xl text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">營業時間</h3>
                  <p className="text-gray-700">週一至週六 10:00 - 19:00</p>
                  <p className="text-gray-600 text-sm">週日公休</p>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-3">社群媒體</h3>
              <div className="flex gap-4">
                <a
                  href="https://pse.is/82cjls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/sosrepair__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="mailto:sosrepair0505@gmail.com"
                  className="p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[600px] lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5759831435595!2d121.52576631544686!3d25.048571283963673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96d88888888%3A0x8888888888888888!2z5Y-w5YyX5biC5Lit5q2j5Y2A6Z2S5bO25p2x6LevMjEtM-iZnw!5e0!3m2!1szh-TW!2stw!4v1635840000000!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}