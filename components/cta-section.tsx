'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, Sparkles, Phone, Mail, Clock, Shield, Timer, Gift, User, MapPin, Calendar, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const benefits = [
  '強引な勧誘は一切なし',
  '相談だけでもOK',
  'オンライン対応可',
  '当日予約OK',
]

const ibarakiCities = [
  '水戸市', 'つくば市', '日立市', 'ひたちなか市', '土浦市',
  '古河市', '取手市', '筑西市', '神栖市', '牛久市',
  '龍ケ崎市', '笠間市', '石岡市', '鹿嶋市', '守谷市',
  '常総市', '那珂市', '坂東市', '結城市', '小美玉市',
  'その他茨城県内', '茨城県外'
]

function getAvailableDates() {
  const dates: { value: string; label: string }[] = []
  const today = new Date()
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()]
    const month = date.getMonth() + 1
    const day = date.getDate()
    dates.push({
      value: `${date.getFullYear()}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      label: `${month}月${day}日(${dayOfWeek})`
    })
  }
  return dates
}

const timeSlots = [
  '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
]

const planOptions = [
  'ライトプラン',
  'スタンダードプラン',
  'プレミアムプラン',
  '相談して決める',
]

export function CTASection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [step, setStep] = useState(1)
  const [availableDates] = useState(getAvailableDates)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: 'online',
    selectedPlan: '相談して決める',
  })

  useEffect(() => {
    const storedPlan = window.sessionStorage.getItem('selected-plan')
    if (storedPlan && planOptions.includes(storedPlan)) {
      setFormData((current) => ({ ...current, selectedPlan: storedPlan }))
    }

    const handlePlanSelected = (event: Event) => {
      const selectedPlan = (event as CustomEvent<string>).detail
      if (planOptions.includes(selectedPlan)) {
        setFormData((current) => ({ ...current, selectedPlan }))
      }
    }

    window.addEventListener('pricing-plan-selected', handlePlanSelected)

    return () => {
      window.removeEventListener('pricing-plan-selected', handlePlanSelected)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const canProceedStep1 = formData.name && formData.email
  const canProceedStep2 = formData.city && formData.preferredDate && formData.preferredTime

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-rose-50" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168,85,247,0.15) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white text-sm font-semibold mb-5 shadow-lg shadow-pink-500/30">
              <Timer className="h-4 w-4" />
              <span>たった30秒で完了</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              無料相談を予約する
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              名前とメールだけでOK。今すぐ新しい一歩を踏み出しましょう。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Form - Main focus */}
            <div className="order-2 lg:order-1">
              {isSubmitted ? (
                <div className="bg-white rounded-3xl border-2 border-pink-200 p-8 md:p-12 text-center shadow-2xl">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/30 animate-bounce">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    ご予約ありがとうございます
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    カウンセラーよりご連絡いたします。
                    <br />
                    お会いできることを楽しみにしております。
                  </p>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 text-left max-w-sm mx-auto border border-pink-100 mb-6">
                    <p className="font-bold text-pink-700 mb-3">ご予約内容</p>
                    <div className="space-y-2 text-sm text-foreground">
                      <p><span className="text-muted-foreground">お名前：</span>{formData.name} 様</p>
                      <p><span className="text-muted-foreground">ご希望プラン：</span>{formData.selectedPlan}</p>
                      <p><span className="text-muted-foreground">日時：</span>{availableDates.find(d => d.value === formData.preferredDate)?.label} {formData.preferredTime}</p>
                      <p><span className="text-muted-foreground">形式：</span>{formData.consultationType === 'online' ? 'オンライン相談' : '来店相談'}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="lg" onClick={() => { setIsSubmitted(false); setStep(1); }} className="px-8 border-pink-300 text-pink-600 hover:bg-pink-50">
                    フォームに戻る
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl border-2 border-pink-100 shadow-2xl shadow-pink-500/10 overflow-hidden">
                  {/* Header with step indicator - matching drawer style */}
                  <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 px-6 md:px-8 py-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Sparkles className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">無料カウンセリング</h3>
                      </div>
                      <span className="text-white/80 text-sm">30秒で完了</span>
                    </div>
                    {/* Step indicator */}
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${step === 1 ? 'bg-white text-pink-600' : 'bg-white/20 text-white'}`}>
                        <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-xs">1</span>
                        基本情報
                      </div>
                      <ChevronRight className="h-4 w-4 text-white/50" />
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${step === 2 ? 'bg-white text-pink-600' : 'bg-white/20 text-white'}`}>
                        <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-xs">2</span>
                        日程選択
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    {step === 1 ? (
                      <div className="space-y-5">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-pink-100">
                          <p className="text-sm text-pink-700 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            強引な勧誘は一切ありません
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cta-name" className="flex items-center gap-1.5 text-sm font-medium">
                              <User className="h-4 w-4 text-pink-600" />
                              お名前
                              <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="cta-name"
                              placeholder="山田 太郎"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              className="h-12 text-base border-2 focus:border-pink-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cta-email" className="flex items-center gap-1.5 text-sm font-medium">
                              <Mail className="h-4 w-4 text-pink-600" />
                              メールアドレス
                              <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="cta-email"
                              type="email"
                              placeholder="example@email.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              className="h-12 text-base border-2 focus:border-pink-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cta-phone" className="flex items-center gap-1.5 text-sm font-medium">
                              <Phone className="h-4 w-4 text-pink-600" />
                              電話番号
                              <span className="text-xs text-muted-foreground ml-1">(任意)</span>
                            </Label>
                            <Input
                              id="cta-phone"
                              type="tel"
                              placeholder="090-1234-5678"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="h-12 text-base border-2 focus:border-pink-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="flex items-center gap-1.5 text-sm font-medium">
                              <Sparkles className="h-4 w-4 text-pink-600" />
                              ご希望プラン
                            </Label>
                            <RadioGroup
                              value={formData.selectedPlan}
                              onValueChange={(value) => {
                                window.sessionStorage.setItem('selected-plan', value)
                                setFormData({ ...formData, selectedPlan: value })
                              }}
                              className="grid grid-cols-1 gap-2 sm:grid-cols-2"
                            >
                              {planOptions.map((plan) => (
                                <label
                                  key={plan}
                                  className={`flex cursor-pointer items-center justify-center rounded-xl border-2 p-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                                    formData.selectedPlan === plan
                                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                                      : 'border-gray-200 hover:border-pink-300'
                                  }`}
                                >
                                  <RadioGroupItem value={plan} className="sr-only" />
                                  <span>{plan}</span>
                                </label>
                              ))}
                            </RadioGroup>
                          </div>
                        </div>

                        <Button 
                          type="button"
                          onClick={() => setStep(2)}
                          disabled={!canProceedStep1}
                          size="lg" 
                          className="w-full h-14 text-base bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:-translate-y-1 shadow-xl shadow-pink-500/25 rounded-xl font-bold"
                        >
                          次へ：日程を選ぶ
                          <ChevronRight className="h-5 w-5 ml-2" />
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <Label className="flex items-center gap-1.5 text-sm font-medium">
                            <MapPin className="h-4 w-4 text-pink-600" />
                            お住まいの地域（茨城県）
                            <span className="text-red-500">*</span>
                          </Label>
                          <Select
                            value={formData.city}
                            onValueChange={(value) => setFormData({ ...formData, city: value })}
                          >
                            <SelectTrigger className="h-12 text-base border-2">
                              <SelectValue placeholder="市区町村を選択" />
                            </SelectTrigger>
                            <SelectContent>
                              {ibarakiCities.map((city) => (
                                <SelectItem key={city} value={city}>{city}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="flex items-center gap-1.5 text-sm font-medium">
                            <Calendar className="h-4 w-4 text-pink-600" />
                            希望日
                            <span className="text-red-500">*</span>
                          </Label>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-32 overflow-y-auto p-1">
                            {availableDates.slice(0, 8).map((date) => (
                              <button
                                key={date.value}
                                type="button"
                                onClick={() => setFormData({ ...formData, preferredDate: date.value })}
                                className={`py-2 px-2 rounded-lg border-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                                  formData.preferredDate === date.value
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white border-transparent shadow-md'
                                    : 'bg-white hover:bg-pink-50 border-gray-200 hover:border-pink-300'
                                }`}
                              >
                                {date.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="flex items-center gap-1.5 text-sm font-medium">
                            <Clock className="h-4 w-4 text-pink-600" />
                            希望時間
                            <span className="text-red-500">*</span>
                          </Label>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setFormData({ ...formData, preferredTime: time })}
                                className={`py-2.5 px-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                                  formData.preferredTime === time
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white border-transparent shadow-md'
                                    : 'bg-white hover:bg-pink-50 border-gray-200 hover:border-pink-300'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-medium">相談形式</Label>
                          <RadioGroup
                            value={formData.consultationType}
                            onValueChange={(value) => setFormData({ ...formData, consultationType: value })}
                            className="flex gap-4"
                          >
                            <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${formData.consultationType === 'online' ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300'}`}>
                              <RadioGroupItem value="online" id="cta-online" className="sr-only" />
                              <span className="text-sm font-medium">オンライン</span>
                            </label>
                            <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${formData.consultationType === 'visit' ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300'}`}>
                              <RadioGroupItem value="visit" id="cta-visit" className="sr-only" />
                              <span className="text-sm font-medium">来店（茨城）</span>
                            </label>
                          </RadioGroup>
                        </div>

                        <div className="flex gap-3">
                          <Button 
                            type="button"
                            onClick={() => setStep(1)}
                            variant="outline"
                            size="lg" 
                            className="h-14 px-6 rounded-xl border-2"
                          >
                            戻る
                          </Button>
                          <Button 
                            type="submit"
                            disabled={!canProceedStep2}
                            size="lg" 
                            className="flex-1 h-14 text-base bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:-translate-y-1 shadow-xl shadow-pink-500/25 rounded-xl font-bold"
                          >
                            <Sparkles className="h-5 w-5 mr-2" />
                            予約を確定する
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="px-6 md:px-8 pb-6">
                    <p className="text-xs text-muted-foreground text-center">
                      カウンセラーよりご連絡いたします。強引な勧誘は一切ございません。
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right sidebar - Benefits */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Limited offer banner */}
              <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 rounded-2xl p-5 text-white shadow-xl shadow-pink-500/25">
                <div className="flex items-center gap-3 mb-2">
                  <Gift className="h-6 w-6" />
                  <span className="font-bold text-lg">今だけの特典</span>
                </div>
                <p className="text-white/90 text-sm">
                  無料カウンセリングにお申し込みの方に、<span className="font-bold">「理想のパートナーに出会うための10のヒント」</span>PDFをプレゼント！
                </p>
              </div>

              {/* Benefits card */}
              <div className="bg-white rounded-2xl border border-border p-6 shadow-lg">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-pink-600" />
                  安心ポイント
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                      <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">お電話でのご予約</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-500/30 flex items-center justify-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">電話番号</p>
                      <p className="text-xl font-bold">029-XXX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-500/30 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">受付時間</p>
                      <p className="font-semibold">10:00〜19:00（年中無休）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
