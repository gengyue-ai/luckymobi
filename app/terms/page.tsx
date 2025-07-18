"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, FileText, AlertTriangle, Scale, Shield, Users, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const translations = {
  en: {
    title: "Terms of Service",
    subtitle: "Please read these terms carefully",
    lastUpdated: "Last updated: January 15, 2025",
    backHome: "Back to Home",
    sections: {
      acceptance: {
        title: "Acceptance of Terms",
        content: "By accessing and using the services provided by Luckymobi Technology Limited ('Company', 'we', 'our', or 'us'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, please do not use our services."
      },
      services: {
        title: "Our Services",
        content: "We provide AI-powered tools and platforms including:",
        items: [
          "Sybau Picture: AI creative image generation and editing tool",
          "AI Interactive Games: Immersive entertainment experiences",
          "AI E-commerce Solutions: Business automation and expansion tools",
          "Related APIs, software, and consulting services"
        ]
      },
      userAccounts: {
        title: "User Accounts",
        content: "To access certain features, you may need to create an account. You are responsible for:",
        responsibilities: [
          "Maintaining the confidentiality of your account credentials",
          "All activities that occur under your account",
          "Providing accurate and current information",
          "Notifying us immediately of any unauthorized use"
        ]
      },
      acceptableUse: {
        title: "Acceptable Use Policy",
        content: "You agree not to use our services to:",
        prohibited: [
          "Violate any applicable laws or regulations",
          "Infringe on intellectual property rights",
          "Generate harmful, illegal, or offensive content",
          "Attempt to reverse engineer or hack our systems",
          "Upload malicious code or viruses",
          "Spam or harass other users",
          "Use our services for commercial purposes without authorization"
        ]
      },
      intellectualProperty: {
        title: "Intellectual Property Rights",
        content: "Our services and underlying technology are protected by intellectual property laws. We retain all rights to our AI models, algorithms, and proprietary technology. Content you create using our tools may be subject to certain licensing terms."
      },
      contentPolicy: {
        title: "Content and Data",
        userContent: {
          title: "User-Generated Content",
          content: "You retain ownership of content you create, but grant us a license to process, store, and improve our services. We may use aggregated, anonymized data to enhance our AI models."
        },
        prohibited: {
          title: "Prohibited Content",
          content: "You may not create or distribute content that is illegal, harmful, defamatory, or violates third-party rights."
        }
      },
      privacy: {
        title: "Privacy and Data Protection",
        content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. We comply with applicable data protection regulations including GDPR where applicable."
      },
      disclaimers: {
        title: "Disclaimers and Limitations",
        content: "Our services are provided 'as is' without warranties. We disclaim all warranties, express or implied, including:",
        items: [
          "Merchantability and fitness for a particular purpose",
          "Accuracy or reliability of AI-generated content",
          "Uninterrupted or error-free service",
          "Security of data transmission"
        ]
      },
      liability: {
        title: "Limitation of Liability",
        content: "To the maximum extent permitted by law, our liability is limited to the amount you paid for our services in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages."
      },
      termination: {
        title: "Termination",
        content: "We may terminate or suspend your access to our services at any time for violation of these Terms or for any other reason. You may terminate your account at any time by contacting us."
      },
      changes: {
        title: "Changes to Terms",
        content: "We reserve the right to modify these Terms at any time. We will notify users of significant changes. Continued use of our services constitutes acceptance of the modified Terms."
      },
      governing: {
        title: "Governing Law",
        content: "These Terms are governed by the laws of Hong Kong. Any disputes will be resolved in the courts of Hong Kong."
      },
      contact: {
        title: "Contact Information",
        content: "For questions about these Terms, please contact us:",
        email: "legal@luckymobi.org",
        address: "RM511, 5/F, Ming Sang Industrial Building, 19-21 Hing Yip Street, Kwun Tong, Kowloon, Hong Kong"
      }
    }
  },
  zh: {
    title: "使用条款",
    subtitle: "请仔细阅读这些条款",
    lastUpdated: "最后更新：2025年1月15日",
    backHome: "返回首页",
    sections: {
      acceptance: {
        title: "条款接受",
        content: "通过访问和使用Luckymobi Technology Limited（\"公司\"、\"我们\"、\"我们的\"或\"本公司\"）提供的服务，您同意受这些使用条款（\"条款\"）的约束。如果您不同意这些条款，请不要使用我们的服务。"
      },
      services: {
        title: "我们的服务",
        content: "我们提供AI驱动的工具和平台，包括：",
        items: [
          "Sybau Picture：AI创意图像生成和编辑工具",
          "AI互动游戏：沉浸式娱乐体验",
          "AI电商解决方案：业务自动化和扩展工具",
          "相关API、软件和咨询服务"
        ]
      },
      userAccounts: {
        title: "用户账户",
        content: "要访问某些功能，您可能需要创建账户。您负责：",
        responsibilities: [
          "维护您账户凭据的机密性",
          "在您账户下发生的所有活动",
          "提供准确和最新的信息",
          "立即通知我们任何未经授权的使用"
        ]
      },
      acceptableUse: {
        title: "可接受使用政策",
        content: "您同意不使用我们的服务来：",
        prohibited: [
          "违反任何适用的法律或法规",
          "侵犯知识产权",
          "生成有害、非法或冒犯性内容",
          "尝试逆向工程或破解我们的系统",
          "上传恶意代码或病毒",
          "垃圾邮件或骚扰其他用户",
          "未经授权将我们的服务用于商业目的"
        ]
      },
      intellectualProperty: {
        title: "知识产权",
        content: "我们的服务和底层技术受知识产权法保护。我们保留对我们的AI模型、算法和专有技术的所有权利。您使用我们工具创建的内容可能受某些许可条款约束。"
      },
      contentPolicy: {
        title: "内容和数据",
        userContent: {
          title: "用户生成内容",
          content: "您保留对您创建内容的所有权，但授予我们处理、存储和改进我们服务的许可。我们可能使用聚合的匿名数据来增强我们的AI模型。"
        },
        prohibited: {
          title: "禁止内容",
          content: "您不得创建或分发非法、有害、诽谤或违反第三方权利的内容。"
        }
      },
      privacy: {
        title: "隐私和数据保护",
        content: "您的隐私对我们很重要。请查看我们的隐私政策，了解我们如何收集、使用和保护您的信息。我们遵守适用的数据保护法规，包括适用的GDPR。"
      },
      disclaimers: {
        title: "免责声明和限制",
        content: "我们的服务按\"现状\"提供，不提供保证。我们拒绝所有明示或暗示的保证，包括：",
        items: [
          "适销性和特定用途适用性",
          "AI生成内容的准确性或可靠性",
          "不中断或无错误的服务",
          "数据传输的安全性"
        ]
      },
      liability: {
        title: "责任限制",
        content: "在法律允许的最大范围内，我们的责任限于您在提出索赔前12个月内为我们服务支付的金额。我们不对间接、偶然或后果性损害承担责任。"
      },
      termination: {
        title: "终止",
        content: "我们可能随时因违反这些条款或任何其他原因终止或暂停您对我们服务的访问。您可以随时通过联系我们来终止您的账户。"
      },
      changes: {
        title: "条款变更",
        content: "我们保留随时修改这些条款的权利。我们将通知用户重大变更。继续使用我们的服务即表示接受修改后的条款。"
      },
      governing: {
        title: "适用法律",
        content: "这些条款受香港法律管辖。任何争议将在香港法院解决。"
      },
      contact: {
        title: "联系信息",
        content: "有关这些条款的问题，请联系我们：",
        email: "legal@luckymobi.org",
        address: "香港九龍觀塘兴业街19-21号明生工业大厦5字楼511室"
      }
    }
  }
}

