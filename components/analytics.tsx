'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

interface AnalyticsProps {
  gaId?: string
}

export function Analytics({ gaId }: AnalyticsProps) {
  useEffect(() => {
    // Track Web Vitals - temporarily disabled
    // if (typeof window !== 'undefined') {
    //   import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
    //     onCLS(sendToAnalytics)
    //     onFID(sendToAnalytics)
    //     onFCP(sendToAnalytics)
    //     onLCP(sendToAnalytics)
    //     onTTFB(sendToAnalytics)
    //   })
    // }
  }, [])

  const sendToAnalytics = (metric: any) => {
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      })
    }
    
    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', metric)
    }
  }

  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Custom event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'User Interaction',
      ...parameters,
    })
  }
}

// Page view tracking
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_title: title,
      page_location: url,
    })
  }
}