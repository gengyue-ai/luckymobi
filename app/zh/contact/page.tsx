"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { NavLogo, FooterLogo } from "@/components/logo"
import { ArrowLeft, Globe, Sparkles, Phone, Mail, MapPin, Clock, MessageSquare, Building } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const translations = {
  nav: {
    home: "首页",
    about: "关于我们",
    products: "产品与服务",
    news: "新闻中心",
    contact: "联系我们",
  },
  contact: {
    title: "联系我们",
    subtitle: "我们期待与您的合作",
    getInTouch: "联系我们",
    contactInfo: "联系信息",
    sendMessage: "发送消息",
    address: "RM511, 5/F, Ming Sang Industrial Building, 19-21 Hing Yip Street, Kwun Tong, Kowloon, Hong Kong",
    addressChinese: "香港九龍觀塘兴业街19-21号明生工业大厦5字楼511室",
    form: {
      name: "姓名",
      email: "邮箱",
      subject: "主题",
      message: "消息",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "您的邮箱",
      subjectPlaceholder: "消息主题",
      messagePlaceholder: "您的消息...",
      sendButton: "发送消息",
    },
  },
  footer: {
    copyright: "© 2025 Luckymobi Technology Limited. 版权所有。",
    privacy: "隐私政策",
    terms: "使用条款",
    description: "AI驱动创新，连接无限可能。赋能智能生活，构筑数字未来。",
    products: "产品",
    company: "公司",
    aboutUs: "关于我们",
    news: "新闻",
    contact: "联系我们",
  },
}

export default function ChineseContactPage() {
  const t = translations

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLogo />

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/zh" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.home}
              </Link>
              <Link href="/zh/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.about}
              </Link>
              <Link href="/zh/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.products}
              </Link>
              <Link href="/zh/news" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.news}
              </Link>
              <Link href="/zh/contact" className="text-blue-600 font-medium">
                {t.nav.contact}
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/en/contact">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex items-center space-x-1 bg-transparent"
                >
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t.contact.title}</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.contact.getInTouch}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  我们很乐意听取您的意见和建议。无论您是对我们的AI产品有疑问，还是希望探讨合作机会，请随时与我们联系。
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Address */}
                <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">公司地址</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {t.contact.addressChinese}
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                          {t.contact.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">电话联系</h3>
                        <p className="text-gray-600">
                          <a href="tel:+85230697790" className="text-blue-600 hover:underline">
                            +852 3069-7790
                          </a>
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          香港办公室
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">邮箱联系</h3>
                        <div className="space-y-1">
                          <p className="text-gray-600">
                            <span className="font-medium">技术支持:</span>{" "}
                            <a href="mailto:tech@luckymobi.org" className="text-blue-600 hover:underline">
                              tech@luckymobi.org
                            </a>
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">商务合作:</span>{" "}
                            <a href="mailto:contact@luckymobi.org" className="text-blue-600 hover:underline">
                              contact@luckymobi.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">快速链接</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="justify-start"
                    onClick={() => window.open("https://sybaupicture.com", "_blank")}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Sybau Picture
                  </Button>
                  <Link href="/zh/about">
                    <Button variant="outline" className="justify-start w-full">
                      <Building className="w-4 h-4 mr-2" />
                      关于我们
                    </Button>
                  </Link>
                  <Link href="/zh/news">
                    <Button variant="outline" className="justify-start w-full">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      新闻中心
                    </Button>
                  </Link>
                  <Link href="/zh/privacy">
                    <Button variant="outline" className="justify-start w-full">
                      <Globe className="w-4 h-4 mr-2" />
                      隐私政策
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.contact.sendMessage}</h2>
                <p className="text-gray-600">
                  填写下方表单，我们会尽快回复您的消息。
                </p>
              </div>
              
              <ContactForm translations={translations} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <FooterLogo />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">{t.footer.description}</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Mail className="w-5 h-5" />
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
              <h4 className="font-semibold mb-4">{t.footer.products}</h4>
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
                  <Link href="/zh/solutions/games" className="hover:text-white transition-colors">
                    AI互动游戏
                  </Link>
                </li>
                <li>
                  <Link href="/zh/solutions/ecommerce" className="hover:text-white transition-colors">
                    AI电商解决方案
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/zh/about" className="hover:text-white transition-colors">
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href="/zh/news" className="hover:text-white transition-colors">
                    {t.footer.news}
                  </Link>
                </li>
                <li>
                  <Link href="/zh/contact" className="hover:text-white transition-colors">
                    {t.footer.contact}
                  </Link>
                </li>
                <li>
                  <Link href="/zh/privacy" className="hover:text-white transition-colors">
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/zh/terms" className="hover:text-white transition-colors">
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
            <Link href="/en/contact">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white mt-4 md:mt-0"
              >
                <Globe className="w-4 h-4 mr-2" />
                English
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}