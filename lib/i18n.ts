export const defaultLocale = 'en'
export const locales = ['en', 'zh'] as const
export type Locale = typeof locales[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
}

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  zh: '中',
}

export function getLocaleFromUrl(pathname: string): Locale {
  const segments = pathname.split('/')
  const locale = segments[1] as Locale
  return locales.includes(locale) ? locale : defaultLocale
}

export function removeLocaleFromUrl(pathname: string): string {
  const segments = pathname.split('/')
  if (locales.includes(segments[1] as Locale)) {
    return '/' + segments.slice(2).join('/')
  }
  return pathname
}

export function addLocaleToUrl(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return pathname
  }
  return `/${locale}${pathname}`
}