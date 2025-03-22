export const i18n = {
  defaultLocale: 'zh',
  locales: ['zh', 'en'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const translations = {
  zh: {
    title: '给 Kimmy 捐赠',
    description: '支持 Kimmy 的捐赠页面',
  },
  en: {
    title: 'Donate to Kimmy',
    description: 'Support Kimmy\'s donation page',
  },
} as const 