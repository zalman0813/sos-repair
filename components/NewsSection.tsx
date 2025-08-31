'use client'

import Image from 'next/image'

const newsItems = [
  {
    id: 1,
    image: 'https://static.wixstatic.com/media/5a0c2d_ebac41d8d28d45ac8da1e6f96af925b3~mv2.jpg/v1/fill/w_455,h_455,q_90,enc_avif,quality_auto/5a0c2d_ebac41d8d28d45ac8da1e6f96af925b3~mv2.jpg',
    link: 'https://www.instagram.com/p/DNkX0EpPQKI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    alt: 'Instagram 貼文 1'
  },
  {
    id: 2,
    image: 'https://static.wixstatic.com/media/5a0c2d_60bedc62bc3647af9a0dfc425ba2c986~mv2.jpg/v1/fill/w_455,h_455,q_90,enc_avif,quality_auto/5a0c2d_60bedc62bc3647af9a0dfc425ba2c986~mv2.jpg',
    link: 'https://www.instagram.com/p/DNZpltovmCB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    alt: 'Instagram 貼文 2'
  },
  {
    id: 3,
    image: 'https://static.wixstatic.com/media/5a0c2d_018d3bd988a94ea19c00c57dbe83b153~mv2.jpg/v1/fill/w_455,h_455,q_90,enc_avif,quality_auto/5a0c2d_018d3bd988a94ea19c00c57dbe83b153~mv2.jpg',
    link: 'https://www.instagram.com/p/DNSFOBFP7nU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    alt: 'Instagram 貼文 3'
  },
  {
    id: 4,
    image: 'https://static.wixstatic.com/media/5a0c2d_c1437c50f307450b9a7f62c4d7f585e6~mv2.jpg/v1/fill/w_455,h_455,q_90,enc_avif,quality_auto/5a0c2d_c1437c50f307450b9a7f62c4d7f585e6~mv2.jpg',
    link: 'https://www.instagram.com/p/DNIVjI_Pfki/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    alt: '別等到 11 月才發現 LINE 登不進去💬'
  }
]

export default function NewsSection() {
  return (
    <section id="news" className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-warm-yellow text-glow">最新消息</span>
          </h2>
          <div className="w-24 h-1 bg-warm-yellow mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            關注我們的 Instagram 獲取最新維修資訊與服務動態
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden border border-blue-200 hover:border-blue-300 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Instagram overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer with Instagram branding */}
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm font-medium text-purple-600">查看 Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
            <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <div>
              <p className="text-purple-700 font-semibold">關注我們的 Instagram</p>
              <p className="text-purple-600 text-sm">@sos.repair 獲取更多維修實例與技術分享</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}