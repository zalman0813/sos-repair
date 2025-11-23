export { zhTW } from './translations/zh-TW'
export { en } from './translations/en'
export type { Translation } from './translations/zh-TW'

export type Language = 'zh-TW' | 'en'

export const languages: Record<Language, string> = {
  'zh-TW': '中文',
  'en': 'English',
}
