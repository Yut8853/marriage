'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { MessageSquare, Dumbbell, Camera, Heart, Sparkles } from 'lucide-react'
import { sharedPhoto } from '@/lib/images'

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: '無料カウンセリング',
    description:
      'まずはお気軽にご相談ください。あなたの目標や婚活への想いをじっくりお聞きし、最適なプランをご提案します。',
    gradient: 'from-sky-500 to-sky-600',
    image: sharedPhoto,
  },
  {
    number: 2,
    icon: Dumbbell,
    title: 'ボディメイク開始',
    description:
      '専属トレーナーによるオーダーメイドプログラムがスタート。無理のないペースで、着実に理想の体型へ。',
    gradient: 'from-teal-500 to-emerald-500',
    image: sharedPhoto,
  },
  {
    number: 3,
    icon: Camera,
    title: 'プロフィール写真撮影',
    description:
      '最高の状態に仕上がったあなたを、プロカメラマンが撮影。魅力を最大限に引き出したプロフィールを作成。',
    gradient: 'from-cyan-500 to-sky-500',
    image: sharedPhoto,
  },
  {
    number: 4,
    icon: Heart,
    title: '自信を持ってお見合い開始',
    description:
      'IBJシステムを活用し、あなたにぴったりのお相手を厳選。自信を持って、前向きな気持ちでお見合いへ。',
    gradient: 'from-orange-500 to-amber-500',
    image: sharedPhoto,
  },
  {
    number: 5,
    icon: Sparkles,
    title: '成婚',
    description:
      '交際から成婚まで、カウンセラーが二人三脚でサポート。最高の出会いを、最高の結果へと導きます。',
    gradient: 'from-amber-500 to-yellow-500',
    image: sharedPhoto,
  },
]

export function FlowSection() {
  const [activeStep, setActiveStep] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const sectionTop = sectionRef.current.offsetTop
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const stepTop = ref.offsetTop + sectionTop
          const stepBottom = stepTop + ref.offsetHeight
          
          if (scrollPosition >= stepTop && scrollPosition < stepBottom) {
            setActiveStep(index + 1)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id="flow" className="relative min-h-screen py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Mobile header */}
        <div className="lg:hidden text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            <span>FLOW</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            成婚までの<br/>流れ
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            あなたの婚活を、最初から最後まで徹底サポートします。
          </p>
        </div>

        {/* Desktop layout with sticky sidebar */}
        <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-16">
          {/* Left sticky navigation - Desktop only */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold mb-4">
                <Sparkles className="h-4 w-4" />
                <span>FLOW</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-5">
                成婚までの<br/>流れ
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                あなたの婚活を、最初から最後まで徹底サポートします。
              </p>
              
              {/* Progress navigation */}
              <nav className="space-y-2">
                {steps.map((step) => {
                  const isActive = activeStep === step.number
                  const isPast = activeStep > step.number
                  
                  return (
                    <a
                      key={step.number}
                      href={`#step-${step.number}`}
                      className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-sky-50 to-teal-50 border border-teal-200' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          isActive 
                            ? `bg-gradient-to-br ${step.gradient} text-white shadow-lg` 
                            : isPast 
                              ? 'bg-teal-100 text-teal-600' 
                              : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-semibold transition-colors duration-300 ${
                          isActive ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {step.title}
                        </p>
                      </div>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                      )}
                    </a>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Right scrolling content */}
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div 
                id={`step-${step.number}`}
                key={step.number}
                ref={(el) => { stepRefs.current[index] = el }}
                className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden scroll-mt-24"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] md:aspect-[2/1]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover grayscale contrast-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-20`} />
                  {/* Step number badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${step.gradient} text-white text-sm font-semibold mb-4`}>
                    <step.icon className="h-4 w-4" />
                    <span>STEP {step.number}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-teal-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
