import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ErrorBoundary } from '@/components/error-boundary'
import { OrganizationSchema, WebsiteSchema } from '@/components/structured-data'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Luckymobi Technology Limited - AI-Driven Innovation',
  description: 'Founded by first-generation mobile internet product managers, Luckymobi integrates AI into creative tools, games, and e-commerce solutions for global expansion.',
  keywords: 'AI technology, mobile internet, creative tools, Sybau Picture, e-commerce solutions, global expansion, artificial intelligence',
  authors: [{ name: 'Luckymobi Technology Limited' }],
  creator: 'Luckymobi Technology Limited',
  publisher: 'Luckymobi Technology Limited',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luckymobi.org',
    title: 'Luckymobi Technology Limited - AI-Driven Innovation',
    description: 'AI-powered solutions for creative tools, games, and global e-commerce expansion.',
    siteName: 'Luckymobi Technology Limited',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luckymobi Technology Limited - AI-Driven Innovation',
    description: 'AI-powered solutions for creative tools, games, and global e-commerce expansion.',
  },
  alternates: {
    canonical: 'https://luckymobi.org',
    languages: {
      'en-US': 'https://luckymobi.org/en',
      'zh-CN': 'https://luckymobi.org/zh',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
