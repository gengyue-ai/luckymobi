import React from 'react'
import Image from 'next/image'

interface LogoProps {
  variant?: 'simple' | 'full' | '3d' | 'final' | 'clean' | 'small' | 'premium' | 'compact' | 'iconic'
  size?: number
  className?: string
  priority?: boolean
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'simple',
  size = 32,
  className = '',
  priority = false
}) => {
  const logoSrc = variant === 'iconic' ? '/images/logo-lm-iconic.svg' : 
                  variant === 'premium' ? '/images/logo-lm-premium.svg' : 
                  variant === 'compact' ? '/images/logo-lm-compact.svg' : 
                  variant === 'clean' ? '/images/logo-lm-clean.svg' : 
                  variant === 'small' ? '/images/logo-lm-small.svg' : 
                  variant === 'simple' ? '/images/logo-lm-simple-v2.svg' : 
                  variant === '3d' ? '/images/logo-lm-3d.svg' : 
                  '/images/logo-lm-compact.svg'
  
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="LuckyMobi Logo"
        width={size}
        height={size}
        priority={priority}
        className="object-contain"
      />
    </div>
  )
}

export const LogoWithText: React.FC<LogoProps & { showText?: boolean }> = ({
  variant = 'simple',
  size = 32,
  className = '',
  priority = false,
  showText = true
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Logo variant={variant} size={size} priority={priority} />
      {showText && (
        <span className="text-xl font-bold text-gray-900">LuckyMobi</span>
      )}
    </div>
  )
}

// 专门用于导航栏的 Logo
export const NavLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <LogoWithText
      variant="compact"
      size={32}
      className={className}
      priority={true}
    />
  )
}

// 专门用于首页的 Logo
export const HeroLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <Logo
      variant="compact"
      size={120}
      className={className}
      priority={true}
    />
  )
}

// 专门用于页脚的 Logo
export const FooterLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Logo variant="compact" size={32} priority={false} />
      <span className="text-xl font-bold text-white">LuckyMobi</span>
    </div>
  )
}