export default function TermsOfService() {
  const [language, setLanguage] = useState<"en" | "zh">("en")
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LuckyMobi</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href={language === "en" ? "/en" : "/zh"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === "en" ? "Home" : "首页"}
              </Link>
              <Link href={language === "en" ? "/en/about" : "/zh/about"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === "en" ? "About Us" : "关于我们"}
              </Link>
              <Link href={language === "en" ? "/en/products" : "/zh/products"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === "en" ? "Products & Services" : "产品与服务"}
              </Link>
              <Link href={language === "en" ? "/en/news" : "/zh/news"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === "en" ? "News Center" : "新闻中心"}
              </Link>
              <Link href={language === "en" ? "/en/contact" : "/zh/contact"} className="text-gray-700 hover:text-blue-600 transition-colors">
                {language === "en" ? "Contact Us" : "联系我们"}
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="hidden md:flex items-center space-x-1 bg-transparent"
              >
                <Globe className="w-4 h-4" />
                <span>{language === "en" ? "中文" : "English"}</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t.title}</h1>
            </div>
            <p className="text-xl text-gray-600 mb-2">{t.subtitle}</p>
            <Badge variant="secondary" className="text-sm">
              {t.lastUpdated}
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.acceptance.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{t.sections.acceptance.content}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.services.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{t.sections.services.content}</p>
                <ul className="space-y-2">
                  {t.sections.services.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* User Accounts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.userAccounts.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{t.sections.userAccounts.content}</p>
                <ul className="space-y-2">
                  {t.sections.userAccounts.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Acceptable Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.acceptableUse.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{t.sections.acceptableUse.content}</p>
                <ul className="space-y-2">
                  {t.sections.acceptableUse.prohibited.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.intellectualProperty.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{t.sections.intellectualProperty.content}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Content Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.contentPolicy.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t.sections.contentPolicy.userContent.title}</h3>
                  <p className="text-gray-700">{t.sections.contentPolicy.userContent.content}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t.sections.contentPolicy.prohibited.title}</h3>
                  <p className="text-gray-700">{t.sections.contentPolicy.prohibited.content}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  {t.sections.contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{t.sections.contact.content}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-700">{t.sections.contact.email}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 mr-2 mt-0.5 text-gray-500">📍</div>
                    <span className="text-gray-700">{t.sections.contact.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">LuckyMobi</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                {language === "en" 
                  ? "AI-driven innovation connecting infinite possibilities. Empowering smart living and building digital future."
                  : "AI驱动创新，连接无限可能。赋能智能生活，构筑数字未来。"}
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
              <h4 className="font-semibold mb-4">{language === "en" ? "Products" : "产品"}</h4>
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
              <h4 className="font-semibold mb-4">{language === "en" ? "Company" : "公司"}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href={language === "en" ? "/en/about" : "/zh/about"} className="hover:text-white transition-colors">
                    {language === "en" ? "About Us" : "关于我们"}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/news" : "/zh/news"} className="hover:text-white transition-colors">
                    {language === "en" ? "News" : "新闻"}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/contact" : "/zh/contact"} className="hover:text-white transition-colors">
                    {language === "en" ? "Contact" : "联系我们"}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/privacy" : "/zh/privacy"} className="hover:text-white transition-colors">
                    {language === "en" ? "Privacy Policy" : "隐私政策"}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/terms" : "/zh/terms"} className="hover:text-white transition-colors">
                    {language === "en" ? "Terms of Service" : "使用条款"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {language === "en" 
                ? "© 2025 Luckymobi Technology Limited. All Rights Reserved."
                : "© 2025 Luckymobi Technology Limited. 版权所有。"}
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