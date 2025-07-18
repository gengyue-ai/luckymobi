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
        "Comprehensive solutions helping manufacturing companies achieve intelligent global expansion through AI-powered platforms.",
      features: {
        feature1: "Multi-platform Store Setup",
        feature2: "AI-Powered Marketing",
        feature3: "Global Expansion Support",
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
}

export default function EnglishHomePage() {
  const t = translations

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLogo />

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/en#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.home}
              </Link>
              <Link href="/en/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.about}
              </Link>
              <Link href="/en/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.products}
              </Link>
              <Link href="/en/news" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.news}
              </Link>
              <Link href="/en/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.contact}
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/zh">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex items-center space-x-1 bg-transparent"
                >
                  <Globe className="w-4 h-4" />
                  <span>中文</span>
                </Button>
              </Link>
              
              <MobileNav 
                translations={translations} 
                language="en" 
                toggleLanguage={() => window.location.href = "/zh"} 
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
                AI-Powered Innovation
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
                    <p className="text-sm text-gray-600">Global Solutions</p>
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
                    <p className="text-sm text-gray-600">AI Gaming Platform</p>
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
                      alt="AI E-commerce Solutions"
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
                  <Link href="/solutions/ecommerce">
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
                      alt="AI Creative Tools - Sybau Picture"
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
                      alt="AI Interactive Games"
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
                      alt="Textile Manufacturing Success Case"
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
                    Manufacturing Success
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-grow">
                    Textile Manufacturer Boosts Global Sales by 85% with LuckyMobi AI
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Thai textile company Golden Thread Industries achieved remarkable international growth using our AI-powered e-commerce platform, increasing global sales by 85% and entering 12 new markets in just 8 months.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500">January 20, 2025</span>
                    <Link href="/news/textile-automation-success?lang=en">
                      <Button variant="ghost" size="sm">
                        Read More
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
                    Milestone
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-grow">
                    Sybau Picture Reaches 125,000+ Active Creators
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Our flagship AI creative tool has achieved significant growth with 125,000+ active creators generating over 2.5 million AI-powered artworks. The platform continues to lead in user engagement and creative innovation.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500">January 10, 2025</span>
                    <Link href="/news/sybau-125k-milestone?lang=en">
                      <Button variant="ghost" size="sm">
                        Read More
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
                    Partnership
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-grow">
                    Strategic Partnership with 50+ Manufacturing Companies
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    LuckyMobi forms strategic alliances with leading manufacturers across Asia-Pacific to accelerate AI-driven digital transformation in e-commerce and supply chain management.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500">January 5, 2025</span>
                    <Link href="/news/manufacturing-partnership?lang=en">
                      <Button variant="ghost" size="sm">
                        Read More
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
            <Link href="/en/news">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg"
              >
                View All News
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
                    <div className="text-3xl font-bold text-green-600 mb-2">Global</div>
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
                  <Link href="/en/about" className="hover:text-white transition-colors">
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href="/en/news" className="hover:text-white transition-colors">
                    {t.footer.news}
                  </Link>
                </li>
                <li>
                  <Link href="/en/contact" className="hover:text-white transition-colors">
                    {t.footer.contact}
                  </Link>
                </li>
                <li>
                  <Link href="/en/privacy" className="hover:text-white transition-colors">
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/en/terms" className="hover:text-white transition-colors">
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
            <Link href="/zh">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white mt-4 md:mt-0"
              >
                <Globe className="w-4 h-4 mr-2" />
                中文
              </Button>
            </Link>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}