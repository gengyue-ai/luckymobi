"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NavLogo, FooterLogo } from "@/components/logo"
import { ArrowRight, Globe, Sparkles, Zap, Users, Target, Award, Globe2, TrendingUp, Heart, Building, Phone, Mail, MapPin, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function EnglishProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLogo />

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/en" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/en/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/en/products" className="text-blue-600 font-medium">
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
              <Link href="/zh/products">
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Products & Services</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our AI-powered solutions, from creative tools to interactive games and e-commerce platforms across three core domains driving innovation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Products Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI-Powered Solutions</h2>
            <p className="text-xl text-gray-600">Three core domains driving innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Creative Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Creative Tools</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Sybau Picture - AI image creative tool unleashing infinite imagination for young creators and social media enthusiasts.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      AI Style Transfer & Enhancement
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      Smart Background Replacement
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      Text-to-Image Generation
                    </div>
                  </div>
                  <Button
                    className="w-full bg-transparent"
                    variant="outline"
                    onClick={() => window.open("https://sybaupicture.com", "_blank")}
                  >
                    Visit sybaupicture.com
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Interactive Games */}
            <motion.div
              id="ai-games"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Interactive Games</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Revolutionary gaming experiences with AI-powered NPCs, dynamic storylines, and adaptive gameplay that responds to player choices in real-time.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-500" />
                      AI-Powered NPCs & Characters
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-500" />
                      Dynamic Storyline Generation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-500" />
                      Adaptive Gameplay Systems
                    </div>
                  </div>
                  <Link href="/en/solutions/games">
                    <Button className="w-full bg-transparent" variant="outline">
                      Explore Games
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI E-commerce Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                        <Globe2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI E-commerce Solutions</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive solutions helping manufacturing companies achieve intelligent global expansion through AI-powered platforms.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                      Multi-platform Store Setup
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                      AI-Powered Marketing
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                      Global Expansion Support
                    </div>
                  </div>
                  <Link href="/en/solutions/ecommerce">
                    <Button className="w-full bg-transparent" variant="outline">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Detailed Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Technology Advantages</h2>
            <p className="text-xl text-gray-600">Our AI solutions feature leading-edge technical capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-modal AI Processing</h3>
                <p className="text-gray-600 text-sm">
                  Seamlessly combine text, image, and voice inputs for comprehensive creative workflows and all-round AI experiences.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Multiple users can work on the same project simultaneously with real-time synchronization, enhancing team collaboration efficiency.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Support</h3>
                <p className="text-gray-600 text-sm">
                  Support for multi-language, multi-market global deployment, helping enterprises quickly enter international markets.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-2 border-orange-100 hover:border-orange-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">High-Performance Algorithms</h3>
                <p className="text-gray-600 text-sm">
                  300% faster processing speed with significantly improved quality and accuracy, delivering smooth user experiences.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-2 border-red-100 hover:border-red-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Personalization</h3>
                <p className="text-gray-600 text-sm">
                  Provide personalized recommendations based on user behavior and preferences, improving user satisfaction and engagement.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-2 border-teal-100 hover:border-teal-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                <p className="text-gray-600 text-sm">
                  Adopts enterprise-grade security standards ensuring data privacy and system stability - trustworthy AI solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real client success stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Sybau Picture</h3>
                    <p className="text-gray-600">AI Creative Tools Platform</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Active Users</span>
                    <span className="text-2xl font-bold text-blue-600">125,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Generated Artworks</span>
                    <span className="text-2xl font-bold text-purple-600">2.5M+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">User Satisfaction</span>
                    <span className="text-2xl font-bold text-green-600">95%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <Globe2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Manufacturing Partnership</h3>
                    <p className="text-gray-600">AI E-commerce Solutions</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Partners</span>
                    <span className="text-2xl font-bold text-green-600">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Sales Growth</span>
                    <span className="text-2xl font-bold text-teal-600">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Market Coverage</span>
                    <span className="text-2xl font-bold text-orange-600">12 Countries</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact our expert team to learn how to integrate AI technology into your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/en/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Contact Us
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => window.open("https://sybaupicture.com", "_blank")}
                >
                  Try Our Products
                </Button>
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
            <Link href="/zh/products">
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