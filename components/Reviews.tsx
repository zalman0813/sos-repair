'use client'

import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

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

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section id="reviews" className="section-padding bg-warm-beige">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          客戶好評
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          超過10年的專業服務，深受客戶信賴
        </p>

        {/* Store photos */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/front.png"
              alt="SOS Repair 店面"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/comment.png"
              alt="客戶評價"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Reviews carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-lg ${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  <div className="mb-3">
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.device}</p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Google reviews reference */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              更多評價請參考我們的 
              <a
                href="https://www.google.com/maps/place/SOS+Repair"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-semibold hover:underline ml-1"
              >
                Google 商家評論
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}