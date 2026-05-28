'use client'

import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Crown,
  Dumbbell,
  HeartHandshake,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'ライトプラン',
    description: '婚活の準備を整えたい方向け',
    price: '11,000',
    initial: '220,000',
    icon: HeartHandshake,
    gradient: 'from-sky-600 to-cyan-500',
    shadow: 'hover:shadow-sky-500/20',
    features: ['月1回カウンセリング', 'XXXXXXXXXX', 'XXXXXXXXX'],
    popTag: '婚活準備',
    popMetric: '習慣づくり',
  },
  {
    name: 'スタンダードプラン',
    description: '婚活とボディメイクを同時に進めたい方向け',
    price: '22,000',
    initial: '250,000',
    icon: Sparkles,
    gradient: 'from-teal-500 to-emerald-500',
    shadow: 'hover:shadow-teal-500/20',
    recommended: true,
    features: ['月2回カウンセリング', 'XXXXXXXXXX', 'XXXXXXXXX'],
    popTag: '人気',
    popMetric: '体型改善',
  },
  {
    name: 'プレミアムプラン',
    description: '短期間で理想の自分と成婚を目指したい方向け',
    price: '38,500',
    initial: '280,000',
    icon: Crown,
    gradient: 'from-orange-500 to-amber-500',
    shadow: 'hover:shadow-orange-500/20',
    features: ['月4回カウンセリング', 'XXXXXXXXXX', 'XXXXXXXXX'],
    popTag: '集中',
    popMetric: '写真映え',
  },
]

export function PricingSection() {
  const handlePlanSelect = (planName: string) => {
    window.sessionStorage.setItem('selected-plan', planName)
    window.dispatchEvent(
      new CustomEvent('pricing-plan-selected', { detail: planName })
    )
  }

  return (
    <section id="pricing" className="relative flex min-h-screen items-center overflow-hidden py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-14 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            <Dumbbell className="h-4 w-4" />
            <span>PLAN</span>
          </div>
          <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            料金プラン
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            目的や活動ペースに合わせて選べる3つのプランをご用意しています。
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-2xl ${plan.shadow}`}
            >
              <div className="pop-only absolute -left-8 top-7 rotate-[-12deg] rounded-full bg-rose-400 px-10 py-1 text-xs font-black text-white shadow-lg shadow-rose-500/20">
                {plan.popTag}
              </div>
              {plan.recommended && (
                <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-pink-500/25">
                  人気
                </div>
              )}

              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <plan.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="mb-2 text-2xl font-bold text-foreground">{plan.name}</h3>
              <p className="mb-6 min-h-[3rem] text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <div className="mb-6 rounded-2xl bg-sky-50/70 p-5">
                <p className="mb-1 text-xs font-semibold text-muted-foreground">月会費</p>
                <p className="text-4xl font-bold text-foreground">
                  ¥{plan.price}
                  <span className="ml-1 text-sm font-medium text-muted-foreground">税込</span>
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  入会金 ¥{plan.initial} 税込
                </p>
              </div>

              <div className="pop-only mb-6 rounded-2xl border border-teal-100 bg-gradient-to-r from-sky-50 to-teal-50 p-4">
                <div className="mb-2 flex items-center justify-between text-xs font-bold">
                  <span className="text-teal-700">{plan.popMetric}</span>
                  <span className="text-rose-500">BOOST</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white">
                  <div className={`h-full rounded-full bg-gradient-to-r ${plan.gradient} transition-all duration-500 group-hover:w-full w-3/4`} />
                </div>
              </div>

              <div className="mb-8 flex-grow space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className={`bg-gradient-to-r ${plan.gradient} py-6 text-white shadow-lg`}
              >
                <Link
                  href="#contact"
                  onClick={() => handlePlanSelect(plan.name)}
                  className="gap-2"
                >
                  このプランを相談する
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
