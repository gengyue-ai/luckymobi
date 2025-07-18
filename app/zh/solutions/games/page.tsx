"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Gamepad2, Zap, Users, CheckCircle, Star, Brain, Target, Sparkles, Workflow, Rocket, Shield, PlayCircle } from "lucide-react"
import { NavLogo, FooterLogo } from "@/components/logo"
import Link from "next/link"
import { motion } from "framer-motion"

const translations = {
  title: "AI互动游戏",
  subtitle: "由人工智能驱动的下一代娱乐体验",
  backHome: "返回首页",
  heroTitle: "会适应你的沉浸式AI游戏体验",
  heroSubtitle: "智能与娱乐的完美结合",
  heroDescription: "体验AI驱动的互动游戏未来。动态故事情节、智能NPC和个性化游戏体验，随着你的每一个决定而进化。",
  
  // Services Section
  servicesTitle: "我们的AI游戏解决方案",
  servicesSubtitle: "先进AI技术驱动的革命性游戏体验",
  
  adaptiveGameplay: {
    title: "自适应游戏引擎",
    description: "学习你的游戏风格并实时调整游戏难度、故事情节和挑战的AI，为你带来完美的游戏体验。",
    features: [
      "基于玩家技能的动态难度调整",
      "个性化故事分支和叙事适配",
      "实时游戏平衡优化",
      "适应学习节奏的智能教程系统",
      "增强游戏体验的行为模式分析",
      "基于玩家偏好的自定义内容生成",
      "随玩家需求进化的自适应UI/UX",
      "使用AI算法的智能配对系统",
      "个性化成就和奖励系统",
      "情境感知的提示和帮助系统"
    ]
  },
  
  intelligentNPCs: {
    title: "智能NPC与角色",
    description: "革命性的AI驱动非玩家角色，能够思考、学习，并以前所未有的真实感和深度进行互动。",
    features: [
      "自然语言处理实现真实对话",
      "情感智能和情境响应",
      "记住玩家互动的记忆系统",
      "独特角色的程序化人格生成",
      "高级决策和策略思维",
      "基于玩家行为的自适应行为",
      "具有情境感知的多层对话系统",
      "与玩家的动态关系建立",
      "通过AI角色互动的新兴故事叙述",
      "带有情感表达的语音合成"
    ]
  },
  
  proceduralGeneration: {
    title: "程序化内容生成",
    description: "通过AI生成的世界、任务和内容实现无限可能性，确保没有两个游戏体验是相同的。",
    features: [
      "真实环境的无限世界生成",
      "基于玩家偏好的动态任务创建",
      "AI生成的音乐和音景",
      "平衡难度的程序化关卡设计",
      "情境化物品和奖励生成",
      "基于玩家心情的自适应视觉风格",
      "动态天气和环境系统",
      "连贯情节的程序化叙事生成",
      "AI驱动的游戏世界经济系统",
      "真实生态系统模拟和互动"
    ]
  },
  
  playerAnalytics: {
    title: "高级玩家分析",
    description: "深入洞察玩家行为、偏好和参与模式，以优化游戏设计和玩家满意度。",
    features: [
      "实时玩家行为分析",
      "玩家留存的预测建模",
      "参与模式识别和优化",
      "个性化内容推荐系统",
      "AI驱动优化的A/B测试",
      "流失预测和预防策略",
      "性能分析和瓶颈识别",
      "社交互动分析和社区建设",
      "通过玩家洞察的货币化优化",
      "可访问性分析和自适应界面"
    ]
  },
  
  // Process Section
  processTitle: "我们的游戏开发流程",
  processSubtitle: "从概念到发布，每一步都有AI增强",
  
  processSteps: [
    {
      title: "概念与设计",
      description: "AI辅助的游戏设计和概念开发，包括市场分析和玩家人物创建。"
    },
    {
      title: "AI集成",
      description: "为游戏玩法、NPC和内容生成实施先进的AI系统。"
    },
    {
      title: "测试与优化",
      description: "AI驱动的测试、平衡和优化，提供最佳玩家体验。"
    },
    {
      title: "发布与分析",
      description: "实时分析部署和持续AI驱动的改进。"
    },
    {
      title: "实时运营",
      description: "持续的内容更新、社区管理和AI驱动的功能增强。"
    }
  ],
  
  // Core Advantages
  coreAdvantagesTitle: "为什么选择LuckyMobi的AI游戏",
  coreAdvantagesSubtitle: "引领智能互动娱乐革命",
  
  coreAdvantages: [
    {
      title: "前沿AI技术",
      description: "专为游戏应用设计的先进机器学习模型",
      metric: "下一代AI"
    },
    {
      title: "无限可重玩性",
      description: "AI生成的内容确保每次游戏都有独特体验",
      metric: "∞ 内容"
    },
    {
      title: "自适应学习",
      description: "基于玩家行为和反馈进化和改进的游戏",
      metric: "智能学习"
    },
    {
      title: "沉浸式体验",
      description: "通过智能游戏机制实现前所未有的沉浸感",
      metric: "100% 沉浸"
    }
  ],
  
  // Game Categories
  gameCategoriesTitle: "我们的游戏类别",
  gameCategoriesSubtitle: "为每位玩家提供多样化的AI驱动游戏体验",
  
  categories: [
    {
      title: "策略与模拟",
      description: "复杂的AI对手和真实的模拟系统",
      icon: "🎯"
    },
    {
      title: "冒险与RPG",
      description: "智能角色互动的动态故事叙述",
      icon: "🗡️"
    },
    {
      title: "益智与脑力游戏",
      description: "随你认知能力增长的自适应挑战",
      icon: "🧩"
    },
    {
      title: "动作与街机",
      description: "AI驱动难度调整的快节奏游戏",
      icon: "⚡"
    },
    {
      title: "社交与多人游戏",
      description: "AI增强的社交功能和智能配对",
      icon: "👥"
    },
    {
      title: "教育游戏",
      description: "适应个人进度的学习体验",
      icon: "📚"
    }
  ],
  
  // Why Choose Us
  whyChooseTitle: "游戏的未来就在这里",
  whyChooseSubtitle: "通过AI驱动的游戏体验前所未有的娱乐",
  
  advantages: [
    {
      title: "革命性技术",
      description: "开创性的AI游戏技术，树立新的行业标准"
    },
    {
      title: "个性化体验",
      description: "每个游戏都适应你独特的游戏风格和偏好"
    },
    {
      title: "持续进化",
      description: "随着时间推移变得更智能、更有趣的游戏"
    },
    {
      title: "包容性设计",
      description: "为所有能力的玩家提供AI驱动的无障碍功能"
    },
    {
      title: "社区驱动",
      description: "从整个玩家社区学习的AI系统"
    },
    {
      title: "创新优先",
      description: "始终处于AI游戏技术进步的前沿"
    }
  ],
  
  // CTA Section
  ctaTitle: "准备体验游戏的未来吗？",
  ctaDescription: "加入AI驱动的互动娱乐革命，发现能够思考、学习并与你一起进化的游戏。",
  earlyAccess: "获得早期访问权限",
  joinCommunity: "加入我们的社区"
}

