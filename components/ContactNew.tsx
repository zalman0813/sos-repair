'use client'

import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa'
import { SiLine } from 'react-icons/si'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactNew() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900" style={{ textShadow: '2px 2px 4px rgba(160, 160, 160, 0.5)' }}>{t.contact.title}</span>
          </h2>
          <div className="w-24 h-1 bg-warm-yellow mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            {t.contact.subtitle}
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
                <h3 className="text-xl font-semibold text-warm-yellow" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>{t.contact.phone.title}</h3>
              </div>
              <a
                href={`tel:${t.contact.phone.number}`}
                className="text-2xl text-gray-700 hover:text-warm-yellow transition-colors font-bold"
              >
                {t.contact.phone.number}
              </a>
              <p className="text-gray-600 text-sm mt-2">{t.contact.phone.description}</p>
            </div>

            {/* LINE */}
            <div className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                  <SiLine className="text-green-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-warm-yellow" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>{t.contact.line.title}</h3>
              </div>
              <a
                href="https://lin.ee/sSZiFBV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors font-semibold"
              >
                {t.contact.line.id}
              </a>
              <p className="text-gray-600 text-sm mt-2">{t.contact.line.description}</p>
              <p className="text-warm-yellow font-bold text-sm mt-1" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>{t.contact.line.discount}</p>
            </div>

            {/* Address */}
            <div className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-warm-yellow/10 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-warm-yellow text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-warm-yellow" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>{t.contact.address.title}</h3>
              </div>
              <p className="text-gray-700">
                {t.contact.address.city}<br />{t.contact.address.street}
              </p>
              <p className="text-warm-yellow text-sm mt-2 font-bold whitespace-pre-line" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>
                {t.contact.address.landmark}
              </p>
            </div>

            {/* Hours */}
            <div className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-warm-yellow/10 rounded-full flex items-center justify-center">
                  <FaClock className="text-warm-yellow text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-warm-yellow" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>{t.contact.hours.title}</h3>
              </div>
              <p className="text-gray-700">
                {t.contact.hours.days}<br />{t.contact.hours.time}
              </p>
              <p className="text-gray-600 text-sm mt-2">{t.contact.hours.note}</p>
            </div>
          </div>

          {/* LINE QR Code */}
          <div className="backdrop-blur-lg bg-white/80 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-warm-yellow mb-6 text-center" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>
              {t.contact.line.qrTitle}
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
              {t.contact.line.qrDescription}
            </p>
            <a
              href="https://lin.ee/sSZiFBV"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 py-3 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors text-center font-semibold"
            >
              {t.contact.line.addFriend}
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">{t.contact.social.follow}</p>
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
