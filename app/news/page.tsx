"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Calendar, User, Eye, Sparkles, Users, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const newsArticles = [
  {
    slug: "ai-creative-suite-2-0",
    image: "/images/ai-creative-child.png",
    en: {
      title: "LuckyMobi Launches Advanced AI Creative Suite 2.0",
      excerpt: "Revolutionary update introduces multi-modal AI capabilities, real-time collaboration features, and enhanced image generation algorithms.",
      category: "AI Innovation",
      date: "January 15, 2025",
      readTime: "5 min read"
    },
    zh: {
      title: "LuckyMobi 发布先进AI创意套件 2.0",
      excerpt: "革命性更新引入多模态AI能力、实时协作功能和增强的图像生成算法。",
      category: "AI创新",
      date: "2025年1月15日",
      readTime: "5分钟阅读"
    }
  },
  {
    slug: "sybau-125k-milestone",
    image: "/images/ai-portrait-young.png",
    en: {
      title: "Sybau Picture Reaches 125,000+ Active Creators",
      excerpt: "Our flagship AI creative tool has achieved significant growth with 125,000+ active creators generating over 2.5 million AI-powered artworks.",
      category: "Milestone",
      date: "January 10, 2025",
      readTime: "4 min read"
    },
    zh: {
      title: "Sybau Picture 突破125,000+活跃创作者",
      excerpt: "我们的旗舰AI创意工具取得显著增长，125,000+活跃创作者生成超过250万AI艺术作品。",
      category: "里程碑",
      date: "2025年1月10日",
      readTime: "4分钟阅读"
    }
  },
  {
    slug: "manufacturing-partnership",
    image: "/images/factory.jpg",
    en: {
      title: "Strategic Partnership with 50+ Manufacturing Companies",
      excerpt: "LuckyMobi forms strategic alliances with leading manufacturers across Asia-Pacific to accelerate AI-driven digital transformation.",
      category: "Partnership",
      date: "January 5, 2025",
      readTime: "6 min read"
    },
    zh: {
      title: "与50+制造企业建立战略合作伙伴关系",
      excerpt: "LuckyMobi与亚太地区领先制造商建立战略联盟，加速电商和供应链管理的AI驱动数字化转型。",
      category: "合作伙伴",
      date: "2025年1月5日",
      readTime: "6分钟阅读"
    }
  }
]

export default function NewsCenter() {
  const [language, setLanguage] = useState<"en" | "zh">("en")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

  const t = {
    en: {
      title: "News Center",
      subtitle: "Latest updates and insights from LuckyMobi",
      backHome: "Back to Home",
      readMore: "Read More",
      allNews: "All News"
    },
    zh: {
      title: "新闻中心",
      subtitle: "来自LuckyMobi的最新动态和行业洞察",
      backHome: "返回首页",
      readMore: "阅读更多",
      allNews: "全部新闻"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LuckyMobi</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href={language === "en" ? "/en" : "/zh"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === "en" ? "Home" : "首页"}
              </Link>
              <Link href={language === "en" ? "/en/about" : "/zh/about"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === "en" ? "About Us" : "关于我们"}
              </Link>
              <Link href={language === "en" ? "/en/products" : "/zh/products"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === "en" ? "Products & Services" : "产品与服务"}
              </Link>
              <Link href={language === "en" ? "/en/news" : "/zh/news"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === "en" ? "News Center" : "新闻中心"}
              </Link>
              <Link href={language === "en" ? "/en/contact" : "/zh/contact"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === "en" ? "Contact Us" : "联系我们"}
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="hidden md:flex items-center space-x-1 bg-transparent"
              >
                <Globe className="w-4 h-4" />
                <span>{language === "en" ? "中文" : "English"}</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t[language].title}</h1>
            </div>
            <p className="text-xl text-gray-600">{t[language].subtitle}</p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Badge variant="secondary" className="text-sm">
            {t[language].allNews}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => {
            const content = article[language]
            return (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 h-full group">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Article Image */}
                    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={content.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error('Image failed to load:', article.image);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-white text-xs font-medium">{content.category}</span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="flex flex-col flex-grow">
                      <Badge variant="secondary" className="mb-3 w-fit">
                        {content.category}
                      </Badge>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {content.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                        {content.excerpt}
                      </p>
                      
                      {/* Article Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {content.date}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {content.readTime}
                          </div>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Link href={`/news/${article.slug}`} className="mt-auto">
                        <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors">
                          {t[language].readMore}
                          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">LuckyMobi</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                {language === "en" 
                  ? "AI-driven innovation connecting infinite possibilities. Empowering smart living and building digital future."
                  : "AI驱动创新，连接无限可能。赋能智能生活，构筑数字未来。"}
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <span className="text-lg">✉️</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Twitter
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{language === "en" ? "Products" : "产品"}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => window.open("https://sybaupicture.com", "_blank")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Sybau Picture
                  </button>
                </li>
                <li>
                  <Link href="/solutions/games" className="hover:text-white transition-colors">
                    AI Games
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/ecommerce" className="hover:text-white transition-colors">
                    E-commerce Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{language === "en" ? "Company" : "公司"}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href={language === "en" ? "/en/about" : "/zh/about"} className="hover:text-white transition-colors">
                    {language === "en" ? "About Us" : "关于我们"}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/news" : "/zh/news"} className="hover:text-white transition-colors">
                    {language === "en" ? "News" : "新闻"}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/contact" : "/zh/contact"} className="hover:text-white transition-colors">
                    {language === "en" ? "Contact" : "联系我们"}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/privacy" : "/zh/privacy"} className="hover:text-white transition-colors">
                    {language === "en" ? "Privacy Policy" : "隐私政策"}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/terms" : "/zh/terms"} className="hover:text-white transition-colors">
                    {language === "en" ? "Terms of Service" : "使用条款"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {language === "en" 
                ? "© 2025 Luckymobi Technology Limited. All Rights Reserved."
                : "© 2025 Luckymobi Technology Limited. 版权所有。"}
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Link href="/en">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="mr-2 text-lg">🌐</span>
                  English
                </Button>
              </Link>
              <Link href="/zh">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="mr-2 text-lg">🌐</span>
                  中文
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}