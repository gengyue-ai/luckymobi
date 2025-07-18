"use client"

import { Logo, LogoWithText, NavLogo, HeroLogo, FooterLogo } from "@/components/logo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LogoTestPage() {
  const variants = [
    { name: 'iconic', title: 'Iconic 版本', description: '雷克萨斯风格，高辨识度', recommended: true },
    { name: 'premium', title: 'Premium 版本', description: '豪华感设计，渐变色彩' },
    { name: 'compact', title: 'Compact 版本', description: '简洁设计，适合导航栏' },
    { name: 'clean', title: 'Clean 版本', description: '使用系统字体' },
    { name: 'final', title: 'Final 版本', description: '几何化设计' },
    { name: 'simple', title: 'Simple 版本', description: '简化版本' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🎨 LuckyMobi Logo 设计展示</h1>
          <p className="text-xl text-gray-600">所有 Logo 版本的实时预览</p>
        </div>

        {/* 推荐组件展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">导航栏 Logo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-20 bg-white rounded-lg border">
                <NavLogo />
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">首页 Logo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-20 bg-white rounded-lg border">
                <HeroLogo />
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">页脚 Logo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-20 bg-gray-900 rounded-lg">
                <FooterLogo />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 所有版本展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {variants.map((variant) => (
            <Card key={variant.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{variant.title}</CardTitle>
                  {variant.recommended && (
                    <Badge className="bg-green-500">推荐</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">{variant.description}</p>
              </CardHeader>
              <CardContent>
                {/* 大尺寸展示 */}
                <div className="flex justify-center items-center h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4">
                  <Logo variant={variant.name as any} size={100} />
                </div>
                
                {/* 不同尺寸展示 */}
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <Logo variant={variant.name as any} size={60} />
                  <Logo variant={variant.name as any} size={40} />
                  <Logo variant={variant.name as any} size={24} />
                </div>
                
                {/* 带文字版本 */}
                <div className="flex justify-center items-center h-12 bg-white rounded-lg border">
                  <LogoWithText variant={variant.name as any} size={32} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 使用建议 */}
        <Card className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">🏆 使用建议</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Iconic 版本 (推荐)</h3>
                <p className="opacity-90">
                  参考雷克萨斯设计理念，具有高辨识度和现代科技感。适合：
                  <br />• 品牌展示和营销材料
                  <br />• 大尺寸应用场景
                  <br />• 官网首页和关键页面
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Compact 版本</h3>
                <p className="opacity-90">
                  简洁清晰，小尺寸下依然清晰可见。适合：
                  <br />• 导航栏和页脚
                  <br />• 移动端应用
                  <br />• 社交媒体头像
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}