// Simple API structure for local content management
// In production, this would connect to Strapi or another CMS

export interface SiteContent {
  hero: {
    title: string
    subtitle: string
    tagline: string
    services: string[]
  }
  about: {
    title: string
    content: string[]
    principles: Array<{
      number: string
      title: string
      description: string
    }>
  }
  services: Array<{
    id: string
    title: string
    subtitle: string
    issues: string[]
    color: string
  }>
  contact: {
    phone: string
    line: string
    lineUrl: string
    email: string
    address: string
    hours: {
      weekdays: string
      weekend: string
    }
    social: {
      facebook: string
      instagram: string
    }
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  // In production, this would fetch from Strapi API
  // For now, returning static content
  return {
    hero: {
      title: 'SOS Repair',
      subtitle: '維修中心',
      tagline: '快速、精準、負責',
      services: ['iPhone', 'iPad', 'MacBook', 'iMac']
    },
    about: {
      title: '關於 SOS Repair',
      content: [
        'SOS Repair 成立的初衷，是希望在台北市中心，提供一個交通方便、且快速服務的 Apple 專業維修據點。',
        '我們深知，您的 iPhone、iPad、MacBook 不只是工具，更承載著生活、工作與回憶。',
        '維修團隊由多位擁有超過 10 年維修經驗的專業工程師組成。'
      ],
      principles: [
        {
          number: '1️⃣',
          title: '專業標準',
          description: '每一項維修都依照嚴謹流程操作，避免二次損傷。'
        },
        {
          number: '2️⃣',
          title: '嚴選零件',
          description: '自收貨確認、功能測試、上機穩定性，3階段流程，只使用高品質零件。'
        },
        {
          number: '3️⃣',
          title: '持續精進',
          description: '定期引進最新維修設備與技術，與 Apple 新機同步進化。'
        }
      ]
    },
    services: [
      {
        id: 'macbook',
        title: 'MacBook',
        subtitle: '免費檢測．專業維修',
        issues: ['無法開機', '鍵盤故障', '觸控板失靈', '潑到水', '螢幕破裂'],
        color: 'from-blue-400 to-blue-600'
      },
      {
        id: 'imac',
        title: 'iMac',
        subtitle: '免費檢測．專業維修',
        issues: ['無法開機', '潑到水', '螢幕破裂', '顯示異常', '速度太慢'],
        color: 'from-purple-400 to-purple-600'
      },
      {
        id: 'ipad',
        title: 'iPad',
        subtitle: '免費檢測．專業維修',
        issues: ['無法開機', '面板破裂', '顯示異常', '無充電反應', '喇叭破音', '泡水'],
        color: 'from-green-400 to-green-600'
      },
      {
        id: 'iphone',
        title: 'iPhone',
        subtitle: '免費檢測．專業維修',
        issues: ['無法開機', '蓄電不佳', '泡水', '螢幕破裂', '顯示異常', '觸控失靈'],
        color: 'from-red-400 to-red-600'
      }
    ],
    contact: {
      phone: '02-2396-0505',
      line: '@616zrzay',
      lineUrl: 'https://lin.ee/sSZiFBV',
      email: 'sosrepair0505@gmail.com',
      address: '台北市中正區青島東路21-3號',
      hours: {
        weekdays: '週一至週六 10:00 - 19:00',
        weekend: '週日公休'
      },
      social: {
        facebook: 'https://pse.is/82cjls',
        instagram: 'https://www.instagram.com/sosrepair__/'
      }
    },
    seo: {
      title: 'SOS Repair 維修中心 - 專業 Apple 產品維修',
      description: '快速、精準、負責。iPhone、iPad、MacBook 專業維修，免費檢測，誠信開立發票。',
      keywords: ['iPhone維修', 'iPad維修', 'MacBook維修', 'iMac維修', 'Apple維修', '台北維修']
    }
  }
}