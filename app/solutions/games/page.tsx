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
  title: "AI Interactive Games",
  subtitle: "Next-Generation Entertainment Powered by Artificial Intelligence",
  backHome: "Back to Home",
  heroTitle: "Immersive AI Gaming Experiences That Adapt to You",
  heroSubtitle: "Where Intelligence Meets Entertainment",
  heroDescription: "Experience the future of gaming with our cutting-edge AI-powered interactive games. Dynamic storytelling, intelligent NPCs, and personalized gameplay that evolves with every decision you make.",
  
  // Services Section
  servicesTitle: "Our AI Gaming Solutions",
  servicesSubtitle: "Revolutionary gaming experiences powered by advanced AI technology",
  
  adaptiveGameplay: {
    title: "Adaptive Gameplay Engine",
    description: "AI that learns your playstyle and adapts game difficulty, storylines, and challenges in real-time for the perfect gaming experience.",
    features: [
      "Dynamic difficulty adjustment based on player skill",
      "Personalized story branching and narrative adaptation",
      "Real-time game balance optimization",
      "Intelligent tutorial systems that adapt to learning pace",
      "Behavioral pattern analysis for enhanced gameplay",
      "Custom content generation based on player preferences",
      "Adaptive UI/UX that evolves with player needs",
      "Smart matchmaking using AI algorithms",
      "Personalized achievement and reward systems",
      "Context-aware hint and help systems"
    ]
  },
  
  intelligentNPCs: {
    title: "Intelligent NPCs & Characters",
    description: "Revolutionary AI-driven non-player characters that think, learn, and interact with unprecedented realism and depth.",
    features: [
      "Natural language processing for realistic conversations",
      "Emotional intelligence and contextual responses",
      "Memory systems that remember player interactions",
      "Procedural personality generation for unique characters",
      "Advanced decision-making and strategic thinking",
      "Adaptive behavior based on player actions",
      "Multi-layered dialogue systems with context awareness",
      "Dynamic relationship building with players",
      "Emergent storytelling through AI character interactions",
      "Voice synthesis with emotional expression"
    ]
  },
  
  proceduralGeneration: {
    title: "Procedural Content Generation",
    description: "Infinite possibilities with AI-generated worlds, quests, and content that ensures no two gaming experiences are alike.",
    features: [
      "Infinite world generation with realistic environments",
      "Dynamic quest creation based on player preferences",
      "AI-generated music and soundscapes",
      "Procedural level design with balanced difficulty",
      "Contextual item and reward generation",
      "Adaptive visual style based on player mood",
      "Dynamic weather and environmental systems",
      "Procedural narrative generation with coherent plots",
      "AI-driven economic systems in game worlds",
      "Realistic ecosystem simulation and interaction"
    ]
  },
  
  playerAnalytics: {
    title: "Advanced Player Analytics",
    description: "Deep insights into player behavior, preferences, and engagement patterns to optimize game design and player satisfaction.",
    features: [
      "Real-time player behavior analysis",
      "Predictive modeling for player retention",
      "Engagement pattern recognition and optimization",
      "Personalized content recommendation systems",
      "A/B testing with AI-driven optimization",
      "Churn prediction and prevention strategies",
      "Performance analytics and bottleneck identification",
      "Social interaction analysis and community building",
      "Monetization optimization through player insights",
      "Accessibility analysis and adaptive interfaces"
    ]
  },
  
  // Process Section
  processTitle: "Our Game Development Process",
  processSubtitle: "From concept to launch, AI-enhanced at every step",
  
  processSteps: [
    {
      title: "Concept & Design",
      description: "AI-assisted game design and concept development with market analysis and player persona creation."
    },
    {
      title: "AI Integration",
      description: "Implementing advanced AI systems for gameplay, NPCs, and content generation."
    },
    {
      title: "Testing & Optimization",
      description: "AI-driven testing, balancing, and optimization for the best player experience."
    },
    {
      title: "Launch & Analytics",
      description: "Deployment with real-time analytics and continuous AI-powered improvements."
    },
    {
      title: "Live Operations",
      description: "Ongoing content updates, community management, and AI-driven feature enhancements."
    }
  ],
  
  // Core Advantages
  coreAdvantagesTitle: "Why Choose LuckyMobi for AI Gaming",
  coreAdvantagesSubtitle: "Leading the revolution in intelligent interactive entertainment",
  
  coreAdvantages: [
    {
      title: "Cutting-Edge AI",
      description: "Advanced machine learning models specifically designed for gaming applications",
      metric: "Next-Gen AI"
    },
    {
      title: "Infinite Replayability",
      description: "AI-generated content ensures unique experiences every time you play",
      metric: "∞ Content"
    },
    {
      title: "Adaptive Learning",
      description: "Games that evolve and improve based on player behavior and feedback",
      metric: "Smart Learning"
    },
    {
      title: "Immersive Experience",
      description: "Unprecedented level of immersion through intelligent game mechanics",
      metric: "100% Immersion"
    }
  ],
  
  // Game Categories
  gameCategoriesTitle: "Our Game Categories",
  gameCategoriesSubtitle: "Diverse AI-powered gaming experiences for every player",
  
  categories: [
    {
      title: "Strategy & Simulation",
      description: "Complex AI opponents and realistic simulation systems",
      icon: "🎯"
    },
    {
      title: "Adventure & RPG",
      description: "Dynamic storytelling with intelligent character interactions",
      icon: "🗡️"
    },
    {
      title: "Puzzle & Brain Games",
      description: "Adaptive challenges that grow with your cognitive abilities",
      icon: "🧩"
    },
    {
      title: "Action & Arcade",
      description: "Fast-paced gameplay with AI-driven difficulty adjustment",
      icon: "⚡"
    },
    {
      title: "Social & Multiplayer",
      description: "AI-enhanced social features and intelligent matchmaking",
      icon: "👥"
    },
    {
      title: "Educational Games",
      description: "Learning experiences that adapt to individual progress",
      icon: "📚"
    }
  ],
  
  // Why Choose Us
  whyChooseTitle: "The Future of Gaming is Here",
  whyChooseSubtitle: "Experience entertainment like never before with AI-powered games",
  
  advantages: [
    {
      title: "Revolutionary Technology",
      description: "Pioneering AI gaming technology that sets new industry standards"
    },
    {
      title: "Personalized Experience",
      description: "Every game adapts to your unique playstyle and preferences"
    },
    {
      title: "Continuous Evolution",
      description: "Games that grow smarter and more engaging over time"
    },
    {
      title: "Inclusive Design",
      description: "AI-powered accessibility features for players of all abilities"
    },
    {
      title: "Community-Driven",
      description: "AI systems that learn from the entire player community"
    },
    {
      title: "Innovation First",
      description: "Always at the forefront of AI gaming technology advancement"
    }
  ],
  
  // CTA Section
  ctaTitle: "Ready to Experience the Future of Gaming?",
  ctaDescription: "Join the revolution in AI-powered interactive entertainment and discover games that think, learn, and evolve with you.",
  earlyAccess: "Get Early Access",
  joinCommunity: "Join Our Community"
}

export default function AIGames() {
  const t = translations

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLogo />

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/en#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/en#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/en#products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Products & Services
              </Link>
              <Link href="/en/news" className="text-gray-700 hover:text-blue-600 transition-colors">
                News Center
              </Link>
              <Link href="/en#contact" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={(e) => {
                e.preventDefault();
                window.location.href = '/en#contact';
              }}>
                Contact Us
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/zh/solutions/games">
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
                Coming Soon
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
                      alt="Adaptive Game Engine"
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
                      alt="Intelligent NPCs & Characters"
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
                      alt="Procedural Content Generation"
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
                      alt="Advanced Player Analytics"
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
                AI-driven innovation connecting infinite possibilities. Empowering smart living and building digital future.
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
                  <Link href="/en#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/en/news" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/en#contact" className="hover:text-white transition-colors">
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

    </div>
  )
}