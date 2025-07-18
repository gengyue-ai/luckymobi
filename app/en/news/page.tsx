"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Calendar, Eye, Sparkles, ChevronRight } from "lucide-react"
import { NavLogo, FooterLogo } from "@/components/logo"
import Link from "next/link"
import { motion } from "framer-motion"

const newsArticles = [
  {
    slug: "textile-automation-success",
    title: "Textile Manufacturer Boosts Global Sales by 85% with LuckyMobi AI",
    excerpt: "Thai textile company Golden Thread Industries achieved remarkable international growth using our AI-powered e-commerce platform for global market expansion.",
    category: "Manufacturing Success",
    date: "January 20, 2025",
    readTime: "7 min read",
    image: "/images/fangzhi.png"
  },
  {
    slug: "ai-security-breakthrough",
    title: "LuckyMobi Unveils Advanced AI Security Framework 2025",
    excerpt: "Revolutionary security architecture protects user data while maintaining AI performance, setting new industry standards for secure AI deployment.",
    category: "Technology Innovation",
    date: "January 18, 2025",
    readTime: "6 min read",
    image: "/images/anquan.png"
  },
  {
    slug: "ai-creative-suite-2-0",
    title: "LuckyMobi Launches Advanced AI Creative Suite 2.0",
    excerpt: "Revolutionary update introduces multi-modal AI capabilities, real-time collaboration features, and enhanced image generation algorithms.",
    category: "AI Innovation",
    date: "January 15, 2025",
    readTime: "5 min read",
    image: "/images/ai-creative-child.png"
  },
  {
    slug: "global-ai-education-initiative",
    title: "LuckyMobi Launches Global AI Education Initiative",
    excerpt: "Comprehensive training program aims to train 100,000 professionals in AI technologies by 2026, bridging the global AI skills gap.",
    category: "Corporate Social Responsibility",
    date: "January 12, 2025",
    readTime: "5 min read",
    image: "/images/jiaoyu.png"
  },
  {
    slug: "sybau-125k-milestone",
    title: "Sybau Picture Reaches 125,000+ Active Creators",
    excerpt: "Our flagship AI creative tool has achieved significant growth with 125,000+ active creators generating over 2.5 million AI-powered artworks.",
    category: "Milestone",
    date: "January 10, 2025",
    readTime: "4 min read",
    image: "/images/ai-portrait-young.png"
  },
  {
    slug: "manufacturing-partnership",
    title: "Strategic Partnership with 50+ Manufacturing Companies",
    excerpt: "LuckyMobi forms strategic alliances with leading manufacturers across Asia-Pacific to accelerate AI-driven digital transformation.",
    category: "Partnership",
    date: "January 5, 2025",
    readTime: "6 min read",
    image: "/images/factory.jpg"
  }
]

export default function EnglishNewsCenter() {
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
              <Link href="/en/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/en/products" className="text-gray-700 hover:text-blue-600 transition-colors">
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
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = '/zh/news'}
                className="hidden md:flex items-center space-x-1 bg-transparent"
              >
                <Globe className="w-4 h-4" />
                <span>中文</span>
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">News Center</h1>
            </div>
            <p className="text-xl text-gray-600">Latest updates and insights from LuckyMobi</p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Badge variant="secondary" className="text-sm">
            All News
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
                    <Link href={`/news/${article.slug}?lang=en`} className="mt-auto">
                      <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors">
                        Read More
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
                AI-driven innovation connecting infinite possibilities. Empowering smart living and building digital future.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/solutions/games" className="hover:text-white transition-colors">AI Games</Link></li>
                <li><Link href="/solutions/ecommerce" className="hover:text-white transition-colors">E-commerce Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/en/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/en/news" className="hover:text-white transition-colors">News</Link></li>
                <li><Link href="/en/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/en/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/en/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 Luckymobi Technology Limited. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}