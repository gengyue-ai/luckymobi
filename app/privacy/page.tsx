"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Shield, Eye, Database, Users, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const translations = {
  en: {
    title: "Privacy Policy",
    subtitle: "Your privacy is important to us",
    lastUpdated: "Last updated: January 15, 2025",
    backHome: "Back to Home",
    sections: {
      overview: {
        title: "Overview",
        content: "Luckymobi Technology Limited is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered services."
      },
      infoCollected: {
        title: "Information We Collect",
        personalInfo: {
          title: "Personal Information",
          content: "We may collect personal information such as your name, email address, phone number, and other contact details when you register for our services."
        },
        usageData: {
          title: "Usage Data", 
          content: "We automatically collect information about how you use our services, including your interactions with our AI tools."
        },
        deviceInfo: {
          title: "Device Information",
          content: "We may collect information about your device, including IP address, browser type, operating system, and device identifiers."
        }
      },
      howWeUse: {
        title: "How We Use Your Information",
        content: [
          "To provide, maintain, and improve our AI-powered services",
          "To personalize your experience and content recommendations", 
          "To communicate with you about our services and updates",
          "To analyze usage patterns and optimize our algorithms",
          "To ensure security and prevent fraud",
          "To comply with legal obligations"
        ]
      },
      contact: {
        title: "Contact Us",
        content: "If you have any questions about this Privacy Policy, please contact us:",
        email: "privacy@luckymobi.org",
        address: "RM511, 5/F, Ming Sang Industrial Building, 19-21 Hing Yip Street, Kwun Tong, Kowloon, Hong Kong"
      }
    }
  },
  zh: {
    title: "隐私政策",
    subtitle: "您的隐私对我们很重要",
    lastUpdated: "最后更新：2025年1月15日",
    backHome: "返回首页",
    sections: {
      overview: {
        title: "概述",
        content: "Luckymobi Technology Limited 致力于保护您的隐私。本隐私政策说明了当您使用我们的AI驱动服务时，我们如何收集、使用、披露和保护您的信息。"
      },
      infoCollected: {
        title: "我们收集的信息",
        personalInfo: {
          title: "个人信息",
          content: "当您注册我们的服务时，我们可能会收集个人信息，如您的姓名、电子邮件地址、电话号码和其他联系方式。"
        },
        usageData: {
          title: "使用数据",
          content: "我们自动收集有关您如何使用我们服务的信息，包括您与我们AI工具的交互。"
        },
        deviceInfo: {
          title: "设备信息",
          content: "我们可能收集有关您设备的信息，包括IP地址、浏览器类型、操作系统和设备标识符。"
        }
      },
      howWeUse: {
        title: "我们如何使用您的信息",
        content: [
          "提供、维护和改进我们的AI驱动服务",
          "个性化您的体验和内容推荐",
          "就我们的服务和更新与您沟通",
          "分析使用模式并优化我们的算法",
          "确保安全并防止欺诈",
          "遵守法律义务"
        ]
      },
      contact: {
        title: "联系我们",
        content: "如果您对本隐私政策有任何疑问，请联系我们：",
        email: "privacy@luckymobi.org",
        address: "香港九龍觀塘兴业街19-21号明生工业大厦5字楼511室"
      }
    }
  }
}

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState<"en" | "zh">("en")
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t.title}</h1>
            </div>
            <p className="text-xl text-gray-600 mb-2">{t.subtitle}</p>
            <Badge variant="secondary" className="text-sm">
              {t.lastUpdated}
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.overview.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{t.sections.overview.content}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.infoCollected.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t.sections.infoCollected.personalInfo.title}</h3>
                  <p className="text-gray-700">{t.sections.infoCollected.personalInfo.content}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t.sections.infoCollected.usageData.title}</h3>
                  <p className="text-gray-700">{t.sections.infoCollected.usageData.content}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t.sections.infoCollected.deviceInfo.title}</h3>
                  <p className="text-gray-700">{t.sections.infoCollected.deviceInfo.content}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* How We Use Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.howWeUse.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {t.sections.howWeUse.content.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{t.sections.contact.content}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-700">{t.sections.contact.email}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 mr-2 mt-0.5 text-gray-500">📍</div>
                    <span className="text-gray-700">{t.sections.contact.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
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