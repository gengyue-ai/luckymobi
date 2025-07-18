#!/usr/bin/env node

/**
 * 图片优化脚本
 * 用于批量优化 public/images 目录下的图片
 */

const fs = require('fs');
const path = require('path');

// 图片文件扩展名
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

// 检查图片文件大小
function checkImageSize(filePath) {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats.size;
  const fileSizeInKB = fileSizeInBytes / 1024;
  
  return {
    path: filePath,
    sizeKB: Math.round(fileSizeInKB),
    sizeBytes: fileSizeInBytes
  };
}

// 扫描图片目录
function scanImages(dir) {
  const images = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    files.forEach(file => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          images.push(checkImageSize(filePath));
        }
      }
    });
  }
  
  scanDirectory(dir);
  return images;
}

// 分析图片并给出优化建议
function analyzeImages() {
  const imagesDir = path.join(__dirname, '../public/images');
  
  if (!fs.existsSync(imagesDir)) {
    console.log('❌ 图片目录不存在:', imagesDir);
    return;
  }
  
  console.log('🔍 扫描图片目录:', imagesDir);
  console.log('');
  
  const images = scanImages(imagesDir);
  
  if (images.length === 0) {
    console.log('📁 没有找到图片文件');
    return;
  }
  
  console.log('📊 图片分析报告');
  console.log('='.repeat(60));
  
  let totalSize = 0;
  let largeImages = [];
  
  images.forEach(image => {
    const relativePath = path.relative(imagesDir, image.path);
    const sizeStatus = image.sizeKB > 100 ? '⚠️ ' : '✅ ';
    
    console.log(`${sizeStatus}${relativePath.padEnd(30)} ${image.sizeKB.toString().padStart(6)} KB`);
    
    totalSize += image.sizeKB;
    
    if (image.sizeKB > 100) {
      largeImages.push(image);
    }
  });
  
  console.log('='.repeat(60));
  console.log(`📁 总文件数量: ${images.length}`);
  console.log(`📦 总大小: ${totalSize.toFixed(1)} KB`);
  console.log(`⚠️  需要优化的大文件: ${largeImages.length}`);
  console.log('');
  
  // 优化建议
  if (largeImages.length > 0) {
    console.log('🔧 优化建议:');
    console.log('');
    
    largeImages.forEach(image => {
      const relativePath = path.relative(imagesDir, image.path);
      console.log(`📄 ${relativePath} (${image.sizeKB} KB)`);
      
      if (image.sizeKB > 500) {
        console.log('   - 建议压缩图片质量到 80-90%');
        console.log('   - 考虑调整图片尺寸');
      } else if (image.sizeKB > 200) {
        console.log('   - 建议使用 WebP 格式');
        console.log('   - 可以适当压缩质量');
      } else {
        console.log('   - 建议使用 TinyPNG 或类似工具压缩');
      }
      console.log('');
    });
  }
  
  // 推荐的优化命令
  console.log('🛠️  推荐的优化工具:');
  console.log('');
  console.log('1. 在线压缩:');
  console.log('   - TinyPNG: https://tinypng.com/');
  console.log('   - Squoosh: https://squoosh.app/');
  console.log('');
  console.log('2. 命令行工具:');
  console.log('   npm install -g imagemin-cli imagemin-webp imagemin-pngquant');
  console.log('   imagemin public/images/*.{jpg,png} --out-dir=public/images/optimized --plugin=webp');
  console.log('');
  console.log('3. VS Code 插件:');
  console.log('   - TinyPNG');
  console.log('   - Image preview');
  console.log('');
}

// 创建推荐的图片规范
function createImageSpecs() {
  const specs = {
    '新闻卡片图片': {
      size: '800x600px',
      format: 'WebP (降级到 JPEG)',
      maxSize: '100KB',
      usage: '新闻列表和详情页'
    },
    '首页横幅图片': {
      size: '1200x600px',
      format: 'WebP (降级到 JPEG)',
      maxSize: '150KB',
      usage: '首页 hero 区域'
    },
    'Logo 图片': {
      size: '矢量 SVG',
      format: 'SVG',
      maxSize: '10KB',
      usage: '导航栏、页脚、品牌展示'
    },
    '产品图片': {
      size: '600x400px',
      format: 'WebP (降级到 JPEG)',
      maxSize: '80KB',
      usage: '产品展示卡片'
    },
    '图标': {
      size: '24x24px, 32x32px, 48x48px',
      format: 'SVG 或 PNG',
      maxSize: '5KB',
      usage: '按钮、装饰、功能图标'
    }
  };
  
  console.log('📋 图片规范建议:');
  console.log('='.repeat(60));
  
  Object.entries(specs).forEach(([name, spec]) => {
    console.log(`📸 ${name}:`);
    console.log(`   尺寸: ${spec.size}`);
    console.log(`   格式: ${spec.format}`);
    console.log(`   大小: ${spec.maxSize}`);
    console.log(`   用途: ${spec.usage}`);
    console.log('');
  });
}

// 运行脚本
if (require.main === module) {
  console.log('🎨 LuckyMobi 图片优化工具');
  console.log('');
  
  analyzeImages();
  createImageSpecs();
  
  console.log('💡 提示: 运行此脚本前，建议先备份原始图片');
  console.log('');
}