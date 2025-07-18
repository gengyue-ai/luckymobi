'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, Globe, Sparkles } from 'lucide-react'
import Link from 'next/link'

interface MobileNavProps {
  translations: any
  language: 'en' | 'zh'
  toggleLanguage: () => void
}

export function MobileNav({ translations, language, toggleLanguage }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = translations

  const getNavItems = () => {
    const prefix = language === 'en' ? '/en' : '/zh'
    return [
      { href: `${prefix}#home`, label: t.nav.home, isAnchor: true },
      { href: `${prefix}/about`, label: t.nav.about, isAnchor: false },
      { href: `${prefix}#products`, label: t.nav.products, isAnchor: true },
      { href: `${prefix}/news`, label: t.nav.news, isAnchor: false },
      { href: `${prefix}/contact`, label: t.nav.contact, isAnchor: false },
    ]
  }

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsOpen(false)
    if (isAnchor) {
      // Smooth scroll to section on same page
      const element = document.querySelector(href.split('#')[1] ? `#${href.split('#')[1]}` : href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to different page
      window.location.href = href
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LuckyMobi</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-6">
            <ul className="space-y-4">
              {getNavItems().map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href, item.isAnchor)}
                    className="w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Toggle */}
          <div className="pt-4 border-t">
            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? '中文' : 'English'}</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}