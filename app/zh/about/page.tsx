"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Sparkles, Zap, Users, Target, Award, Globe2, TrendingUp, Heart, Building, Phone, Mail, MapPin } from "lucide-react"
import { NavLogo, FooterLogo } from "@/components/logo"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ChineseAboutPage() {
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
              <Link href="/zh/about" className="text-blue-600 font-medium">
                关于我们
              </Link>
              <Link href="/zh/products" className="text-gray-700 hover:text-blue-600 transition-colors">
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
              <Link href="/en/about">
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">关于LuckyMobi</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI驱动创新，连接无限可能。赋能智能生活，构筑数字未来。
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
                      alt="Luckymobi Technology Limited 公司"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">公司简介</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Luckymobi Technology Limited</strong> 由深耕移动互联网行业多年的第一代移动互联网产品经理团队倾力创办。我们凭借对用户需求的敏锐洞察和对前沿技术的深刻理解，致力于将人工智能（AI）的无限潜力融入到日常应用中。
                    </p>
                    <p>
                      从赋能创意的工具软件、沉浸式的互动游戏，到助力企业全球化布局的电商解决方案，我们专注于三大核心领域的AI创新，为用户和企业创造真正的价值。
                    </p>
                    <p>
                      我们的使命是通过AI技术创新，为全球用户和企业带来更智能、更高效、更愉悦的数字体验，推动智能生活的普及和数字未来的构建。
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                        <div className="text-sm text-gray-600">年行业经验</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                        <div className="text-sm text-gray-600">核心AI解决方案</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-600 mb-2">全球</div>
                        <div className="text-sm text-gray-600">市场覆盖</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-600 mb-2">125K+</div>
                        <div className="text-sm text-gray-600">活跃用户</div>
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
                  我们的愿景
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  成为全球领先的AI驱动创新公司，通过技术创新推动智能生活的普及，让人工智能成为每个人创造力和生产力的延伸，构建一个更加智能、高效、美好的数字世界。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Heart className="w-6 h-6 mr-3" />
                  我们的使命
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  通过AI创新为全球用户和企业带来更智能、更高效、更愉悦的数字体验。我们致力于打破技术壁垒，让先进的人工智能技术能够惠及每一个用户，助力个人创造力释放和企业数字化转型。
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的核心解决方案</h2>
            <p className="text-xl text-gray-600">三大领域推动AI创新</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI创意工具</h3>
                <p className="text-gray-600 mb-4">
                  Sybau Picture - 为年轻创作者和社交媒体爱好者提供AI图片创意工具，释放无限想象力。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    AI风格转换与增强
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    智能背景替换
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    文本生成图像
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI互动游戏</h3>
                <p className="text-gray-600 mb-4">
                  革命性游戏体验，AI驱动的NPC角色、动态剧情生成、自适应游戏玩法，实时响应玩家选择。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    AI智能NPC与角色
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    动态剧情生成系统
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    自适应游戏玩法
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-green-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI电商解决方案</h3>
                <p className="text-gray-600 mb-4">
                  全面的解决方案，帮助制造企业通过AI驱动的平台实现智能化全球扩张。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    多平台店铺搭建
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    AI驱动营销
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    全球扩张支持
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的价值观</h2>
            <p className="text-xl text-gray-600">指导我们前行的核心价值</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">创新驱动</h3>
              <p className="text-gray-600 text-sm">持续探索AI技术前沿，推动产品和服务创新</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">用户至上</h3>
              <p className="text-gray-600 text-sm">以用户需求为核心，提供卓越的产品体验</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">卓越品质</h3>
              <p className="text-gray-600 text-sm">追求产品和服务的卓越品质，确保用户满意</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">全球视野</h3>
              <p className="text-gray-600 text-sm">立足全球市场，为全世界用户创造价值</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">技术创新</h2>
                <p className="text-xl text-gray-600">现代化技术栈，企业级安全保障</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">现代技术栈</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Next.js 14 + TypeScript</li>
                    <li>• Tailwind CSS + shadcn/ui</li>
                    <li>• 性能优化与代码分割</li>
                    <li>• SEO增强与结构化数据</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">多语言支持</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 专业i18n国际化</li>
                    <li>• 中英文无缝切换</li>
                    <li>• 移动端优先设计</li>
                    <li>• 响应式用户体验</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">安全保障</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• CSP安全头部配置</li>
                    <li>• 输入验证与XSS防护</li>
                    <li>• CSRF保护机制</li>
                    <li>• 企业级安全标准</li>
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
            <Link href="/en/about">
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