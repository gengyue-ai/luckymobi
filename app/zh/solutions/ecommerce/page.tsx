"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, ShoppingCart, TrendingUp, Zap, Users, CheckCircle, Star, Building, Target, BarChart3, Workflow, Rocket, Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FooterLogo } from "@/components/logo"

const translations = {
  title: "AI电商解决方案",
  subtitle: "赋能制造企业全球市场成功",
  backHome: "返回首页",
  heroTitle: "用AI驱动的电商解决方案改变您的制造业务",
  heroSubtitle: "从工厂到全球市场",
  heroDescription: "先进的AI驱动电商解决方案，支持120+语言，智能SEO优化，已成功服务5000+制造企业。让AI助力您的全球扩张。",
  getStarted: "开始使用",
  learnMore: "了解更多",
  
  // Services Section
  servicesTitle: "我们的完整电商解决方案",
  servicesSubtitle: "为出海制造企业提供端到端服务",
  
  independentSite: {
    title: "AI智能独立站",
    description: "前沿AI技术打造品牌电商网站 - 120+语言支持，智能SEO，保证谷歌首页排名",
    features: [
      "AI生成多语言内容（120+语言）",
      "智能SEO优化，保证谷歌首页排名",
      "AI驱动产品目录自动翻译",
      "智能客户行为分析与推荐",
      "高级转化率优化（CRO）",
      "集成全球支付系统（PayPal、Stripe等）",
      "跨平台实时库存同步",
      "AI客服机器人24/7多语言支持",
      "移动优先响应式设计与PWA技术",
      "AI洞察高级分析仪表板"
    ]
  },
  
  amazonServices: {
    title: "AI驱动亚马逊平台精通",
    description: "AI技术优化亚马逊销售 - 自动化商品列表、动态定价和智能广告活动",
    features: [
      "AI自动化亚马逊店铺设置和品牌注册",
      "A9算法智能商品列表优化",
      "实时趋势分析智能关键词研究",
      "AI驱动动态定价和库存管理",
      "自动化评价监控和回复系统",
      "高级竞品智能和市场分析",
      "机器学习驱动PPC活动优化",
      "FBA物流优化和成本分析",
      "多市场扩张（美国、欧盟、日本、加拿大）",
      "预测分析实时绩效追踪"
    ]
  },
  
  alibabaServices: {
    title: "智能阿里巴巴B2B解决方案",
    description: "AI增强阿里巴巴运营，实现最大B2B成功 - 智能买家匹配、自动化询盘处理和全球贸易优化",
    features: [
      "AI优化阿里巴巴.com金牌供应商设置",
      "自动翻译智能产品展示",
      "智能买家-供应商匹配算法",
      "自动化询盘响应和跟进系统",
      "AI驱动贸易保障和风险评估",
      "成本计算器全球物流优化",
      "虚拟展会参与和潜客开发",
      "跨境合规自动化（CE、FCC等）",
      "AI洞察B2B关系CRM",
      "市场情报和趋势分析仪表板"
    ]
  },
  
  aliexpressServices: {
    title: "智能速卖通零售引擎",
    description: "AI驱动速卖通运营，实现全球零售成功 - 智能定价、自动化活动和预测市场分析",
    features: [
      "AI驱动速卖通店铺设置和品牌优化",
      "SEO优化描述智能产品列表",
      "自动化促销活动管理",
      "即时响应AI客户服务",
      "智能物流成本优化",
      "实时市场趋势分析和预测",
      "利润保护动态竞争定价",
      "ML算法销售绩效优化",
      "跨境税费计算自动化",
      "实时转换多币种定价"
    ]
  },
  
  // Process Section
  processTitle: "我们的成熟流程",
  processSubtitle: "循序渐进的电商成功方法",
  
  processSteps: [
    {
      title: "评估与策略",
      description: "分析您的产品、目标市场和竞争情况，制定定制化电商策略。"
    },
    {
      title: "平台搭建",
      description: "使用AI驱动工具在选定的电商平台上建立和优化您的业务。"
    },
    {
      title: "内容创作",
      description: "使用AI辅助创建引人注目的产品描述、图像和营销材料。"
    },
    {
      title: "上线与优化",
      description: "启动您的电商运营，并根据绩效数据持续优化。"
    },
    {
      title: "扩大与拓展",
      description: "扩大成功策略规模，拓展到新市场和新平台。"
    }
  ],
  
  // Success Stories
  successTitle: "成功案例",
  successSubtitle: "我们制造业合作伙伴的真实成果",
  
  // Core Advantages
  coreAdvantagesTitle: "为什么LuckyMobi超越传统解决方案",
  coreAdvantagesSubtitle: "先进AI技术与深度制造业专业知识相结合",
  
  coreAdvantages: [
    {
      title: "AI优先方法",
      description: "与传统提供商不同，我们的AI自动化80%的日常任务",
      metric: "80% 自动化"
    },
    {
      title: "保证结果",
      description: "谷歌首页排名保证或退款",
      metric: "100% 保证"
    },
    {
      title: "120+语言",
      description: "AI驱动翻译 vs 竞品的20-30种语言",
      metric: "120+ 语言"
    },
    {
      title: "制造业聚焦",
      description: "5000+制造业客户 vs 通用B2B解决方案",
      metric: "5000+ 客户"
    }
  ],
  
  // Why Choose Us
  whyChooseTitle: "完整AI电商生态系统",
  whyChooseSubtitle: "一个平台满足全球成功所需的一切",
  
  advantages: [
    {
      title: "先进AI技术",
      description: "持续优化您绩效的机器学习算法"
    },
    {
      title: "制造业专业知识",
      description: "深度理解B2B制造业销售周期和痛点"
    },
    {
      title: "成功记录证明",
      description: "5000+成功制造企业，产生20亿美元+收入"
    },
    {
      title: "全球合规",
      description: "自动遵守国际贸易法规和标准"
    },
    {
      title: "24/7 AI支持",
      description: "智能客户服务，需要时人工升级"
    },
    {
      title: "ROI保证",
      description: "12个月内3倍ROI保证或免费延长服务"
    }
  ],
  
  // CTA Section
  ctaTitle: "准备走向全球了吗？",
  ctaDescription: "让我们讨论我们的AI电商解决方案如何改变您的制造业务。",
  contactUs: "联系我们",
  scheduleDemo: "预约演示"
}

