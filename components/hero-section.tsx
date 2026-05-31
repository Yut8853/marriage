'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Activity, ArrowRight, Award, Heart, Ruler, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { sharedPhoto } from '@/lib/images'

const heroImages = [
  sharedPhoto,
  sharedPhoto,
  sharedPhoto,
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 lg:-translate-y-[100px]">
            {/* Badges */}
            <div className="hero-badges flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
              <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-sky-700 text-sm font-semibold border border-sky-200 shadow-sm backdrop-blur-sm">
                <Award className="h-4 w-4" />
                <span>IBJ正規加盟店</span>
              </div>
              <div className="hero-badge hero-badge-teal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-teal-600 text-sm font-semibold border border-teal-200 shadow-sm backdrop-blur-sm">
                <Heart className="h-4 w-4" />
                <span>成婚実績多数</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
              <span className="hero-heading-highlight text-balance decoration-clone px-1">
                茨城で理想のカラダとパートナーを見つけ、
                <br />
                運命の出会いを。
              </span>
            </h1>

            {/* Sub Copy */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8 text-pretty">
              プロのパーソナルトレーナーと婚活カウンセラーが、
              あなたの外見と内面の両方をフルサポート。
              <span className="text-foreground font-medium">自分史上最高の自分</span>で、
              最高のパートナーと出会いませんか？
            </p>

            <div className="pop-only mb-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="rounded-full border-2 border-teal-300 bg-white px-4 py-2 text-sm font-bold text-teal-700 shadow-[4px_4px_0_#99f6e4]">
                3ヶ月で、写真映えする自分へ
              </div>
              <div className="rounded-full border-2 border-rose-300 bg-white px-4 py-2 text-sm font-bold text-rose-500 shadow-[4px_4px_0_#fecdd3]">
                食事・運動・婚活をまとめてサポート
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 py-7 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:-translate-y-1 shadow-xl shadow-pink-500/25 text-white font-semibold"
              >
                <Link href="#contact" className="gap-2">
                  <Sparkles className="h-5 w-5" />
                  まずは無料で相談してみる
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-7 border-2 border-sky-200 hover:border-sky-400 hover:bg-sky-50/50 text-sky-700 hover:text-sky-700"
              >
                <Link href="#features">選ばれる理由を見る</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-sky-100">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>完全予約制</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-sky-100">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>カウンセリング無料</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-sky-100">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>オンライン対応可</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stacked Images with Animation */}
          <div className="relative order-1 lg:order-2">
            <div className="pop-only pop-desktop absolute -left-3 top-10 z-50 rotate-[-6deg] rounded-2xl border border-sky-200 bg-white px-4 py-3 shadow-xl shadow-sky-500/15">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-600">
                <Activity className="h-4 w-4" />
                BODY SCORE
              </div>
              <p className="mt-1 text-2xl font-black text-foreground">+28%</p>
            </div>
            <div className="pop-only pop-desktop absolute -right-2 bottom-16 z-50 rotate-[5deg] rounded-2xl border border-teal-200 bg-white px-4 py-3 shadow-xl shadow-teal-500/15">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-600">
                <Ruler className="h-4 w-4" />
                WAIST
              </div>
              <p className="mt-1 text-2xl font-black text-rose-500">-7cm</p>
            </div>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Stacked image frames */}
              {heroImages.map((src, index) => {
                const isActive = index === currentImage
                const isPrev = index === (currentImage - 1 + heroImages.length) % heroImages.length
                const isNext = index === (currentImage + 1) % heroImages.length
                
                let transform = 'translateX(100%) rotate(12deg) scale(0.8)'
                let zIndex = 0
                let opacity = 0
                
                if (isActive) {
                  transform = 'translateX(0) rotate(0deg) scale(1)'
                  zIndex = 30
                  opacity = 1
                } else if (isPrev) {
                  transform = 'translateX(-15%) rotate(-8deg) scale(0.9)'
                  zIndex = 20
                  opacity = 0.7
                } else if (isNext) {
                  transform = 'translateX(15%) rotate(8deg) scale(0.9)'
                  zIndex = 10
                  opacity = 0.5
                }
                
                return (
                  <div
                    key={`${src}-${index}`}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{ transform, zIndex, opacity }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/30 via-teal-300/20 to-amber-300/30 rounded-[2rem] lg:rounded-[3rem]" />
                    <div
                      className="relative z-10 h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-cover bg-center bg-no-repeat shadow-2xl border-4 border-white/80"
                      style={{ backgroundImage: `url(${src})` }}
                    >
                      <img
                        src={src}
                        alt={`理想の体型で幸せな婚活を ${index + 1}`}
                        className="relative z-10 h-full w-full object-cover grayscale contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                    </div>
                  </div>
                )
              })}

              {/* Image indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage 
                        ? 'bg-gradient-to-r from-teal-600 to-sky-500 w-8' 
                        : 'bg-sky-200 hover:bg-sky-300'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
