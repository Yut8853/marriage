'use client'

import { Users, CalendarDays, Trophy, TrendingUp } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const stats = [
  {
    icon: Users,
    value: 107122,
    displayValue: '107,122',
    unit: '名',
    label: '会員数',
    note: '2026年2月末時点 / IBJ会員データ',
    gradient: 'from-sky-500 to-sky-600',
  },
  {
    icon: CalendarDays,
    value: 86752,
    displayValue: '86,752',
    unit: '件',
    label: '月間お見合い件数',
    note: '2026年2月末時点 / IBJ会員データ',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Trophy,
    value: 19112,
    displayValue: '19,112',
    unit: '名',
    label: '年間成婚数',
    note: '2025年度時点 / IBJ会員データ',
    gradient: 'from-orange-500 to-amber-500',
  },
]

function AnimatedCounter({ value, displayValue, inView }: { value: number; displayValue: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!inView) return
    
    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [value, inView])
  
  if (!inView) return <span>0</span>
  
  return <span>{count.toLocaleString()}</span>
}

export function StatsSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-4 backdrop-blur-sm">
            <TrendingUp className="h-4 w-4" />
            <span>IBJ NETWORK</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            IBJ加盟店として、安心の実績
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            国内最大級の結婚相談所ネットワークIBJに加盟。
            真剣に結婚を考える方だけが集まる、安全で信頼性の高い環境です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <p className="text-white/60 text-sm mb-3 uppercase tracking-wider whitespace-nowrap">{stat.label}</p>
                
                <p className="text-4xl md:text-5xl font-bold text-white mb-2 whitespace-nowrap">
                  <AnimatedCounter value={stat.value} displayValue={stat.displayValue} inView={inView} />
                  <span className="text-lg md:text-xl font-normal text-white/60 ml-1">{stat.unit}</span>
                </p>
                
                <p className="text-xs text-white/40 mt-4">({stat.note})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