export default function EcommerceSolutionsZH() {
  const t = translations

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LuckyMobi</span>
            </div>

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
              <Link href="/solutions/ecommerce">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t.title}</h1>
            </div>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                全球电商卓越
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.heroTitle}</h2>
              <p className="text-xl text-gray-600 mb-4 font-medium">{t.heroSubtitle}</p>
              <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">{t.heroDescription}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
            <p className="text-xl text-gray-600">{t.servicesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Independent Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/AIstation.png"
                      alt="AI智能独立站"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardTitle className="flex items-center">
                    <Building className="w-6 h-6 mr-3 text-green-600" />
                    {t.independentSite.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t.independentSite.description}</p>
                  <ul className="space-y-3">
                    {t.independentSite.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Amazon Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/AIamazon.png"
                      alt="AI驱动亚马逊平台精通"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardTitle className="flex items-center">
                    <ShoppingCart className="w-6 h-6 mr-3 text-orange-600" />
                    {t.amazonServices.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t.amazonServices.description}</p>
                  <ul className="space-y-3">
                    {t.amazonServices.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Alibaba Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/AIalibaba.png"
                      alt="智能阿里巴巴B2B解决方案"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardTitle className="flex items-center">
                    <Building className="w-6 h-6 mr-3 text-blue-600" />
                    {t.alibabaServices.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t.alibabaServices.description}</p>
                  <ul className="space-y-3">
                    {t.alibabaServices.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* AliExpress Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/AIsumaitong.png"
                      alt="智能速卖通零售引擎"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-red-600" />
                    {t.aliexpressServices.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t.aliexpressServices.description}</p>
                  <ul className="space-y-3">
                    {t.aliexpressServices.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.processTitle}</h2>
            <p className="text-xl text-gray-600">{t.processSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {t.processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.coreAdvantagesTitle}</h2>
            <p className="text-xl text-gray-600">{t.coreAdvantagesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.coreAdvantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 mb-6 text-white">
                  <div className="text-4xl font-bold mb-2">{advantage.metric}</div>
                  <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-green-100">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">真实制造业成功案例</h2>
            <p className="text-xl text-gray-600">来自各行业真实工厂的成功实践与成果</p>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
              <div className="text-gray-600">服务工厂</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$20亿</div>
              <div className="text-gray-600">创造营收</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">350%</div>
              <div className="text-gray-600">平均ROI提升</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">120+</div>
              <div className="text-gray-600">覆盖国家</div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Ceramic Industry Case */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/taoci.png"
                      alt="陶瓷制造"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">陶瓷行业</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">景德镇皇家陶瓷有限公司</CardTitle>
                  <p className="text-sm text-gray-600">高端瓷器制造商</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">出口增长：</span>
                      <span className="font-semibold text-green-600">+420%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">新增市场：</span>
                      <span className="font-semibold">28个国家</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">订单价值：</span>
                      <span className="font-semibold text-blue-600">+280%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">投资回报：</span>
                      <span className="font-semibold text-purple-600">520%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic">"AI翻译帮助我们向欧洲奢侈品市场完美展示传统工艺的文化内涵，订单量大幅提升。"</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Fashion Industry Case */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-pink-500">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/fuzhuang.png"
                      alt="服装制造"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-pink-100 text-pink-800">服装行业</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">广州精英时装集团</CardTitle>
                  <p className="text-sm text-gray-600">快时尚与可持续服装</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">B2B销售：</span>
                      <span className="font-semibold text-green-600">+380%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">零售伙伴：</span>
                      <span className="font-semibold">1,200+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">响应时间：</span>
                      <span className="font-semibold text-blue-600">-85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">市场覆盖：</span>
                      <span className="font-semibold text-purple-600">45个国家</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic">"AI智能尺码表和风格推荐系统帮助我们成功打入美国和欧洲时装市场。"</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Toy Industry Case */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-yellow-500">
                <CardHeader>
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="/images/wanju.png"
                      alt="玩具制造"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">玩具行业</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">汕头奇迹玩具制造有限公司</CardTitle>
                  <p className="text-sm text-gray-600">益智与电子玩具</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">亚马逊销售：</span>
                      <span className="font-semibold text-green-600">+650%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">产品线：</span>
                      <span className="font-semibold">150+ SKU</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">合规率：</span>
                      <span className="font-semibold text-blue-600">99.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">安全认证：</span>
                      <span className="font-semibold text-purple-600">12项标准</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic">"AI合规检查自动确保我们的玩具符合所有国际市场的安全标准，大大提升了效率。"</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Industry Distribution Chart */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">我们服务的制造业行业</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🏺</span>
                </div>
                <div className="font-semibold text-gray-900">陶瓷</div>
                <div className="text-sm text-gray-600">18%</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">👗</span>
                </div>
                <div className="font-semibold text-gray-900">服装</div>
                <div className="text-sm text-gray-600">25%</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🧸</span>
                </div>
                <div className="font-semibold text-gray-900">玩具</div>
                <div className="text-sm text-gray-600">15%</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <div className="font-semibold text-gray-900">电子</div>
                <div className="text-sm text-gray-600">22%</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <div className="font-semibold text-gray-900">机械</div>
                <div className="text-sm text-gray-600">12%</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">📦</span>
                </div>
                <div className="font-semibold text-gray-900">其他</div>
                <div className="text-sm text-gray-600">8%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.whyChooseTitle}</h2>
            <p className="text-xl text-gray-600">{t.whyChooseSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              <Link href="/solutions/ecommerce">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="mr-2 text-lg">🌐</span>
                  English
                </Button>
              </Link>
              <Link href="/zh/solutions/ecommerce">
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