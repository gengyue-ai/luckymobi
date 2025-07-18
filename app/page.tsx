"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Toaster } from "@/components/ui/toaster"
import { ContactForm } from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"
import { NavLogo, FooterLogo } from "@/components/logo"
import { ArrowRight, Globe, Sparkles, Zap, Users, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products & Services",
      news: "News Center",
      contact: "Contact Us",
    },
    hero: {
      title: "LuckyMobi: AI-Driven Innovation, Connecting Infinite Possibilities",
      subtitle: "Empowering Smart Living, Building Digital Future",
      description:
        "Founded by first-generation mobile internet product managers, we integrate AI's limitless potential into everyday applications - from creative tools and immersive games to e-commerce solutions for global expansion.",
      cta: "Explore Our AI Power",
      learnMore: "Learn More",
    },
    products: {
      title: "Our AI-Powered Solutions",
      subtitle: "Three core areas driving innovation",
      aiTools: {
        title: "AI Creative Tools",
        description:
          "Sybau Picture - AI image creative tool unleashing infinite imagination for young creators and social media enthusiasts.",
        features: {
          feature1: "AI Style Transfer & Enhancement",
          feature2: "Smart Background Replacement",
          feature3: "Text-to-Image Generation",
        },
        button: "Visit sybaupicture.com",
      },
      aiGames: {
        title: "AI Interactive Games",
        description:
          "Revolutionary gaming experiences with AI-powered NPCs, dynamic storylines, and adaptive gameplay that responds to your choices in real-time.",
        features: {
          feature1: "AI-Powered NPCs & Characters",
          feature2: "Dynamic Storyline Generation",
          feature3: "Adaptive Gameplay Systems",
        },
        button: "Explore Games",
      },
      aiEcommerce: {
        title: "AI E-commerce Solutions",
        description:
          "End-to-end e-commerce services for manufacturing companies: Independent website development, Amazon optimization, Alibaba International, and AliExpress operations.",
        features: {
          feature1: "Independent Website Development",
          feature2: "Amazon & Global Marketplace Setup",
          feature3: "Alibaba & AliExpress Operations",
        },
        button: "Learn More",
      },
    },
    about: {
      title: "About LuckyMobi",
      description:
        "Luckymobi Technology Limited was founded by a team of first-generation mobile internet product managers with years of profound experience in the industry. Leveraging our keen insights into user needs and deep understanding of cutting-edge technologies, we are dedicated to integrating the limitless potential of Artificial Intelligence (AI) into everyday applications.",
      vision: "Our Vision",
      visionText:
        "To deliver smarter, more efficient, and more enjoyable digital experiences for users and businesses worldwide through AI innovation.",
      stats: {
        experience: "Years Experience",
        solutions: "Core AI Solutions",
        reach: "Market Reach",
        innovation: "Powered Innovation",
      },
    },
    news: {
      title: "News Center",
      subtitle: "Latest updates and insights from LuckyMobi",
      badge: "Company News",
      sampleTitle: "LuckyMobi Launches New AI Innovation Initiative",
      sampleContent: "Expanding our AI capabilities to serve more industries and users worldwide...",
      readMore: "Read More",
    },
    contact: {
      title: "Contact Us",
      address: "RM511, 5/F, Ming Sang Industrial Building, 19-21 Hing Yip Street, Kwun Tong, Kowloon, Hong Kong",
      getInTouch: "Get in Touch",
      contactInfo: "Contact Information",
      sendMessage: "Send us a Message",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Message subject",
        messagePlaceholder: "Your message...",
        sendButton: "Send Message",
      },
    },
    footer: {
      copyright: "© 2025 Luckymobi Technology Limited. All Rights Reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      description:
        "AI-driven innovation connecting infinite possibilities. Empowering smart living and building digital future.",
      products: "Products",
      company: "Company",
      aboutUs: "About Us",
      news: "News",
      contact: "Contact",
    },
  },
  zh: {
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
        description: "为制造企业提供端到端电商服务：独立站建设、亚马逊优化、阿里国际站和速卖通运营。",
        features: {
          feature1: "独立站建设与运营",
          feature2: "亚马逊及全球电商平台",
          feature3: "阿里国际站与速卖通运营",
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
  },
}

