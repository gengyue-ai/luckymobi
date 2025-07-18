"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Calendar, Eye, Sparkles, ChevronRight } from "lucide-react"
import { NavLogo, FooterLogo } from "@/components/logo"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const newsArticles = [
  {
    slug: "textile-automation-success",
    title: "纺织制造商借助LuckyMobi AI全球销售增长85%",
    excerpt: "泰国纺织企业金线工业公司利用我们的AI电商平台实现国际化扩张，8个月内全球销售增长85%，成功进军12个新市场。",
    category: "制造业成功案例",
    date: "2025年1月20日",
    readTime: "7分钟阅读",
    image: "/images/fangzhi.png"
  },
  {
    slug: "ai-security-breakthrough",
    title: "LuckyMobi发布先进AI安全框架2025",
    excerpt: "革命性安全架构在保持AI性能的同时保护用户数据，为安全AI部署设立新的行业标准。",
    category: "技术创新",
    date: "2025年1月18日",
    readTime: "6分钟阅读",
    image: "/images/anquan.png"
  },
  {
    slug: "ai-creative-suite-2-0",
    title: "LuckyMobi 发布先进AI创意套件 2.0",
    excerpt: "革命性更新引入多模态AI能力、实时协作功能和增强的图像生成算法。全新套件为创作者提供前所未有的创作自由。",
    category: "AI创新",
    date: "2025年1月15日",
    readTime: "5分钟阅读",
    image: "/images/ai-creative-child.png"
  },
  {
    slug: "global-ai-education-initiative",
    title: "LuckyMobi启动全球AI教育倡议",
    excerpt: "综合培训项目旨在到2026年培训100,000名AI技术专业人员，弥合全球AI技能差距，推动行业发展。",
    category: "企业社会责任",
    date: "2025年1月12日",
    readTime: "5分钟阅读",
    image: "/images/jiaoyu.png"
  },
  {
    slug: "sybau-125k-milestone",
    title: "Sybau Picture 突破125,000+活跃创作者",
    excerpt: "我们的旗舰AI创意工具取得显著增长，125,000+活跃创作者生成超过250万AI艺术作品。平台在用户参与度和创意创新方面持续领先。",
    category: "里程碑",
    date: "2025年1月10日",
    readTime: "4分钟阅读",
    image: "/images/ai-portrait-young.png"
  },
  {
    slug: "manufacturing-partnership",
    title: "与50+制造企业建立战略合作伙伴关系",
    excerpt: "LuckyMobi与亚太地区领先制造商建立战略联盟，加速电商和供应链管理的AI驱动数字化转型。",
    category: "合作伙伴",
    date: "2025年1月5日",
    readTime: "6分钟阅读",
    image: "/images/factory.jpg"
  }
]

export default function ChineseNewsCenter() {
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
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = '/en/news'}
                className="hidden md:flex items-center space-x-1 bg-transparent"
              >
                <Globe className="w-4 h-4" />
                <span>English</span>
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">新闻中心</h1>
            </div>
            <p className="text-xl text-gray-600">来自LuckyMobi的最新动态和行业洞察</p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Badge variant="secondary" className="text-sm">
            全部新闻
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
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
                      alt={article.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Image failed to load:', article.image);
                        // 显示渐变背景作为fallback
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)';
                          parent.style.display = 'flex';
                          parent.style.alignItems = 'center';
                          parent.style.justifyContent = 'center';
                          parent.innerHTML = `<div style="font-size: 3rem;">🚀</div>`;
                        }
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-white text-xs font-medium">{article.category}</span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="flex flex-col flex-grow">
                    <Badge variant="secondary" className="mb-3 w-fit">
                      {article.category}
                    </Badge>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    {/* Article Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Link href={`/news/${article.slug}?lang=zh`} className="mt-auto">
                      <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors">
                        阅读更多
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
              <p className="text-gray-400 mb-4 max-w-md">
                AI驱动创新，连接无限可能。赋能智能生活，构筑数字未来。
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
                    AI游戏
                  </Link>
                </li>
                <li>
                  <Link href="/zh/solutions/ecommerce" className="hover:text-white transition-colors">
                    电商解决方案
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
                    新闻
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
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Link href="/en/news">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="mr-2 text-lg">🌐</span>
                  English
                </Button>
              </Link>
              <Link href="/zh/news">
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