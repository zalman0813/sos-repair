import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_TC({ 
  subsets: ['latin'],
  variable: '--font-noto-sans',
})

export const metadata: Metadata = {
  title: 'SOS Repair 維修中心 - 專業 Apple 產品維修',
  description: '快速、精準、負責。iPhone、iPad、MacBook 專業維修，免費檢測，誠信開立發票。位於台北市中正區，交通便利。',
  keywords: 'iPhone維修, iPad維修, MacBook維修, iMac維修, Apple維修, 台北維修, 手機維修, 筆電維修',
  openGraph: {
    title: 'SOS Repair 維修中心',
    description: '專業 Apple 產品維修服務',
    type: 'website',
    locale: 'zh_TW',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSans.variable} font-sans`}>{children}</body>
    </html>
  )
}