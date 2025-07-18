import Script from 'next/script'

interface OrganizationSchemaProps {
  language?: 'en' | 'zh'
}

export function OrganizationSchema({ language = 'en' }: OrganizationSchemaProps) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Luckymobi Technology Limited",
    "alternateName": language === 'zh' ? "幸运移动科技有限公司" : "Luckymobi Technology Limited",
    "url": "https://luckymobi.org",
    "logo": "https://luckymobi.org/placeholder-logo.png",
    "description": language === 'zh' 
      ? "由深耕移动互联网行业多年的第一代移动互联网产品经理发起创办，致力于将人工智能（AI）的无限潜力融入到日常应用中。"
      : "Founded by first-generation mobile internet product managers, we integrate AI's limitless potential into everyday applications.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RM511, 5/F, Ming Sang Industrial Building, 19-21 Hing Yip Street",
      "addressLocality": "Kwun Tong, Kowloon",
      "addressCountry": "Hong Kong"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@luckymobi.org"
    },
    "sameAs": [
      "https://twitter.com/luckymobi",
      "https://linkedin.com/company/luckymobi"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Sybau Picture",
            "description": language === 'zh' 
              ? "AI图片创意工具，为年轻创作者和社交媒体爱好者释放无限想象力"
              : "AI image creative tool unleashing infinite imagination for young creators and social media enthusiasts",
            "url": "https://sybaupicture.com",
            "applicationCategory": "CreativeWork"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'zh' ? "AI电商解决方案" : "AI E-commerce Solutions",
            "description": language === 'zh'
              ? "全面的解决方案，帮助制造企业通过AI驱动的平台实现智能化全球扩张"
              : "Comprehensive solutions helping manufacturing companies achieve intelligent global expansion through AI-powered platforms"
          }
        }
      ]
    }
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  )
}

export function WebsiteSchema({ language = 'en' }: { language?: 'en' | 'zh' }) {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Luckymobi Technology Limited",
    "url": "https://luckymobi.org",
    "description": language === 'zh'
      ? "AI驱动创新，连接无限可能。赋能智能生活，构筑数字未来。"
      : "AI-driven innovation connecting infinite possibilities. Empowering smart living and building digital future.",
    "inLanguage": language === 'zh' ? "zh-CN" : "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://luckymobi.org/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData),
      }}
    />
  )
}