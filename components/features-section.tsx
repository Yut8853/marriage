'use client'

import Link from 'next/link'
import { Dumbbell, Camera, Search, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Dumbbell,
    number: '01',
    title: '専属トレーナーによるオーダーメイドプログラム',
    description:
      'あなたの体質や生活スタイルに合わせた、完全オーダーメイドのダイエット・ボディメイクプログラム。無理なく、確実に理想の体型へ導きます。',
    benefits: ['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX'],
    gradient: 'from-sky-600 to-cyan-500',
    bgGradient: 'from-sky-50 to-cyan-100/50',
    color: '#0284c7',
    shadow: 'hover:shadow-sky-500/20',
  },
  {
    icon: Camera,
    number: '02',
    title: '最高の状態での「奇跡のプロフィール写真」撮影',
    description:
      'ボディメイクで仕上がった最高のあなたを、プロカメラマンが撮影。第一印象で差をつける、魅力的なプロフィール写真をお約束します。',
    benefits: ['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX'],
    gradient: 'from-teal-500 to-emerald-500',
    bgGradient: 'from-teal-50 to-emerald-50',
    color: '#14b8a6',
    shadow: 'hover:shadow-teal-500/20',
  },
  {
    icon: Search,
    number: '03',
    title: 'IBJシステムを活用した妥協のないお相手探し',
    description:
      '国内最大級の会員ネットワーク（約10万人）から、あなたの希望条件にマッチするお相手を効率的に探します。真剣な出会いをサポート。',
    benefits: ['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX'],
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
    color: '#f97316',
    shadow: 'hover:shadow-orange-500/20',
  },
    {
    icon: Dumbbell,
    number: '04',
    title: '専属トレーナーによるオーダーメイドプログラム',
    description:
      'XXXXXXXXXXXXXXXXXXXXXXXXX',
    benefits: ['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX'],
    gradient: 'from-sky-600 to-cyan-500',
    bgGradient: 'from-sky-50 to-cyan-100/50',
    color: '#0284c7',
    shadow: 'hover:shadow-sky-500/20',
  },
  {
    icon: Camera,
    number: '05',
    title: '最高の状態での「奇跡のプロフィール写真」撮影',
    description:
      'XXXXXXXXXXXXXXXXXXXXXXXXX',
    benefits: ['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX'],
    gradient: 'from-teal-500 to-emerald-500',
    bgGradient: 'from-teal-50 to-emerald-50',
    color: '#14b8a6',
    shadow: 'hover:shadow-teal-500/20',
  },
  {
    icon: Search,
    number: '06',
    title: 'IBJシステムを活用した妥協のないお相手探し',
    description:
      'XXXXXXXXXXXXXXXXXXXXXXXXX',
    benefits: ['XXXXXXXXXX', 'XXXXXXXXXX', 'XXXXXXXXXX'],
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
    color: '#f97316',
    shadow: 'hover:shadow-orange-500/20',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative flex min-h-screen items-center overflow-hidden py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            当相談所が選ばれる6つの理由
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ダイエット・ボディメイクと婚活を同時にサポートする、
            <span className="text-foreground font-medium">業界唯一</span>のハイブリッドサービスです。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full flex flex-col p-8 rounded-3xl bg-white border border-border/50 hover:border-transparent hover:shadow-2xl ${feature.shadow} transition-all duration-500 overflow-hidden`}>
                {/* Number decoration */}
                <div className={`absolute -top-4 -right-4 text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-br ${feature.gradient} opacity-10 leading-none select-none`}>
                  {feature.number}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>
                
                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className={`h-4 w-4 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`} style={{ fill: 'url(#gradient)' }} />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* Link */}
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 hover:gap-3 transition-all"
                >
                  詳しく相談する
                  <ArrowRight className="h-4 w-4 text-pink-500" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="px-10 py-7 text-lg bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:-translate-y-1 shadow-xl shadow-pink-500/25 text-white font-semibold"
          >
            <Link href="#contact" className="gap-3">
              <Sparkles className="h-5 w-5" />
              無料カウンセリングを予約する
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
