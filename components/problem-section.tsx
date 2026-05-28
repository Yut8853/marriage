'use client'

import { Scale, HeartHandshake, User, Frown, MessageCircleQuestion, AlertCircle, Camera } from 'lucide-react'
import { sharedPhoto } from '@/lib/images'

const problems = [
  {
    icon: Scale,
    text: '今の体型では写真映えしない気がする',
  },
  {
    icon: Frown,
    text: '自分に自信が持てず、お見合いに積極的になれない',
  },
  {
    icon: Camera,
    text: 'プロフィール写真に自信がない',
  },
  {
    icon: User,
    text: '見た目を変えてから婚活を始めたいけど、何から手をつければいいかわからない',
  },
  {
    icon: HeartHandshake,
    text: '運動が苦手で、一人では続かない',
  },
  {
    icon: MessageCircleQuestion,
    text: '相談できる人がいなくて、婚活に踏み出せない',
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="relative flex min-h-screen items-center overflow-hidden py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold mb-4">
            <AlertCircle className="h-4 w-4" />
            <span>よくあるお悩み</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            こんなお悩みありませんか？
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            体型や見た目への不安から、<br />婚活に踏み出せない方は多くいらっしゃいます。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image - worried couple */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat shadow-2xl"
              style={{ backgroundImage: `url(${sharedPhoto})` }}
            >
              <img
                src={sharedPhoto}
                alt="婚活に悩むカップル"
                className="relative z-10 h-full w-full object-cover grayscale contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Problems list */}
          <div className="space-y-4 order-1 lg:order-2">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-sky-200/50 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300">
                  <div className="absolute -left-3 -top-3 w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-sky-100 to-teal-100 flex items-center justify-center group-hover:from-sky-200 group-hover:to-teal-200 transition-colors">
                    <problem.icon className="h-5 w-5 text-teal-500" />
                  </div>
                  <p className="text-foreground text-base leading-relaxed pt-1.5">
                    {problem.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-teal-500 to-sky-500 mb-4" />
            <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-500 to-cyan-500">
              その悩み、私たちが解決します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
