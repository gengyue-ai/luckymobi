"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Sparkles, Zap, Users, Target, Award, Globe2, TrendingUp, Heart, Building, Phone, Mail, MapPin } from "lucide-react"
import { NavLogo, FooterLogo } from "@/components/logo"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function EnglishAboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLogo />

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/en#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/en/about" className="text-blue-600 font-medium">
                About Us
              </Link>
              <Link href="/en#products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Products & Services
              </Link>
              <Link href="/en/news" className="text-gray-700 hover:text-blue-600 transition-colors">
                News Center
              </Link>
              <Link href="/en/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/zh/about">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex items-center space-x-1 bg-transparent"
                >
                  <Globe className="w-4 h-4" />
                  <span>中文</span>
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
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About LuckyMobi</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-driven innovation connecting infinite possibilities. Empowering smart living and building digital future.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Company Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden">
                    <Image
                      src="/images/company.png"
                      alt="LuckyMobi Technology Limited Company"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Luckymobi Technology Limited</strong> was founded by a team of first-generation mobile internet product managers with years of profound experience in the industry. Leveraging our keen insights into user needs and deep understanding of cutting-edge technologies, we are dedicated to integrating the limitless potential of Artificial Intelligence (AI) into everyday applications.
                    </p>
                    <p>
                      From creative tools and immersive games to e-commerce solutions for global expansion, we focus on AI innovation across three core domains, creating real value for users and businesses worldwide.
                    </p>
                    <p>
                      Our mission is to deliver smarter, more efficient, and more enjoyable digital experiences for users and businesses worldwide through AI innovation, driving the adoption of intelligent living and building a digital future.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                        <div className="text-sm text-gray-600">Core AI Solutions</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-600 mb-2">Global</div>
                        <div className="text-sm text-gray-600">Market Reach</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-600 mb-2">125K+</div>
                        <div className="text-sm text-gray-600">Active Users</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Our Vision & Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Target className="w-6 h-6 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To become a global leader in AI-driven innovation, promoting the adoption of intelligent living through technological innovation, making artificial intelligence an extension of everyone's creativity and productivity, building a smarter, more efficient, and better digital world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Heart className="w-6 h-6 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To deliver smarter, more efficient, and more enjoyable digital experiences for users and businesses worldwide through AI innovation. We are committed to breaking down technological barriers, making advanced AI technology accessible to every user, empowering individual creativity and enterprise digital transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Core Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Solutions</h2>
            <p className="text-xl text-gray-600">Three domains driving AI innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Creative Tools</h3>
                <p className="text-gray-600 mb-4">
                  Sybau Picture - AI image creative tool unleashing infinite imagination for young creators and social media enthusiasts.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    AI Style Transfer & Enhancement
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Smart Background Replacement
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Text-to-Image Generation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Interactive Games</h3>
                <p className="text-gray-600 mb-4">
                  Revolutionary gaming experiences with AI-powered NPCs, dynamic storylines, and adaptive gameplay that responds to player choices in real-time.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    AI-Powered NPCs & Characters
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Dynamic Storyline Generation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Adaptive Gameplay Systems
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-green-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI E-commerce Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive solutions helping manufacturing companies achieve intelligent global expansion through AI-powered platforms.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Multi-platform Store Setup
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    AI-Powered Marketing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Global Expansion Support
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Company Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">Core values guiding our journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Driven</h3>
              <p className="text-gray-600 text-sm">Continuously exploring AI technology frontiers, driving product and service innovation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User-Centric</h3>
              <p className="text-gray-600 text-sm">Focusing on user needs as our core, delivering exceptional product experiences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Pursuing excellence in products and services, ensuring user satisfaction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Vision</h3>
              <p className="text-gray-600 text-sm">Focusing on global markets, creating value for users worldwide</p>
            </div>
          </div>
        </motion.section>

        {/* Technology & Innovation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology & Innovation</h2>
                <p className="text-xl text-gray-600">Modern tech stack with enterprise-grade security</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">Modern Tech Stack</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Next.js 14 + TypeScript</li>
                    <li>• Tailwind CSS + shadcn/ui</li>
                    <li>• Performance optimization & code splitting</li>
                    <li>• SEO enhanced & structured data</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">Multi-language Support</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Professional i18n internationalization</li>
                    <li>• Seamless English-Chinese switching</li>
                    <li>• Mobile-first design</li>
                    <li>• Responsive user experience</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">Security</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• CSP security headers</li>
                    <li>• Input validation & XSS protection</li>
                    <li>• CSRF protection mechanisms</li>
                    <li>• Enterprise-grade security standards</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <FooterLogo />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                AI-driven innovation connecting infinite possibilities. Empowering smart living and building digital future.
              </p>
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
              <h4 className="font-semibold mb-4">Products</h4>
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
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/en/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/en/news" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/en/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/en/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/en/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Luckymobi Technology Limited. All Rights Reserved.
            </p>
            <Link href="/zh/about">
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
    </div>
  )
}