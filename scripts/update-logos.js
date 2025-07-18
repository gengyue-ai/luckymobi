#!/usr/bin/env node

/**
 * 批量更新所有页面的 Logo 为 Compact 版本
 */

const fs = require('fs');
const path = require('path');

// 需要更新的文件列表
const filesToUpdate = [
  'app/zh/about/page.tsx',
  'app/en/about/page.tsx',
  'app/zh/contact/page.tsx',
  'app/en/contact/page.tsx',
  'app/zh/products/page.tsx',
  'app/en/products/page.tsx',
  'app/zh/terms/page.tsx',
  'app/en/terms/page.tsx',
  'app/zh/privacy/page.tsx',
  'app/en/privacy/page.tsx',
  'components/mobile-nav.tsx'
];

// 旧的导航栏 Logo 代码模式
const oldNavLogoPattern = /\s*<div className="flex items-center space-x-2">\s*<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">\s*<Sparkles className="w-5 h-5 text-white" \/>\s*<\/div>\s*<span className="text-xl font-bold text-gray-900">LuckyMobi<\/span>\s*<\/div>/g;

// 旧的页脚 Logo 代码模式
const oldFooterLogoPattern = /\s*<div className="flex items-center space-x-2 mb-4">\s*<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">\s*<Sparkles className="w-5 h-5 text-white" \/>\s*<\/div>\s*<span className="text-xl font-bold">LuckyMobi<\/span>\s*<\/div>/g;

// 替换为新的 Logo 组件
const newNavLogo = '<NavLogo />';
const newFooterLogo = `<div className="mb-4">
                <FooterLogo />
              </div>`;

// 检查是否需要添加 import
const logoImportPattern = /import.*NavLogo.*from.*@\/components\/logo/;
const logoImport = 'import { NavLogo, FooterLogo } from "@/components/logo"';

function updateFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  文件不存在: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let updated = false;
  
  // 检查是否已经导入了 Logo 组件
  if (!logoImportPattern.test(content)) {
    // 找到第一个 import 语句后添加 Logo 导入
    const importPattern = /^import.*from.*$/m;
    const match = content.match(importPattern);
    if (match) {
      const insertPos = content.indexOf(match[0]) + match[0].length;
      content = content.slice(0, insertPos) + '\n' + logoImport + content.slice(insertPos);
      updated = true;
    }
  }
  
  // 替换导航栏 Logo
  if (oldNavLogoPattern.test(content)) {
    content = content.replace(oldNavLogoPattern, newNavLogo);
    updated = true;
    console.log(`✅ 更新导航栏 Logo: ${filePath}`);
  }
  
  // 替换页脚 Logo
  if (oldFooterLogoPattern.test(content)) {
    content = content.replace(oldFooterLogoPattern, newFooterLogo);
    updated = true;
    console.log(`✅ 更新页脚 Logo: ${filePath}`);
  }
  
  // 保存文件
  if (updated) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`💾 已保存: ${filePath}`);
  } else {
    console.log(`➡️  无需更新: ${filePath}`);
  }
}

// 主函数
function main() {
  console.log('🚀 开始批量更新 Logo...');
  console.log('');
  
  filesToUpdate.forEach(filePath => {
    console.log(`🔄 处理文件: ${filePath}`);
    updateFile(filePath);
    console.log('');
  });
  
  console.log('✨ 批量更新完成！');
  console.log('');
  console.log('📝 更新说明：');
  console.log('- 所有页面的 Logo 已更新为 Compact 版本');
  console.log('- 导航栏使用 <NavLogo /> 组件');
  console.log('- 页脚使用 <FooterLogo /> 组件');
  console.log('- 自动添加了必要的 import 语句');
}

if (require.main === module) {
  main();
}

module.exports = { updateFile };