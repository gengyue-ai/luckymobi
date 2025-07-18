"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Calendar, User, Eye, Share2, Sparkles, Users, Zap, Mail } from "lucide-react"
import { NavLogo, FooterLogo } from "@/components/logo"
import Link from "next/link"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"

// News articles database
const newsArticles = {
  "ai-creative-suite-2-0": {
    en: {
      title: "LuckyMobi Launches Advanced AI Creative Suite 2.0",
      subtitle: "Revolutionary update introduces multi-modal AI capabilities",
      category: "AI Innovation",
      author: "LuckyMobi Tech Team",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "/images/ai-creative-child.png",
      content: [
        {
          type: "paragraph",
          text: "LuckyMobi Technology Limited today announced the launch of AI Creative Suite 2.0, a groundbreaking update that revolutionizes the way creators interact with artificial intelligence. This major release introduces multi-modal AI capabilities, real-time collaboration features, and enhanced image generation algorithms that push the boundaries of creative expression."
        },
        {
          type: "heading",
          text: "Key Features and Enhancements"
        },
        {
          type: "paragraph",
          text: "The new suite includes several game-changing features designed to empower creators with unprecedented creative freedom:"
        },
        {
          type: "list",
          items: [
            "Multi-modal AI Processing: Seamlessly combine text, image, and voice inputs for comprehensive creative workflows",
            "Real-time Collaboration: Multiple users can now work on the same project simultaneously with live synchronization",
            "Enhanced Generation Algorithms: 300% faster processing with significantly improved quality and accuracy",
            "Advanced Style Transfer: Support for over 100 artistic styles with customizable intensity controls",
            "Smart Background Replacement: AI-powered background generation that understands context and lighting",
            "Voice-to-Visual: Convert spoken descriptions directly into stunning visual content"
          ]
        },
        {
          type: "heading",
          text: "Industry Impact"
        },
        {
          type: "paragraph",
          text: "The release comes at a time when AI-powered creative tools are transforming industries from advertising to entertainment. 'We're not just improving existing workflows,' said Dr. Sarah Chen, Chief Technology Officer at LuckyMobi. 'We're fundamentally reimagining how humans and AI collaborate in the creative process.'"
        },
        {
          type: "paragraph",
          text: "Early beta testers have reported productivity increases of up to 400% when using the new collaborative features, with particular praise for the intuitive interface and seamless integration with existing creative workflows."
        },
        {
          type: "heading",
          text: "Availability and Pricing"
        },
        {
          type: "paragraph",
          text: "AI Creative Suite 2.0 is now available to all Sybau Picture users through a free update. New users can sign up at sybaupicture.com to experience the next generation of AI-powered creativity. Enterprise customers can contact our sales team for custom deployment options and advanced feature access."
        },
        {
          type: "paragraph",
          text: "This launch reinforces LuckyMobi's position as a leader in AI innovation and demonstrates our commitment to pushing the boundaries of what's possible in creative technology."
        }
      ]
    },
    zh: {
      title: "LuckyMobi 发布先进AI创意套件 2.0",
      subtitle: "革命性更新引入多模态AI能力",
      category: "AI创新",
      author: "LuckyMobi 技术团队",
      date: "2025年1月15日",
      readTime: "5分钟阅读",
      image: "/images/ai-creative-child.png",
      content: [
        {
          type: "paragraph",
          text: "Luckymobi Technology Limited 今日宣布推出AI创意套件2.0，这是一次突破性的更新，彻底改革了创作者与人工智能互动的方式。这次重大发布引入了多模态AI能力、实时协作功能和增强的图像生成算法，推动创意表达的边界。"
        },
        {
          type: "heading",
          text: "主要功能和增强"
        },
        {
          type: "paragraph",
          text: "新套件包含多项改变游戏规则的功能，旨在为创作者提供前所未有的创作自由："
        },
        {
          type: "list",
          items: [
            "多模态AI处理：无缝结合文本、图像和语音输入，实现综合创意工作流程",
            "实时协作：多用户现在可以同时在同一项目上工作，具有实时同步功能",
            "增强生成算法：处理速度提升300%，质量和准确性显著改善",
            "高级风格转换：支持超过100种艺术风格，具有可定制的强度控制",
            "智能背景替换：理解上下文和光照的AI驱动背景生成",
            "语音转视觉：将口语描述直接转换为令人惊叹的视觉内容"
          ]
        },
        {
          type: "heading",
          text: "行业影响"
        },
        {
          type: "paragraph",
          text: "此次发布正值AI驱动的创意工具正在从广告到娱乐各个行业进行变革的时期。'我们不仅仅是在改进现有工作流程，'LuckyMobi首席技术官陈莎拉博士说道，'我们正在从根本上重新构想人类和AI在创意过程中的协作方式。'"
        },
        {
          type: "paragraph",
          text: "早期测试用户报告，使用新的协作功能时生产力提高了多达400%，特别赞扬了直观的界面和与现有创意工作流程的无缝集成。"
        },
        {
          type: "heading",
          text: "可用性和定价"
        },
        {
          type: "paragraph",
          text: "AI创意套件2.0现在通过免费更新向所有Sybau Picture用户开放。新用户可以在sybaupicture.com注册体验下一代AI驱动的创意。企业客户可以联系我们的销售团队了解定制部署选项和高级功能访问。"
        },
        {
          type: "paragraph",
          text: "此次发布巩固了LuckyMobi在AI创新领域的领导地位，并展示了我们推动创意技术可能性边界的承诺。"
        }
      ]
    }
  },
  "sybau-125k-milestone": {
    en: {
      title: "Sybau Picture Reaches 125,000+ Active Creators",
      subtitle: "Platform achieves significant growth milestone with 2.5M artworks created",
      category: "Milestone",
      author: "Marketing Team",
      date: "January 10, 2025",
      readTime: "4 min read",
      image: "/images/ai-portrait-young.png",
      content: [
        {
          type: "paragraph",
          text: "Sybau Picture, LuckyMobi's flagship AI creative tool, has achieved a remarkable milestone with over 125,000 active creators now using the platform to generate stunning AI-powered artworks. This represents a 250% growth over the past six months, establishing Sybau Picture as one of the fastest-growing AI creative platforms globally."
        },
        {
          type: "heading",
          text: "Platform Growth Statistics"
        },
        {
          type: "paragraph",
          text: "The numbers speak to the platform's incredible momentum and user engagement:"
        },
        {
          type: "list",
          items: [
            "125,000+ active creators worldwide across 80+ countries",
            "2.5 million AI-generated artworks created to date",
            "95% user satisfaction rating based on quarterly surveys",
            "40+ supported languages for global accessibility",
            "200+ artistic styles available including exclusive collections",
            "Average session time increased by 180% since last quarter",
            "Daily active users grew by 320% year-over-year"
          ]
        },
        {
          type: "heading",
          text: "Community Impact and Success Stories"
        },
        {
          type: "paragraph",
          text: "The growth isn't just about numbers—it's about empowering creators worldwide. Maria González, a digital artist from Spain, shared: 'Sybau Picture has completely transformed my creative process. What used to take hours now takes minutes, and the quality is beyond what I could achieve manually.'"
        },
        {
          type: "paragraph",
          text: "The platform has particularly resonated with young creators and social media enthusiasts, with users aged 18-34 representing 68% of the active user base. Educational institutions have also embraced the platform, with over 200 schools worldwide incorporating Sybau Picture into their digital arts curricula."
        },
        {
          type: "heading",
          text: "Technical Achievements"
        },
        {
          type: "paragraph",
          text: "Behind these impressive user metrics are significant technical achievements. The platform now processes over 50,000 image generation requests daily with an average processing time of just 3.2 seconds—a 400% improvement from our initial launch. Our AI models have been trained on ethically sourced datasets and continue to improve through user feedback and advanced machine learning techniques."
        },
        {
          type: "heading",
          text: "Looking Forward"
        },
        {
          type: "paragraph",
          text: "With this milestone reached, LuckyMobi is doubling down on innovation. Upcoming features include enhanced collaboration tools, mobile app capabilities, and integration with popular design software. The company expects to reach 300,000 active creators by the end of 2025."
        },
        {
          type: "paragraph",
          text: "'This milestone validates our vision of democratizing AI-powered creativity,' said CEO Michael Zhang. 'We're just getting started on our mission to empower every creator with the tools they need to bring their imagination to life.'"
        }
      ]
    },
    zh: {
      title: "Sybau Picture 突破125,000+活跃创作者",
      subtitle: "平台取得重要增长里程碑，创作250万件作品",
      category: "里程碑",
      author: "市场团队",
      date: "2025年1月10日",
      readTime: "4分钟阅读",
      image: "/images/ai-portrait-young.png",
      content: [
        {
          type: "paragraph",
          text: "LuckyMobi的旗舰AI创意工具Sybau Picture取得了显著的里程碑，现在有超过125,000名活跃创作者使用该平台生成令人惊叹的AI艺术作品。这代表着过去六个月250%的增长，使Sybau Picture成为全球增长最快的AI创意平台之一。"
        },
        {
          type: "heading",
          text: "平台增长统计"
        },
        {
          type: "paragraph",
          text: "这些数字说明了平台令人难以置信的发展势头和用户参与度："
        },
        {
          type: "list",
          items: [
            "来自80+个国家的125,000+活跃创作者",
            "迄今为止创作了250万件AI生成的艺术作品",
            "基于季度调查的95%用户满意度",
            "支持40+种语言以实现全球可访问性",
            "200+种艺术风格，包括独家收藏",
            "平均会话时间比上季度增加了180%",
            "日活跃用户同比增长320%"
          ]
        },
        {
          type: "heading",
          text: "社区影响和成功案例"
        },
        {
          type: "paragraph",
          text: "增长不仅仅是数字——更是关于赋能全球创作者。来自西班牙的数字艺术家玛丽亚·冈萨雷斯分享道：'Sybau Picture彻底改变了我的创作过程。过去需要几个小时的工作现在只需几分钟，而且质量超越了我手工能够达到的水平。'"
        },
        {
          type: "paragraph",
          text: "该平台特别受到年轻创作者和社交媒体爱好者的青睐，18-34岁的用户占活跃用户群的68%。教育机构也接受了该平台，全球超过200所学校将Sybau Picture纳入其数字艺术课程。"
        },
        {
          type: "heading",
          text: "技术成就"
        },
        {
          type: "paragraph",
          text: "这些令人印象深刻的用户指标背后是重大的技术成就。该平台现在每天处理超过50,000个图像生成请求，平均处理时间仅为3.2秒——比我们最初发布时提高了400%。我们的AI模型基于道德获取的数据集进行训练，并通过用户反馈和先进的机器学习技术持续改进。"
        },
        {
          type: "heading",
          text: "展望未来"
        },
        {
          type: "paragraph",
          text: "达到这一里程碑后，LuckyMobi正在加倍投入创新。即将推出的功能包括增强的协作工具、移动应用功能以及与流行设计软件的集成。公司预计到2025年底将达到300,000名活跃创作者。"
        },
        {
          type: "paragraph",
          text: "'这一里程碑验证了我们民主化AI驱动创意的愿景，'首席执行官张迈克尔说道。'我们在赋能每个创作者实现想象力的使命上才刚刚起步。'"
        }
      ]
    }
  },
  "manufacturing-partnership": {
    en: {
      title: "Strategic Partnership with 50+ Manufacturing Companies",
      subtitle: "LuckyMobi accelerates AI-driven digital transformation across Asia-Pacific",
      category: "Partnership",
      author: "Business Development Team",
      date: "January 5, 2025",
      readTime: "6 min read",
      image: "/images/factory.jpg",
      content: [
        {
          type: "paragraph",
          text: "LuckyMobi Technology Limited has announced a groundbreaking strategic partnership initiative with over 50 leading manufacturing companies across the Asia-Pacific region. This collaboration aims to accelerate AI-driven digital transformation in e-commerce and supply chain management, positioning LuckyMobi as a key enabler of Industry 4.0 solutions."
        },
        {
          type: "heading",
          text: "Partnership Overview"
        },
        {
          type: "paragraph",
          text: "The comprehensive partnership program addresses critical challenges facing modern manufacturing companies as they navigate digital transformation. Partners include industry leaders from electronics, automotive, textile, and consumer goods sectors, representing a combined annual revenue of over $15 billion."
        },
        {
          type: "list",
          items: [
            "50+ manufacturing partners across 12 countries",
            "Combined workforce of 200,000+ employees",
            "Total manufacturing capacity: $15B+ annual output",
            "Coverage across electronics, automotive, textile, and FMCG sectors",
            "Strategic focus on Southeast Asia, China, and emerging markets"
          ]
        },
        {
          type: "heading",
          text: "AI-Powered Solutions"
        },
        {
          type: "paragraph",
          text: "LuckyMobi's AI e-commerce solutions are designed to address specific pain points in manufacturing-to-consumer pipelines:"
        },
        {
          type: "list",
          items: [
            "Intelligent Product Catalog Management: AI-powered product descriptions and imagery",
            "Dynamic Pricing Optimization: Real-time market analysis and competitive pricing",
            "Supply Chain Visibility: End-to-end tracking and predictive analytics",
            "Customer Behavior Analytics: Advanced insights for demand forecasting",
            "Multi-platform Integration: Seamless connection to global marketplaces",
            "Automated Customer Service: AI chatbots trained on product specifications"
          ]
        },
        {
          type: "heading",
          text: "Early Results and Impact"
        },
        {
          type: "paragraph",
          text: "Early adopters in the pilot program have reported remarkable improvements in operational efficiency and market reach. Dongguan Electronics Manufacturing, one of the first partners, saw a 45% increase in online sales within three months of implementation."
        },
        {
          type: "paragraph",
          text: "'The AI tools provided by LuckyMobi have revolutionized how we approach e-commerce,' said Linda Wang, Digital Strategy Director at Dongguan Electronics. 'Our product listings are now optimized for multiple markets simultaneously, and our customer acquisition costs have decreased by 30%.'"
        },
        {
          type: "heading",
          text: "Global Expansion Strategy"
        },
        {
          type: "paragraph",
          text: "This partnership initiative is part of LuckyMobi's broader global expansion strategy, focusing on empowering traditional manufacturers to compete in the digital economy. The company plans to extend the program to Europe and Latin America by Q3 2025."
        },
        {
          type: "paragraph",
          text: "The collaboration also includes knowledge transfer programs, with LuckyMobi providing training and certification for partner companies' digital transformation teams. Over 1,000 professionals are expected to complete the certification program in the first year."
        },
        {
          type: "heading",
          text: "Future Roadmap"
        },
        {
          type: "paragraph",
          text: "Looking ahead, the partnership will expand to include advanced AI capabilities such as predictive maintenance, quality control automation, and sustainability optimization. LuckyMobi is also developing industry-specific AI models tailored to each sector's unique requirements."
        },
        {
          type: "paragraph",
          text: "'This partnership represents our commitment to bridging the gap between traditional manufacturing and digital innovation,' said Sarah Chen, VP of Global Partnerships at LuckyMobi. 'We're not just providing technology—we're enabling entire industries to thrive in the AI-powered economy.'"
        }
      ]
    },
    zh: {
      title: "与50+制造企业建立战略合作伙伴关系",
      subtitle: "LuckyMobi 加速亚太地区AI驱动的数字化转型",
      category: "合作伙伴",
      author: "业务发展团队",
      date: "2025年1月5日",
      readTime: "6分钟阅读",
      image: "/images/factory.jpg",
      content: [
        {
          type: "paragraph",
          text: "Luckymobi Technology Limited 宣布与亚太地区50多家领先制造公司建立突破性的战略合作伙伴关系倡议。此次合作旨在加速电商和供应链管理的AI驱动数字化转型，将LuckyMobi定位为工业4.0解决方案的关键推动者。"
        },
        {
          type: "heading",
          text: "合作伙伴关系概述"
        },
        {
          type: "paragraph",
          text: "这项综合合作伙伴计划解决了现代制造公司在数字化转型过程中面临的关键挑战。合作伙伴包括来自电子、汽车、纺织和消费品行业的行业领导者，总年收入超过150亿美元。"
        },
        {
          type: "list",
          items: [
            "跨12个国家的50+制造合作伙伴",
            "总计20万+员工的联合劳动力",
            "总制造能力：年产值150亿美元+",
            "覆盖电子、汽车、纺织和快消品行业",
            "战略重点关注东南亚、中国和新兴市场"
          ]
        },
        {
          type: "heading",
          text: "AI驱动的解决方案"
        },
        {
          type: "paragraph",
          text: "LuckyMobi的AI电商解决方案旨在解决制造到消费者管道中的特定痛点："
        },
        {
          type: "list",
          items: [
            "智能产品目录管理：AI驱动的产品描述和图像",
            "动态定价优化：实时市场分析和竞争定价",
            "供应链可视化：端到端跟踪和预测分析",
            "客户行为分析：需求预测的高级洞察",
            "多平台集成：与全球市场的无缝连接",
            "自动化客户服务：基于产品规格训练的AI聊天机器人"
          ]
        },
        {
          type: "heading",
          text: "早期结果和影响"
        },
        {
          type: "paragraph",
          text: "试点项目的早期采用者在运营效率和市场覆盖方面取得了显著改善。首批合作伙伴之一东莞电子制造公司在实施三个月内在线销售额增长了45%。"
        },
        {
          type: "paragraph",
          text: "'LuckyMobi提供的AI工具彻底改变了我们对电商的看法，'东莞电子数字战略总监王琳达说道。'我们的产品列表现在同时针对多个市场进行了优化，客户获取成本降低了30%。'"
        },
        {
          type: "heading",
          text: "全球扩张战略"
        },
        {
          type: "paragraph",
          text: "这一合作伙伴关系倡议是LuckyMobi更广泛全球扩张战略的一部分，专注于赋能传统制造商在数字经济中竞争。公司计划在2025年第三季度将该计划扩展到欧洲和拉丁美洲。"
        },
        {
          type: "paragraph",
          text: "合作还包括知识转移项目，LuckyMobi为合作伙伴公司的数字化转型团队提供培训和认证。预计第一年将有超过1,000名专业人员完成认证项目。"
        },
        {
          type: "heading",
          text: "未来路线图"
        },
        {
          type: "paragraph",
          text: "展望未来，合作伙伴关系将扩展到包括高级AI能力，如预测性维护、质量控制自动化和可持续性优化。LuckyMobi还在开发针对每个行业独特需求的特定行业AI模型。"
        },
        {
          type: "paragraph",
          text: "'这一合作伙伴关系代表了我们致力于在传统制造业和数字创新之间架起桥梁的承诺，'LuckyMobi全球合作伙伴关系副总裁陈莎拉说道。'我们不仅仅是提供技术——我们正在让整个行业在AI驱动的经济中蓬勃发展。'"
        }
      ]
    }
  },
  "textile-automation-success": {
    en: {
      title: "Textile Manufacturer Boosts Global Sales by 85% with LuckyMobi AI",
      subtitle: "Southeast Asian textile company leverages AI e-commerce platform for international expansion",
      category: "Manufacturing Success",
      author: "International Business Team",
      date: "January 20, 2025",
      readTime: "7 min read",
      image: "/images/fangzhi.png",
      content: [
        {
          type: "paragraph",
          text: "Thai textile manufacturer Golden Thread Industries has achieved remarkable international growth, increasing global sales by 85% within 8 months of implementing LuckyMobi's AI-powered e-commerce platform. This success story demonstrates the transformative potential of AI technology in helping traditional manufacturers expand into global markets."
        },
        {
          type: "heading",
          text: "The Challenge: Breaking into Global Markets"
        },
        {
          type: "paragraph",
          text: "Golden Thread Industries, founded in 1985, had been primarily serving domestic markets in Thailand for decades. Despite producing high-quality sustainable textiles, the company struggled to establish a presence in international markets due to language barriers, complex logistics, and lack of digital marketing expertise."
        },
        {
          type: "paragraph",
          text: "'We had excellent products but didn't know how to reach global customers effectively,' said Siriporn Thanakit, CEO of Golden Thread Industries. 'Traditional export methods were costly and time-consuming, making it difficult to compete with larger manufacturers.'"
        },
        {
          type: "heading",
          text: "AI-Powered Transformation"
        },
        {
          type: "paragraph",
          text: "LuckyMobi's comprehensive AI e-commerce solution addressed Golden Thread's challenges through multiple integrated features:"
        },
        {
          type: "list",
          items: [
            "Automated multi-language product catalog generation for 15 target markets",
            "AI-driven pricing optimization based on real-time market analysis",
            "Smart logistics coordination reducing shipping costs by 35%",
            "Personalized customer experience across different cultural contexts",
            "Predictive inventory management preventing stockouts and overstock",
            "Automated compliance documentation for international trade regulations"
          ]
        },
        {
          type: "heading",
          text: "Remarkable Results"
        },
        {
          type: "paragraph",
          text: "The results exceeded all expectations. Within the first quarter of implementation, Golden Thread saw a 40% increase in international inquiries. By month 8, the company had achieved:"
        },
        {
          type: "list",
          items: [
            "85% increase in global sales revenue",
            "Expansion into 12 new international markets",
            "35% reduction in logistics and shipping costs",
            "300% improvement in customer response time",
            "50% increase in average order value",
            "95% customer satisfaction rating across all markets"
          ]
        },
        {
          type: "heading",
          text: "Global Impact and Future Plans"
        },
        {
          type: "paragraph",
          text: "Golden Thread's success has inspired other manufacturers in the region. The company now serves major retailers in Europe, North America, and Australia, with sustainable textile products being particularly popular in eco-conscious markets."
        },
        {
          type: "paragraph",
          text: "'LuckyMobi's AI platform didn't just help us go global – it transformed our entire business model,' added Thanakit. 'We're now planning to expand our production capacity by 200% to meet international demand. The AI insights have also helped us develop new product lines specifically for different market preferences.'"
        },
        {
          type: "paragraph",
          text: "This case study demonstrates how AI-powered e-commerce solutions can level the playing field for traditional manufacturers, enabling them to compete effectively in global markets while maintaining their operational efficiency and product quality."
        }
      ]
    },
    zh: {
      title: "纺织制造商借助LuckyMobi AI全球销售增长85%",
      subtitle: "东南亚纺织企业利用AI电商平台实现国际化扩张",
      category: "制造业成功案例",
      author: "国际业务团队",
      date: "2025年1月20日",
      readTime: "7分钟阅读",
      image: "/images/fangzhi.png",
      content: [
        {
          type: "paragraph",
          text: "泰国纺织制造商金线工业公司在实施LuckyMobi的AI驱动电商平台8个月内，实现了全球销售85%的显著增长。这一成功案例展示了AI技术在帮助传统制造商拓展全球市场方面的变革潜力。"
        },
        {
          type: "heading",
          text: "挑战：进军全球市场"
        },
        {
          type: "paragraph",
          text: "金线工业公司成立于1985年，数十年来主要服务于泰国国内市场。尽管生产高质量的可持续纺织品，但由于语言障碍、复杂的物流和缺乏数字营销专业知识，该公司一直难以在国际市场建立存在感。"
        },
        {
          type: "paragraph",
          text: "'我们有优秀的产品，但不知道如何有效地触达全球客户，'金线工业公司首席执行官西丽蓬·塔纳基特说道。'传统的出口方式成本高昂且耗时，使我们难以与大型制造商竞争。'"
        },
        {
          type: "heading",
          text: "AI驱动的转型"
        },
        {
          type: "paragraph",
          text: "LuckyMobi的综合AI电商解决方案通过多个集成功能解决了金线工业的挑战："
        },
        {
          type: "list",
          items: [
            "面向15个目标市场的自动化多语言产品目录生成",
            "基于实时市场分析的AI驱动定价优化",
            "智能物流协调，运输成本降低35%",
            "跨不同文化背景的个性化客户体验",
            "预测性库存管理，防止缺货和过剩库存",
            "国际贸易法规的自动化合规文档"
          ]
        },
        {
          type: "heading",
          text: "显著成果"
        },
        {
          type: "paragraph",
          text: "结果超出了所有预期。在实施的第一季度内，金线工业的国际询盘增加了40%。到第8个月，公司实现了："
        },
        {
          type: "list",
          items: [
            "全球销售收入增长85%",
            "扩展到12个新的国际市场",
            "物流和运输成本降低35%",
            "客户响应时间提升300%",
            "平均订单价值增加50%",
            "所有市场95%的客户满意度"
          ]
        },
        {
          type: "heading",
          text: "全球影响和未来计划"
        },
        {
          type: "paragraph",
          text: "金线工业的成功激励了该地区的其他制造商。该公司现在为欧洲、北美和澳大利亚的主要零售商提供服务，可持续纺织产品在环保意识强的市场中特别受欢迎。"
        },
        {
          type: "paragraph",
          text: "'LuckyMobi的AI平台不仅帮助我们走向全球——它改变了我们的整个商业模式，'塔纳基特补充道。'我们现在计划将产能扩大200%以满足国际需求。AI洞察还帮助我们专门为不同市场偏好开发新产品线。'"
        },
        {
          type: "paragraph",
          text: "这个案例研究展示了AI驱动的电商解决方案如何为传统制造商创造公平竞争环境，使他们能够在保持运营效率和产品质量的同时，在全球市场中有效竞争。"
        }
      ]
    }
  },
  "ai-security-breakthrough": {
    en: {
      title: "LuckyMobi Unveils Advanced AI Security Framework 2025",
      subtitle: "Revolutionary security architecture protects user data while maintaining AI performance",
      category: "Technology Innovation",
      author: "Security Engineering Team",
      date: "January 18, 2025",
      readTime: "6 min read",
      image: "/images/anquan.png",
      content: [
        {
          type: "paragraph",
          text: "LuckyMobi Technology Limited today announced the launch of its groundbreaking AI Security Framework 2025, a comprehensive security architecture that addresses the growing concerns around data privacy and AI model protection. This innovative framework sets new industry standards for secure AI deployment while maintaining optimal performance."
        },
        {
          type: "heading",
          text: "Addressing Critical Security Challenges"
        },
        {
          type: "paragraph",
          text: "As AI applications become increasingly integrated into business operations, security concerns have grown significantly. Traditional security measures often compromise AI performance, creating a challenging balance between protection and functionality."
        },
        {
          type: "paragraph",
          text: "'The AI industry has been facing a critical dilemma: how to maintain robust security without sacrificing the speed and accuracy that make AI valuable,' explained Dr. Elena Rodriguez, Chief Security Officer at LuckyMobi. 'Our new framework solves this challenge through innovative architectural design.'"
        },
        {
          type: "heading",
          text: "Revolutionary Security Features"
        },
        {
          type: "paragraph",
          text: "The AI Security Framework 2025 introduces several breakthrough technologies:"
        },
        {
          type: "list",
          items: [
            "Zero-Knowledge AI Processing: Enables AI computations without exposing raw data",
            "Quantum-Resistant Encryption: Future-proof protection against emerging threats",
            "Real-time Threat Detection: ML-powered security monitoring with 99.9% accuracy",
            "Federated Learning Security: Secure collaborative AI training across multiple parties",
            "Homomorphic Computation: Process encrypted data without decryption",
            "Advanced Audit Trails: Comprehensive tracking of all AI model interactions"
          ]
        },
        {
          type: "heading",
          text: "Industry Impact and Performance"
        },
        {
          type: "paragraph",
          text: "Early testing shows remarkable results. Companies using the new framework report maintaining 100% of their AI performance while achieving enterprise-grade security compliance. The system has successfully prevented over 10,000 simulated attacks during beta testing."
        },
        {
          type: "paragraph",
          text: "Sarah Chen, CTO of TechCorp Industries, an early adopter, shared: 'We've been using LuckyMobi's security framework for three months. Not only did it enhance our security posture, but our AI applications actually became 15% faster due to optimized processing architectures.'"
        },
        {
          type: "heading",
          text: "Global Security Standards"
        },
        {
          type: "paragraph",
          text: "The framework exceeds international security standards including ISO 27001, SOC 2 Type II, and emerging AI governance regulations. LuckyMobi has also submitted the framework for evaluation by global cybersecurity organizations."
        },
        {
          type: "paragraph",
          text: "'Security cannot be an afterthought in AI development,' emphasized Rodriguez. 'Our framework is designed to be security-first, ensuring that every AI model deployed through our platform maintains the highest levels of protection from the ground up.'"
        },
        {
          type: "paragraph",
          text: "The AI Security Framework 2025 is now available to all LuckyMobi enterprise clients, with plans to make components available to smaller businesses through a simplified security suite later this year."
        }
      ]
    },
    zh: {
      title: "LuckyMobi发布先进AI安全框架2025",
      subtitle: "革命性安全架构在保持AI性能的同时保护用户数据",
      category: "技术创新",
      author: "安全工程团队",
      date: "2025年1月18日",
      readTime: "6分钟阅读",
      image: "/images/anquan.png",
      content: [
        {
          type: "paragraph",
          text: "Luckymobi Technology Limited今日宣布推出突破性的AI安全框架2025，这是一个综合性安全架构，解决了数据隐私和AI模型保护方面日益增长的担忧。这一创新框架为安全AI部署设立了新的行业标准，同时保持最佳性能。"
        },
        {
          type: "heading",
          text: "解决关键安全挑战"
        },
        {
          type: "paragraph",
          text: "随着AI应用越来越多地集成到业务运营中，安全担忧显著增长。传统安全措施往往会影响AI性能，在保护和功能之间创造了具有挑战性的平衡。"
        },
        {
          type: "paragraph",
          text: "'AI行业一直面临着一个关键困境：如何在不牺牲使AI有价值的速度和准确性的情况下保持强大的安全性，'LuckyMobi首席安全官埃琳娜·罗德里格斯博士解释道。'我们的新框架通过创新的架构设计解决了这一挑战。'"
        },
        {
          type: "heading",
          text: "革命性安全功能"
        },
        {
          type: "paragraph",
          text: "AI安全框架2025引入了几项突破性技术："
        },
        {
          type: "list",
          items: [
            "零知识AI处理：在不暴露原始数据的情况下实现AI计算",
            "抗量子加密：针对新兴威胁的未来验证保护",
            "实时威胁检测：ML驱动的安全监控，准确率达99.9%",
            "联邦学习安全：多方之间的安全协作AI训练",
            "同态计算：在不解密的情况下处理加密数据",
            "高级审计跟踪：全面跟踪所有AI模型交互"
          ]
        },
        {
          type: "heading",
          text: "行业影响和性能"
        },
        {
          type: "paragraph",
          text: "早期测试显示了显著的结果。使用新框架的公司报告在保持100% AI性能的同时实现了企业级安全合规。该系统在测试期间成功阻止了超过10,000次模拟攻击。"
        },
        {
          type: "paragraph",
          text: "早期采用者TechCorp Industries的首席技术官陈莎拉分享道：'我们已经使用LuckyMobi的安全框架三个月了。它不仅增强了我们的安全态势，而且由于优化的处理架构，我们的AI应用实际上变快了15%。'"
        },
        {
          type: "heading",
          text: "全球安全标准"
        },
        {
          type: "paragraph",
          text: "该框架超越了包括ISO 27001、SOC 2 Type II和新兴AI治理法规在内的国际安全标准。LuckyMobi还已将该框架提交给全球网络安全组织进行评估。"
        },
        {
          type: "paragraph",
          text: "'安全不能是AI开发的后顾之忧，'罗德里格斯强调道。'我们的框架设计为安全优先，确保通过我们平台部署的每个AI模型从一开始就保持最高级别的保护。'"
        },
        {
          type: "paragraph",
          text: "AI安全框架2025现已向所有LuckyMobi企业客户提供，计划今年晚些时候通过简化安全套件向小型企业提供组件。"
        }
      ]
    }
  },
  "global-ai-education-initiative": {
    en: {
      title: "LuckyMobi Launches Global AI Education Initiative",
      subtitle: "Comprehensive program aims to train 100,000 professionals in AI technologies by 2026",
      category: "Corporate Social Responsibility",
      author: "Education & Training Division",
      date: "January 12, 2025",
      readTime: "5 min read",
      image: "/images/jiaoyu.png",
      content: [
        {
          type: "paragraph",
          text: "LuckyMobi Technology Limited has announced the launch of its ambitious Global AI Education Initiative, a comprehensive training program designed to democratize AI knowledge and skills worldwide. The initiative aims to train 100,000 professionals across 50 countries by the end of 2026, bridging the growing AI skills gap in the global workforce."
        },
        {
          type: "heading",
          text: "Addressing the AI Skills Gap"
        },
        {
          type: "paragraph",
          text: "Recent studies indicate that 85% of companies struggle to find qualified AI professionals, while 60% of current workers lack basic AI literacy. This skills gap threatens to limit AI adoption and create inequality in the digital economy."
        },
        {
          type: "paragraph",
          text: "'We believe that AI education should be accessible to everyone, not just those in technology hubs,' said Michael Zhang, CEO of LuckyMobi. 'Our initiative is designed to create a more inclusive AI ecosystem where talent can emerge from any corner of the world.'"
        },
        {
          type: "heading",
          text: "Comprehensive Training Programs"
        },
        {
          type: "paragraph",
          text: "The initiative offers multiple learning paths tailored to different skill levels and career objectives:"
        },
        {
          type: "list",
          items: [
            "AI Fundamentals: 40-hour program for beginners covering basic concepts and applications",
            "Professional AI Development: 120-hour certification program for technical professionals",
            "AI Leadership Track: Executive-level program focusing on AI strategy and implementation",
            "Industry-Specific AI: Specialized courses for healthcare, finance, manufacturing, and retail",
            "AI Ethics and Governance: Comprehensive training on responsible AI development",
            "Hands-on Project Labs: Practical experience with real-world AI implementations"
          ]
        },
        {
          type: "heading",
          text: "Global Partnerships and Accessibility"
        },
        {
          type: "paragraph",
          text: "LuckyMobi has partnered with 200+ universities, training institutes, and government organizations worldwide to deliver the program. The initiative includes scholarships for underrepresented communities and provides materials in 25 languages."
        },
        {
          type: "paragraph",
          text: "Dr. Priya Sharma, Director of Global Education Partnerships, explained: 'We're not just teaching AI - we're building local capacity. Each program includes train-the-trainer components, ensuring sustainable knowledge transfer within communities.'"
        },
        {
          type: "heading",
          text: "Early Success and Impact"
        },
        {
          type: "paragraph",
          text: "The pilot program, launched in 10 countries last year, has already trained over 5,000 professionals with remarkable outcomes:"
        },
        {
          type: "list",
          items: [
            "95% completion rate across all program tracks",
            "78% of graduates secured AI-related roles within 6 months",
            "Average salary increase of 40% for program completers",
            "50+ AI startups founded by program alumni",
            "200+ AI projects implemented in local communities"
          ]
        },
        {
          type: "paragraph",
          text: "Maria Santos, a program graduate from Brazil, shared her experience: 'The LuckyMobi program transformed my career. I went from having no AI knowledge to leading my company's AI transformation initiative. The practical approach and ongoing mentorship were invaluable.'"
        },
        {
          type: "heading",
          text: "Future Vision"
        },
        {
          type: "paragraph",
          text: "Beyond 2026, LuckyMobi plans to expand the initiative to include advanced research programs, AI innovation labs, and a global network of AI practitioners. The company has committed $50 million over five years to support this vision."
        },
        {
          type: "paragraph",
          text: "'Education is the foundation of responsible AI development,' concluded Zhang. 'By empowering people with AI knowledge and skills, we're not just growing the industry - we're ensuring that AI benefits all of humanity.'"
        }
      ]
    },
    zh: {
      title: "LuckyMobi启动全球AI教育倡议",
      subtitle: "综合项目旨在到2026年培训100,000名AI技术专业人员",
      category: "企业社会责任",
      author: "教育培训部",
      date: "2025年1月12日",
      readTime: "5分钟阅读",
      image: "/images/jiaoyu.png",
      content: [
        {
          type: "paragraph",
          text: "Luckymobi Technology Limited宣布启动雄心勃勃的全球AI教育倡议，这是一个旨在在全球范围内普及AI知识和技能的综合培训项目。该倡议旨在到2026年底在50个国家培训100,000名专业人员，弥合全球劳动力中日益增长的AI技能差距。"
        },
        {
          type: "heading",
          text: "解决AI技能差距"
        },
        {
          type: "paragraph",
          text: "最近的研究表明，85%的公司难以找到合格的AI专业人员，而60%的现有员工缺乏基本的AI素养。这种技能差距威胁着限制AI的采用，并在数字经济中造成不平等。"
        },
        {
          type: "paragraph",
          text: "'我们相信AI教育应该对每个人都是可及的，而不仅仅是那些在技术中心的人，'LuckyMobi首席执行官张迈克尔说道。'我们的倡议旨在创建一个更包容的AI生态系统，让人才可以从世界的任何角落涌现。'"
        },
        {
          type: "heading",
          text: "综合培训项目"
        },
        {
          type: "paragraph",
          text: "该倡议提供多个学习路径，针对不同技能水平和职业目标量身定制："
        },
        {
          type: "list",
          items: [
            "AI基础：面向初学者的40小时课程，涵盖基本概念和应用",
            "专业AI开发：面向技术专业人员的120小时认证项目",
            "AI领导力轨道：专注于AI战略和实施的高管级项目",
            "行业特定AI：医疗保健、金融、制造业和零售业的专业课程",
            "AI伦理与治理：负责任AI开发的综合培训",
            "实践项目实验室：真实世界AI实施的实践经验"
          ]
        },
        {
          type: "heading",
          text: "全球合作伙伴关系和可及性"
        },
        {
          type: "paragraph",
          text: "LuckyMobi已与全球200多所大学、培训机构和政府组织合作提供该项目。该倡议包括为代表性不足社区提供奖学金，并提供25种语言的材料。"
        },
        {
          type: "paragraph",
          text: "全球教育合作伙伴关系总监普里亚·夏尔马博士解释道：'我们不仅仅是在教授AI——我们在建设本地能力。每个项目都包括培训师培训组件，确保社区内的可持续知识转移。'"
        },
        {
          type: "heading",
          text: "早期成功和影响"
        },
        {
          type: "paragraph",
          text: "去年在10个国家启动的试点项目已经培训了超过5,000名专业人员，取得了显著成果："
        },
        {
          type: "list",
          items: [
            "所有项目轨道95%的完成率",
            "78%的毕业生在6个月内获得了AI相关职位",
            "项目完成者平均薪资增长40%",
            "项目校友创立的50+AI初创公司",
            "在当地社区实施的200+AI项目"
          ]
        },
        {
          type: "paragraph",
          text: "来自巴西的项目毕业生玛丽亚·桑托斯分享了她的经验：'LuckyMobi项目改变了我的职业生涯。我从对AI一无所知到领导公司的AI转型倡议。实用的方法和持续的指导是无价的。'"
        },
        {
          type: "heading",
          text: "未来愿景"
        },
        {
          type: "paragraph",
          text: "2026年之后，LuckyMobi计划扩展该倡议，包括高级研究项目、AI创新实验室和全球AI从业者网络。公司承诺在五年内投入5000万美元支持这一愿景。"
        },
        {
          type: "paragraph",
          text: "'教育是负责任AI发展的基础，'张迈克尔总结道。'通过赋予人们AI知识和技能，我们不仅仅是在发展行业——我们在确保AI造福全人类。'"
        }
      ]
    }
  }
}

