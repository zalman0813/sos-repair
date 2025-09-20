'use client'

import Image from 'next/image'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const reviews = [
  {
    id: 1,
    name: '陳小姐',
    device: 'iPhone 14 Pro',
    rating: 5,
    comment: '螢幕破裂當天就修好了，價格透明合理，服務態度很好！',
    date: '2024年1月'
  },
  {
    id: 2,
    name: '林先生',
    device: 'MacBook Pro 2021',
    rating: 5,
    comment: '鍵盤進水，原本以為要送原廠，結果這裡2天就修好了，省了很多錢和時間。',
    date: '2024年1月'
  },
  {
    id: 3,
    name: '王小姐',
    device: 'iPad Air',
    rating: 5,
    comment: '電池老化換新，現在續航力跟新的一樣，還有一年保固，很安心。',
    date: '2023年12月'
  },
  {
    id: 4,
    name: '張先生',
    device: 'iPhone 13',
    rating: 5,
    comment: '主機板維修技術真的很專業，原本開不了機的手機救回來了，資料都還在！',
    date: '2023年12月'
  }
]

export default function ReviewsNew() {
  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-warm-yellow text-glow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>客戶好評</span>
          </h2>
          <div className="w-24 h-1 bg-warm-yellow mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg">
            超過10年的專業服務，深受客戶信賴
          </p>
        </div>

        {/* Store photos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 group hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10" />
            <Image
              src="/images/front.png"
              alt="SOS Repair 店面"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-warm-yellow font-bold text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>實體店面</h3>
              <p className="text-gray-700">台北市中正區青島東路21-3號</p>
            </div>
          </div>
          
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 group hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10" />
            <Image
              src="/images/comment.png"
              alt="客戶評價"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-warm-yellow font-bold text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>真實評價</h3>
              <p className="text-gray-700">Google 評分 4.8 / 5.0</p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start gap-2 mb-4">
                <FaQuoteLeft className="text-warm-yellow/30 text-2xl" />
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < review.rating ? 'text-warm-yellow' : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-grow">
                {review.comment}
              </p>
              
              <div className="pt-4 border-t border-white/20 mt-auto">
                <p className="font-semibold text-warm-yellow" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>{review.name}</p>
                <p className="text-xs text-gray-500">{review.device}</p>
                <p className="text-xs text-gray-600 mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews reference */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/SOS+Repair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-sm bg-gradient-to-r from-amber-50/50 to-orange-50/50 rounded-full text-warm-yellow hover:from-amber-100/50 hover:to-orange-100/50 transition-all duration-300 border border-white/20 shadow-[0_4px_16px_0_rgba(31,38,135,0.05)]"
          >
            <span>查看更多 Google 評價</span>
          </a>
        </div>
      </div>
    </section>
  )
}