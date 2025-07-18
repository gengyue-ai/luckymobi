# Luckymobi Technology Limited - Official Website

A modern, high-performance corporate website built with Next.js 14, featuring AI-driven solutions showcase, multi-language support, and enterprise-grade security.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Performance Optimized**: Image optimization, font loading, code splitting
- **SEO Enhanced**: Structured data, sitemap, meta tags, Open Graph
- **Multi-language**: English and Chinese support with professional i18n
- **Mobile-First**: Responsive design with mobile navigation
- **Security Hardened**: CSP headers, input validation, XSS protection
- **Analytics Ready**: Google Analytics 4, Web Vitals tracking
- **Developer Experience**: ESLint, Prettier, TypeScript, CI/CD pipeline

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage component
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── analytics.tsx     # Google Analytics integration
│   ├── contact-form.tsx  # Contact form with validation
│   ├── error-boundary.tsx # Error handling
│   ├── mobile-nav.tsx    # Mobile navigation
│   └── structured-data.tsx # SEO structured data
├── hooks/                # Custom React hooks
│   ├── use-mobile.tsx    # Mobile device detection
│   └── use-toast.ts      # Toast notification system
├── lib/                  # Utility libraries
│   ├── i18n.ts          # Internationalization config
│   ├── translations.ts   # Translation strings
│   ├── utils.ts         # Utility functions
│   └── validation.ts    # Input validation & security
└── public/              # Static assets
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/luckymobi/website.git
cd website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript check
npm run format       # Format code with Prettier
```

## 🌍 Internationalization

The website supports English and Chinese languages:

- **English**: Default language, accessible at `/` 
- **Chinese**: Accessible at `/zh` (future implementation)

Translation files are located in `lib/translations.ts`. To add new languages:

1. Add locale to `lib/i18n.ts`
2. Add translations to `lib/translations.ts`
3. Update components to use new locale

## 🔒 Security Features

- **Content Security Policy**: Prevents XSS attacks
- **Input Validation**: Zod schema validation for all forms
- **Rate Limiting**: Prevents spam and abuse
- **CSRF Protection**: Token-based CSRF protection
- **Security Headers**: Comprehensive security headers

## 📊 Performance Monitoring

- **Web Vitals**: Automatic tracking of Core Web Vitals
- **Google Analytics**: User behavior and traffic analysis
- **Lighthouse CI**: Automated performance auditing
- **Error Tracking**: Client-side error monitoring

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form
CONTACT_EMAIL=contact@luckymobi.org
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Security
CSRF_SECRET=your-csrf-secret-key-here
```

### Customization

- **Colors**: Modify `tailwind.config.ts` for brand colors
- **Fonts**: Update `app/layout.tsx` for custom fonts
- **Content**: Edit `lib/translations.ts` for text content
- **Images**: Replace files in `public/` directory

## 📈 SEO Optimization

- **Structured Data**: Organization and website schemas
- **Meta Tags**: Comprehensive meta tag optimization
- **Sitemap**: Dynamic sitemap generation
- **Open Graph**: Social media sharing optimization
- **Performance**: Optimized for Core Web Vitals

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run Lighthouse audit (requires running server)
npm run build && npm start
npx lighthouse http://localhost:3000 --output html
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Luckymobi Technology Limited.

## 📞 Support

For technical support or questions:

- **Email**: tech@luckymobi.org
- **Website**: https://luckymobi.org
- **Address**: RM511, 5/F, Ming Sang Industrial Building, 19-21 Hing Yip Street, Kwun Tong, Kowloon, Hong Kong

---

Built with ❤️ by Luckymobi Technology Limited