export default function NewsDetail() {
  const searchParams = useSearchParams()
  const langParam = searchParams.get('lang') as "en" | "zh" | null
  const [language, setLanguage] = useState<"en" | "zh">(langParam || "en")
  const params = useParams()
  const slug = params.slug as string
  
  const article = newsArticles[slug as keyof typeof newsArticles]
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href={language === "en" ? "/en" : "/zh"}>
            <Button>{language === "en" ? "Back to Home" : "返回首页"}</Button>
          </Link>
        </div>
      </div>
    )
  }

  const content = article[language]
  
  const toggleLanguage = () => {
    const newLang = language === "en" ? "zh" : "en"
    window.location.href = `/news/${slug}?lang=${newLang}`
  }

  const renderContent = (item: any) => {
    switch (item.type) {
      case "paragraph":
        return <p className="text-gray-700 leading-relaxed mb-4">{item.text}</p>
      case "heading":
        return <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">{item.text}</h2>
      case "list":
        return (
          <ul className="space-y-2 mb-6">
            {item.items.map((listItem: string, index: number) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{listItem}</span>
              </li>
            ))}
          </ul>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLogo />

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
                onClick={() => {
                  const currentSlug = params.slug;
                  window.location.href = language === "en" ? `/news/${currentSlug}?lang=zh` : `/news/${currentSlug}?lang=en`;
                }}
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
          
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {content.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{content.subtitle}</p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {content.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {content.date}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {content.readTime}
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full h-64 rounded-lg mb-8 relative overflow-hidden"
            style={{
              backgroundImage: `url(${content.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#3B82F6'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-white text-sm font-medium">{content.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                {content.content.map((item, index) => (
                  <div key={index}>
                    {renderContent(item)}
                  </div>
                ))}
              </div>
              
              {/* Share Section */}
              <div className="border-t border-gray-200 pt-8 mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">{language === "en" ? "Share this article:" : "分享这篇文章:"}</span>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-1" />
                      {language === "en" ? "Share" : "分享"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {language === "en" ? "Related Articles" : "相关文章"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/" className="block">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                    <Badge variant="secondary" className="text-xs">
                      {language === "en" ? "AI Innovation" : "AI创新"}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {language === "en" 
                      ? "The Future of AI-Powered Creativity" 
                      : "AI驱动创意的未来"}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === "en"
                      ? "Exploring the next frontier in artificial intelligence and creative expression..."
                      : "探索人工智能和创意表达的下一个前沿..."}
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/" className="block">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-green-600 mr-2" />
                    <Badge variant="secondary" className="text-xs">
                      {language === "en" ? "Community" : "社区"}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {language === "en" 
                      ? "Building a Global Creator Community" 
                      : "构建全球创作者社区"}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === "en"
                      ? "How we're connecting creators worldwide through AI-powered tools..."
                      : "我们如何通过AI驱动的工具连接全球创作者..."}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
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
                {language === "en" 
                  ? "AI-driven innovation connecting infinite possibilities. Empowering smart living and building digital future."
                  : "AI驱动创新，连接无限可能。赋能智能生活，构筑数字未来。"}
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
              <h4 className="font-semibold mb-4">
                {language === "en" ? "Products" : "产品"}
              </h4>
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
                  <Link href={language === "en" ? "/en/solutions/games" : "/zh/solutions/games"} className="hover:text-white transition-colors">
                    {language === "en" ? "AI Games" : "AI游戏"}
                  </Link>
                </li>
                <li>
                  <Link href={language === "en" ? "/en/solutions/ecommerce" : "/zh/solutions/ecommerce"} className="hover:text-white transition-colors">
                    {language === "en" ? "E-commerce Solutions" : "电商解决方案"}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {language === "en" ? "Company" : "公司"}
              </h4>
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
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  const currentSlug = params.slug;
                  window.location.href = language === "en" ? `/news/${currentSlug}?lang=zh` : `/news/${currentSlug}?lang=en`;
                }}
                className="text-gray-400 hover:text-white"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === "en" ? "中文" : "English"}
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}