import { getLocaleFromUrl, removeLocaleFromUrl, addLocaleToUrl } from '@/lib/i18n'

describe('i18n utilities', () => {
  describe('getLocaleFromUrl', () => {
    it('returns locale from URL path', () => {
      expect(getLocaleFromUrl('/en/about')).toBe('en')
      expect(getLocaleFromUrl('/zh/products')).toBe('zh')
    })

    it('returns default locale for root path', () => {
      expect(getLocaleFromUrl('/')).toBe('en')
      expect(getLocaleFromUrl('/about')).toBe('en')
    })

    it('returns default locale for invalid locale', () => {
      expect(getLocaleFromUrl('/invalid/path')).toBe('en')
    })
  })

  describe('removeLocaleFromUrl', () => {
    it('removes locale from URL path', () => {
      expect(removeLocaleFromUrl('/en/about')).toBe('/about')
      expect(removeLocaleFromUrl('/zh/products')).toBe('/products')
    })

    it('returns original path if no locale present', () => {
      expect(removeLocaleFromUrl('/about')).toBe('/about')
      expect(removeLocaleFromUrl('/')).toBe('/')
    })
  })

  describe('addLocaleToUrl', () => {
    it('adds locale to URL path', () => {
      expect(addLocaleToUrl('/about', 'zh')).toBe('/zh/about')
      expect(addLocaleToUrl('/products', 'zh')).toBe('/zh/products')
    })

    it('returns original path for default locale', () => {
      expect(addLocaleToUrl('/about', 'en')).toBe('/about')
      expect(addLocaleToUrl('/', 'en')).toBe('/')
    })
  })
})