"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NavLogo, FooterLogo } from "@/components/logo"
import { ArrowRight, Globe, Sparkles, Zap, Users, Target, Award, Globe2, TrendingUp, Heart, Building, Phone, Mail, MapPin, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ChineseProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLogo />

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/zh" className="text-gray-700 hover:text-blue-600 transition-colors">
                首页
              </Link>
              <Link href="/zh/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                关于我们
              </Link>
              <Link href="/zh/products" className="text-blue-600 font-medium">
                产品与服务
              </Link>
              <Link href="/zh/news" className="text-gray-700 hover:text-blue-600 transition-colors">
                新闻中心
              </Link>
              <Link href="/zh/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                联系我们
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/en/products">
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
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">产品与服务</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              探索我们的AI驱动解决方案，从创意工具到互动游戏，再到电商平台，三大核心领域推动创新
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我们的AI驱动解决方案</h2>
            <p className="text-xl text-gray-600">三大核心领域推动创新</p>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI创意工具</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Sybau Picture - AI图片创意工具，为年轻创作者和社交媒体爱好者释放无限想象力。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      AI风格转换与增强
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      智能背景替换
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      文本生成图像
                    </div>
                  </div>
                  <Button
                    className="w-full bg-transparent"
                    variant="outline"
                    onClick={() => window.open("https://sybaupicture.com", "_blank")}
                  >
                    访问 sybaupicture.com
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Interactive Games */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI互动游戏</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    革命性游戏体验，AI驱动的NPC角色、动态剧情生成、自适应游戏玩法，实时响应您的每个选择。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-500" />
                      AI智能NPC与角色
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-500" />
                      动态剧情生成系统
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-500" />
                      自适应游戏玩法
                    </div>
                  </div>
                  <Link href="/zh/solutions/games">
                    <Button className="w-full bg-transparent" variant="outline">
                      探索游戏
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
                      alt="AI电商解决方案"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI电商解决方案</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    全面的解决方案，帮助制造企业通过AI驱动的平台实现智能化全球扩张。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                      多平台店铺搭建
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                      AI驱动营销
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                      全球扩张支持
                    </div>
                  </div>
                  <Link href="/zh/solutions/ecommerce">
                    <Button className="w-full bg-transparent" variant="outline">
                      了解更多
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心技术优势</h2>
            <p className="text-xl text-gray-600">我们的AI解决方案具备领先的技术特性</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">多模态AI处理</h3>
                <p className="text-gray-600 text-sm">
                  无缝结合文本、图像和语音输入，实现综合创意工作流程，提供全方位的AI体验。
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">实时协作</h3>
                <p className="text-gray-600 text-sm">
                  多用户可以同时在同一项目上工作，具有实时同步功能，提升团队协作效率。
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">全球化支持</h3>
                <p className="text-gray-600 text-sm">
                  支持多语言、多市场的全球化部署，助力企业快速进入国际市场。
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-2 border-orange-100 hover:border-orange-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">高性能算法</h3>
                <p className="text-gray-600 text-sm">
                  处理速度提升300%，质量和准确性显著改善，提供流畅的用户体验。
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-2 border-red-100 hover:border-red-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">智能个性化</h3>
                <p className="text-gray-600 text-sm">
                  基于用户行为和偏好提供个性化推荐，提升用户满意度和参与度。
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-2 border-teal-100 hover:border-teal-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">企业级安全</h3>
                <p className="text-gray-600 text-sm">
                  采用企业级安全标准，确保数据隐私和系统稳定性，值得信赖的AI解决方案。
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">成功案例</h2>
            <p className="text-xl text-gray-600">真实客户的成功故事</p>
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
                    <p className="text-gray-600">AI创意工具平台</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">活跃用户</span>
                    <span className="text-2xl font-bold text-blue-600">125,000+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">生成作品</span>
                    <span className="text-2xl font-bold text-purple-600">250万+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">用户满意度</span>
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
                    <h3 className="text-xl font-bold text-gray-900">制造业合作</h3>
                    <p className="text-gray-600">AI电商解决方案</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">合作伙伴</span>
                    <span className="text-2xl font-bold text-green-600">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">销售增长</span>
                    <span className="text-2xl font-bold text-teal-600">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">市场覆盖</span>
                    <span className="text-2xl font-bold text-orange-600">12国</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
                AI驱动创新，连接无限可能。赋能智能生活，构筑数字未来。
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
              <h4 className="font-semibold mb-4">产品</h4>
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
              <h4 className="font-semibold mb-4">公司</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/zh/about" className="hover:text-white transition-colors">
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link href="/zh/news" className="hover:text-white transition-colors">
                    新闻中心
                  </Link>
                </li>
                <li>
                  <Link href="/zh/contact" className="hover:text-white transition-colors">
                    联系我们
                  </Link>
                </li>
                <li>
                  <Link href="/zh/privacy" className="hover:text-white transition-colors">
                    隐私政策
                  </Link>
                </li>
                <li>
                  <Link href="/zh/terms" className="hover:text-white transition-colors">
                    使用条款
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Luckymobi Technology Limited. 版权所有。
            </p>
            <Link href="/en/products">
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