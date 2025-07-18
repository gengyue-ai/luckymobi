# 图片优化指南

## 当前图片优化建议

### 1. 图片格式选择
- **新闻图片**: 使用 WebP 格式，降级到 JPEG
- **Logo**: 使用 SVG 格式（矢量图，无损缩放）
- **图标**: 使用 SVG 或优化的 PNG

### 2. 图片尺寸规范
```
新闻卡片图片: 800x600px (4:3 比例)
首页横幅图片: 1200x600px (2:1 比例)
Logo: 矢量 SVG 格式
```

### 3. 文件大小控制
- 新闻图片: < 100KB
- Logo: < 10KB (SVG)
- 图标: < 5KB

### 4. Next.js 配置优化

在 `next.config.mjs` 中添加图片优化配置:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}
```

### 5. 图片使用最佳实践

```jsx
// 新闻图片使用
<Image
  src="/images/fangzhi.webp"
  alt="纺织制造商成功案例"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
  className="object-cover"
  priority={false}
/>

// Logo 使用
<Image
  src="/images/logo-lm.svg"
  alt="LuckyMobi Logo"
  width={40}
  height={40}
  priority={true}
/>
```

## 新 Logo 设计说明

创建了 3 个版本的 LM Logo:

1. **logo-lm.svg**: 完整版本，适合大尺寸展示
2. **logo-lm-simple.svg**: 简化版本，适合小尺寸使用
3. **logo-lm-3d.svg**: 3D效果版本，适合品牌展示

### Logo 特点:
- 现代化渐变色彩 (蓝色→紫色→粉色)
- 矢量格式，无损缩放
- 3D立体效果
- 科技感装饰元素
- 响应式设计

### 使用建议:
- 导航栏: 使用 `logo-lm-simple.svg`
- 首页: 使用 `logo-lm-3d.svg`
- 文档: 使用 `logo-lm.svg`

## 图片压缩工具推荐

1. **在线工具**:
   - TinyPNG: https://tinypng.com/
   - Squoosh: https://squoosh.app/
   - ImageOptim: https://imageoptim.com/

2. **命令行工具**:
   ```bash
   # 安装 imagemin
   npm install -g imagemin-cli imagemin-webp imagemin-pngquant
   
   # 批量转换为 WebP
   imagemin images/*.png --out-dir=images/webp --plugin=webp
   ```

3. **VS Code 插件**:
   - TinyPNG: 右键压缩图片
   - Image preview: 预览图片信息