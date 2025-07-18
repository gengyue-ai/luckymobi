"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Toaster } from "@/components/ui/toaster"
import { ContactForm } from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"
import { NavLogo, FooterLogo } from "@/components/logo"
import { ArrowRight, Globe, Sparkles, Zap, Users, ChevronRight, Mail, Phone, MapPin, Factory, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const translations = {
  nav: {
    home: "首页",
    about: "关于我们",
    products: "产品与服务",
    news: "新闻中心",
    contact: "联系我们",
  },
  hero: {
    title: "LuckyMobi: AI驱动创新，连接无限可能",
    subtitle: "赋能智能生活，构筑数字未来",
    description:
      "由深耕移动互联网行业多年的第一代移动互联网产品经理发起创办，致力于将人工智能（AI）的无限潜力融入到日常应用中——从赋能创意的工具软件、沉浸式的互动游戏，到助力企业全球化布局的电商解决方案。",
    cta: "探索我们的AI力量",
    learnMore: "了解更多",
  },
  products: {
    title: "我们的AI驱动解决方案",
    subtitle: "三大核心领域推动创新",
    aiTools: {
      title: "AI创意工具",
      description: "Sybau Picture - AI图片创意工具，为年轻创作者和社交媒体爱好者释放无限想象力。",
      features: {
        feature1: "AI风格转换与增强",
        feature2: "智能背景替换",
        feature3: "文本生成图像",
      },
      button: "访问 sybaupicture.com",
    },
    aiGames: {
      title: "AI互动游戏",
      description: "革命性游戏体验，AI驱动的NPC角色、动态剧情生成、自适应游戏玩法，实时响应您的每个选择。",
      features: {
        feature1: "AI智能NPC与角色",
        feature2: "动态剧情生成系统",
        feature3: "自适应游戏玩法",
      },
      button: "探索游戏",
    },
    aiEcommerce: {
      title: "AI电商解决方案",
      description: "全面的解决方案，帮助制造企业通过AI驱动的平台实现智能化全球扩张。",
      features: {
        feature1: "多平台店铺搭建",
        feature2: "AI驱动营销",
        feature3: "全球扩张支持",
      },
      button: "了解更多",
    },
  },
  about: {
    title: "关于LuckyMobi",
    description:
      "Luckymobi Technology Limited 由深耕移动互联网行业多年的第一代移动互联网产品经理团队倾力创办。我们凭借对用户需求的敏锐洞察和对前沿技术的深刻理解，致力于将人工智能（AI）的无限潜力融入到日常应用中。",
    vision: "我们的愿景",
    visionText: "通过AI创新为全球用户和企业带来更智能、更高效、更愉悦的数字体验。",
    stats: {
      experience: "年经验",
      solutions: "核心AI解决方案",
      reach: "市场覆盖",
      innovation: "AI驱动创新",
    },
  },
  news: {
    title: "新闻中心",
    subtitle: "来自LuckyMobi的最新动态和行业洞察",
    badge: "公司新闻",
    sampleTitle: "LuckyMobi启动全新AI创新计划",
    sampleContent: "扩展我们的AI能力，为全球更多行业和用户提供服务...",
    readMore: "阅读更多",
  },
  contact: {
    title: "联系我们",
    address: "香港九龍觀塘兴业街19-21号明生工业大厦5字楼511室",
    getInTouch: "联系我们",
    contactInfo: "联系信息",
    sendMessage: "发送消息",
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

export default function ChineseHomePage() {
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
              <Link href="/zh/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.contact}
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/en">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex items-center space-x-1 bg-transparent"
                >
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                </Button>
              </Link>
              
              <MobileNav 
                translations={translations} 
                language="zh" 
                toggleLanguage={() => window.location.href = "/en"} 
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                AI驱动创新
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">{t.hero.title}</h1>
              <p className="text-xl text-gray-600 mb-4 font-medium">{t.hero.subtitle}</p>
              <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">{t.hero.description}</p>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.products.aiEcommerce.title}</h3>
                    <p className="text-sm text-gray-600">全球解决方案</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.products.aiTools.title}</h3>
                    <p className="text-sm text-gray-600">Sybau Picture</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.products.aiGames.title}</h3>
                    <p className="text-sm text-gray-600">AI游戏平台</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
            <p className="text-xl text-gray-600">{t.products.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI E-commerce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-green-200">
                <CardContent className="p-8">
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/business-professional.png"
                      alt="AI电商解决方案"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.products.aiEcommerce.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t.products.aiEcommerce.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                      {t.products.aiEcommerce.features.feature1}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                      {t.products.aiEcommerce.features.feature2}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                      {t.products.aiEcommerce.features.feature3}
                    </div>
                  </div>
                  <Link href="/zh/solutions/ecommerce">
                    <Button className="w-full bg-transparent" variant="outline">
                      {t.products.aiEcommerce.button}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
                <CardContent className="p-8">
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/ai-portrait-female.png"
                      alt="AI创意工具 - Sybau Picture"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.products.aiTools.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t.products.aiTools.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      {t.products.aiTools.features.feature1}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      {t.products.aiTools.features.feature2}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      {t.products.aiTools.features.feature3}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-transparent"
                    variant="outline"
                    onClick={() => window.open("https://sybaupicture.com", "_blank")}
                  >
                    {t.products.aiTools.button}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Games */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-200">
                <CardContent className="p-8">
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/gaming-character.png"
                      alt="AI互动游戏"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.products.aiGames.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t.products.aiGames.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-500" />
                      {t.products.aiGames.features.feature1}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-500" />
                      {t.products.aiGames.features.feature2}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-500" />
                      {t.products.aiGames.features.feature3}
                    </div>
                  </div>
                  <Link href="/zh/solutions/games">
                    <Button className="w-full bg-transparent" variant="outline">
                      {t.products.aiGames.button}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.news.title}</h2>
            <p className="text-xl text-gray-600">{t.news.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 - Latest AI Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="/images/fangzhi.png"
                      alt="纺织制造商成功案例"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <Factory className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3 w-fit">
                    制造业成功案例
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-grow">
                    纺织制造商借助LuckyMobi AI全球销售增长85%
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    泰国纺织企业金线工业公司利用我们的AI电商平台实现国际化扩张，8个月内全球销售增长85%，成功进军12个新市场。
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500">2025年1月20日</span>
                    <Link href="/news/textile-automation-success?lang=zh">
                      <Button variant="ghost" size="sm">
                        阅读更多
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* News Item 2 - Sybau Picture Success */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="/images/ai-portrait-young.png"
                      alt="Sybau Picture User Growth"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                        <Badge className="w-5 h-5 text-white bg-transparent border-0 p-0">📊</Badge>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3 w-fit">
                    里程碑
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-grow">
                    Sybau Picture 突破125,000+活跃创作者
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    我们的旗舰AI创意工具取得显著增长，125,000+活跃创作者生成超过250万AI艺术作品。平台在用户参与度和创意创新方面持续领先。
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500">2025年1月10日</span>
                    <Link href="/news/sybau-125k-milestone?lang=zh">
                      <Button variant="ghost" size="sm">
                        阅读更多
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* News Item 3 - Global Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="/images/factory.jpg"
                      alt="Strategic Partnership Expansion"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <Badge className="w-5 h-5 text-white bg-transparent border-0 p-0">🤝</Badge>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3 w-fit">
                    合作伙伴
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-grow">
                    与50+制造企业建立战略合作伙伴关系
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    LuckyMobi与亚太地区领先制造商建立战略联盟，加速电商和供应链管理的AI驱动数字化转型。
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500">2025年1月5日</span>
                    <Link href="/news/manufacturing-partnership?lang=zh">
                      <Button variant="ghost" size="sm">
                        阅读更多
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* View All News Button */}
          <div className="text-center mt-12">
            <Link href="/zh/news">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg"
              >
                查看全部新闻
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t.about.description}</p>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.about.vision}</h3>
                <p className="text-gray-600 leading-relaxed">{t.about.visionText}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                    <div className="text-sm text-gray-600">{t.about.stats.experience}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                    <div className="text-sm text-gray-600">{t.about.stats.solutions}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">全球</div>
                    <div className="text-sm text-gray-600">{t.about.stats.reach}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">AI</div>
                    <div className="text-sm text-gray-600">{t.about.stats.innovation}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
            <Link href="/en">
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
      <Toaster />
    </div>
  )
}