export default function LuckyMobiWebsite() {
  const [language, setLanguage] = useState<"en" | "zh">("en")
  const t = translations[language]

  const toggleLanguage = () => {
    if (language === "en") {
      window.location.href = "/zh"
    } else {
      window.location.href = "/en"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLogo />

            <div className="hidden md:flex items-center space-x-8">
              <Link href={language === "en" ? "/en" : "/zh"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.home}
              </Link>
              <Link href={language === "en" ? "/en/about" : "/zh/about"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.about}
              </Link>
              <Link href={language === "en" ? "/en/products" : "/zh/products"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.products}
              </Link>
              <Link href={language === "en" ? "/en/news" : "/zh/news"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.news}
              </Link>
              <Link href={language === "en" ? "/en/contact" : "/zh/contact"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.contact}
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="hidden md:flex items-center space-x-1 bg-transparent"
              >
                <span className="text-lg">🌐</span>
                <span>{language === "en" ? "中文" : "English"}</span>
              </Button>
              
              <MobileNav 
                translations={translations[language]} 
                language={language} 
                toggleLanguage={toggleLanguage} 
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <span className="mr-2 text-lg">⚡</span>
                {language === "en" ? "AI-Powered Innovation" : "AI驱动创新"}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">{t.hero.title}</h1>
              <p className="text-xl text-gray-600 mb-4 font-medium">{t.hero.subtitle}</p>
              <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">{t.hero.description}</p>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🌐</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.products.aiEcommerce.title}</h3>
                    <p className="text-sm text-gray-600">Global Solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">✨</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.products.aiTools.title}</h3>
                    <p className="text-sm text-gray-600">Sybau Picture</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🎮</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t.products.aiGames.title}</h3>
                    <p className="text-sm text-gray-600">{language === "en" ? "AI Gaming Platform" : "AI游戏平台"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                      alt="AI E-commerce Solutions"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-2xl">🌐</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.products.aiEcommerce.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t.products.aiEcommerce.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-4 h-4 mr-2 text-green-500">▶</span>
                      {t.products.aiEcommerce.features.feature1}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-4 h-4 mr-2 text-green-500">▶</span>
                      {t.products.aiEcommerce.features.feature2}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-4 h-4 mr-2 text-green-500">▶</span>
                      {t.products.aiEcommerce.features.feature3}
                    </div>
                  </div>
                  <Link href="/solutions/ecommerce">
                    <Button className="w-full bg-transparent" variant="outline">
                      {t.products.aiEcommerce.button}
                      <span className="ml-2 w-4 h-4">→</span>
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
                      alt="AI Creative Tools - Sybau Picture"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-2xl">✨</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.products.aiTools.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t.products.aiTools.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-4 h-4 mr-2 text-blue-500">▶</span>
                      {t.products.aiTools.features.feature1}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-4 h-4 mr-2 text-blue-500">▶</span>
                      {t.products.aiTools.features.feature2}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-4 h-4 mr-2 text-blue-500">▶</span>
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
                      alt="AI Interactive Games"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-2xl">🎮</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.products.aiGames.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t.products.aiGames.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-4 h-4 mr-2 text-purple-500">▶</span>
                      {t.products.aiGames.features.feature1}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-4 h-4 mr-2 text-purple-500">▶</span>
                      {t.products.aiGames.features.feature2}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="w-4 h-4 mr-2 text-purple-500">▶</span>
                      {t.products.aiGames.features.feature3}
                    </div>
                  </div>
                  <Link href="/solutions/games">
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

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
                          >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t.about.description}</p>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.about.vision}</h3>
                <p className="text-gray-600 leading-relaxed">{t.about.visionText}</p>
              </div>
            </div>

            <div
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
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {language === "en" ? "Global" : "全球"}
                    </div>
                    <div className="text-sm text-gray-600">{t.about.stats.reach}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">AI</div>
                    <div className="text-sm text-gray-600">{t.about.stats.innovation}</div>
                  </div>
                </div>
              </div>
            </div>
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
            <div
                          >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src="/images/ai-creative-child.png"
                      alt="AI Creative Suite 2.0"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">✨</span>
                      </div>
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">🚀</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3 w-fit">
                    {language === "en" ? "AI Innovation" : "AI创新"}
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-grow">
                    {language === "en"
                      ? "LuckyMobi Launches Advanced AI Creative Suite 2.0"
                      : "LuckyMobi 发布先进AI创意套件 2.0"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "Revolutionary update introduces multi-modal AI capabilities, real-time collaboration features, and enhanced image generation algorithms. The new suite empowers creators with unprecedented creative freedom."
                      : "革命性更新引入多模态AI能力、实时协作功能和增强的图像生成算法。全新套件为创作者提供前所未有的创作自由。"}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500">Jan 15, 2025</span>
                    <Link href={`/news/ai-creative-suite-2-0?lang=${language}`}>
                      <Button variant="ghost" size="sm">
                        {language === "en" ? "Read More" : "阅读更多"}
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* News Item 2 - Sybau Picture Success */}
            <div
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
                        <span className="text-white text-lg">👥</span>
                      </div>
                      <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">📊</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3 w-fit">
                    {language === "en" ? "Milestone" : "里程碑"}
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-grow">
                    {language === "en"
                      ? "Sybau Picture Reaches 125,000+ Active Creators"
                      : "Sybau Picture 突破125,000+活跃创作者"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "Our flagship AI creative tool has achieved significant growth with 125,000+ active creators generating over 2.5 million AI-powered artworks. The platform continues to lead in user engagement and creative innovation."
                      : "我们的旗舰AI创意工具取得显著增长，125,000+活跃创作者生成超过250万AI艺术作品。平台在用户参与度和创意创新方面持续领先。"}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500">Jan 10, 2025</span>
                    <Link href={`/news/sybau-125k-milestone?lang=${language}`}>
                      <Button variant="ghost" size="sm">
                        {language === "en" ? "Read More" : "阅读更多"}
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* News Item 3 - Global Expansion */}
            <div
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
                        <span className="text-white text-lg">🌐</span>
                      </div>
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">🤝</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-3 w-fit">
                    {language === "en" ? "Expansion" : "扩张"}
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-grow">
                    {language === "en"
                      ? "Strategic Partnership with 50+ Manufacturing Companies"
                      : "与50+制造企业建立战略合作伙伴关系"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {language === "en"
                      ? "LuckyMobi forms strategic alliances with leading manufacturers across Asia-Pacific to accelerate AI-driven digital transformation in e-commerce and supply chain management."
                      : "LuckyMobi与亚太地区领先制造商建立战略联盟，加速电商和供应链管理的AI驱动数字化转型。"}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500">Jan 5, 2025</span>
                    <Link href="/news/manufacturing-partnership">
                      <Button variant="ghost" size="sm">
                        {language === "en" ? "Read More" : "阅读更多"}
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* View All News Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg"
            >
              {language === "en" ? "View All News" : "查看全部新闻"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600">{t.contact.getInTouch}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
                          >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.contact.contactInfo}</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <span className="text-blue-600 text-2xl mt-1">📍</span>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{language === "en" ? "Address" : "地址"}</h4>
                        <p className="text-gray-600 leading-relaxed">{t.contact.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-blue-600 text-2xl mt-1">✉️</span>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{language === "en" ? "Email" : "邮箱"}</h4>
                        <p className="text-gray-600">contact@luckymobi.org</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-blue-600 text-2xl mt-1">📞</span>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{language === "en" ? "Phone" : "电话"}</h4>
                        <p className="text-gray-600">+852 30697790</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
                          >
              <div className="h-full">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t.contact.sendMessage}</h3>
                <ContactForm translations={translations[language]} />
              </div>
            </div>
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
              <h4 className="font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href={language === "en" ? "/en/about" : "/zh/about"} className="hover:text-white transition-colors">
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/news" : "/zh/news"} className="hover:text-white transition-colors">
                    {t.footer.news}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/contact" : "/zh/contact"} className="hover:text-white transition-colors">
                    {t.footer.contact}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/privacy" : "/zh/privacy"} className="hover:text-white transition-colors">
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/terms" : "/zh/terms"} className="hover:text-white transition-colors">
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
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
      <Toaster />
    </div>
  )
}