export default function AIGamesZH() {
  const t = translations

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLogo />

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/zh#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                首页
              </Link>
              <Link href="/zh#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                关于我们
              </Link>
              <Link href="/zh#products" className="text-gray-700 hover:text-blue-600 transition-colors">
                产品与服务
              </Link>
              <Link href="/zh/news" className="text-gray-700 hover:text-blue-600 transition-colors">
                新闻中心
              </Link>
              <Link href="/zh#contact" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={(e) => {
                e.preventDefault();
                window.location.href = '/zh#contact';
              }}>
                联系我们
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/solutions/games">
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
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Gamepad2 className="w-6 h-6 text-white" />
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
                <PlayCircle className="w-4 h-4 mr-2" />
                即将推出
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
            {/* Adaptive Gameplay */}
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
                      src="/images/yinqing.png"
                      alt="自适应游戏引擎"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardTitle className="flex items-center">
                    <Brain className="w-6 h-6 mr-3 text-purple-600" />
                    {t.adaptiveGameplay.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t.adaptiveGameplay.description}</p>
                  <ul className="space-y-3">
                    {t.adaptiveGameplay.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Intelligent NPCs */}
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
                      src="/images/juese.png"
                      alt="智能NPC与角色"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-3 text-pink-600" />
                    {t.intelligentNPCs.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t.intelligentNPCs.description}</p>
                  <ul className="space-y-3">
                    {t.intelligentNPCs.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Procedural Generation */}
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
                      src="/images/shengcheng.png"
                      alt="程序化内容生成"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardTitle className="flex items-center">
                    <Sparkles className="w-6 h-6 mr-3 text-indigo-600" />
                    {t.proceduralGeneration.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t.proceduralGeneration.description}</p>
                  <ul className="space-y-3">
                    {t.proceduralGeneration.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Player Analytics */}
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
                      src="/images/fenxi.png"
                      alt="高级玩家分析"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardTitle className="flex items-center">
                    <Target className="w-6 h-6 mr-3 text-orange-600" />
                    {t.playerAnalytics.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t.playerAnalytics.description}</p>
                  <ul className="space-y-3">
                    {t.playerAnalytics.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
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

      {/* Game Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.gameCategoriesTitle}</h2>
            <p className="text-xl text-gray-600">{t.gameCategoriesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.coreAdvantagesTitle}</h2>
            <p className="text-xl text-gray-600">{t.coreAdvantagesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.coreAdvantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 mb-6 text-white">
                  <div className="text-4xl font-bold mb-2">{advantage.metric}</div>
                  <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-purple-100">{advantage.description}</p>
                </div>
              </div>
            ))}
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
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <Link href="/solutions/games">
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

    </div>
  )
}