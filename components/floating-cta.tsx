'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Phone, Calendar, User, Mail, MapPin, Clock, CheckCircle2, ChevronRight, X, MessageCircle } from 'lucide-react'
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

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [availableDates] = useState(getAvailableDates)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: 'online'
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setStep(1)
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      preferredDate: '',
      preferredTime: '',
      consultationType: 'online'
    })
  }

  const openDrawer = () => {
    resetForm()
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  const canProceedStep1 = formData.name && formData.email
  const canProceedStep2 = formData.city && formData.preferredDate && formData.preferredTime

  return (
    <>
      {/* Desktop - Right side sticky tab - Always visible */}
      <div className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end lg:flex">
        <button
          onClick={openDrawer}
          className="group flex w-[112px] origin-right items-center bg-gradient-to-b from-purple-600 via-pink-500 to-rose-500 text-white rounded-l-2xl shadow-2xl shadow-pink-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-pink-500/45 overflow-hidden"
        >
          {/* Main content */}
          <div className="flex flex-col items-center py-6 px-4 gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-bold">無料相談</span>
              <span className="text-xs opacity-90">予約する</span>
            </div>
            <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              30秒
            </div>
          </div>
          {/* Hover expand arrow */}
          <div className="flex w-6 items-center justify-center overflow-hidden">
            <ChevronRight className="h-5 w-5 opacity-80 transition-opacity group-hover:opacity-100" />
          </div>
        </button>

        {/* Sub buttons */}
        <div className="mt-2 flex flex-col gap-2">
          <a
            href="tel:029-XXX-XXXX"
            className="flex w-[112px] origin-right items-center gap-2 rounded-l-xl border-2 border-pink-400 bg-white px-4 py-3 text-pink-600 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-pink-50 hover:shadow-xl"
          >
            <Phone className="h-4 w-4" />
            <span className="text-xs font-bold">電話相談</span>
          </a>
          <a
            href="#"
            className="flex w-[112px] origin-right items-center gap-2 bg-[#06C755] text-white rounded-l-xl px-4 py-3 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-[#05a847] hover:shadow-xl"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs font-medium">LINE</span>
          </a>
        </div>
      </div>

      {/* Mobile fixed bottom bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 p-0.5 rounded-t-2xl">
          <div className="bg-white p-2 rounded-t-2xl flex gap-2">
            <Button
              asChild
              variant="outline"
              className="flex-1 h-14 rounded-xl border-2 border-slate-800 text-slate-800 font-bold"
            >
              <a href="tel:029-XXX-XXXX" className="flex items-center justify-center gap-1.5">
                <Phone className="h-5 w-5" />
                <span>電話</span>
              </a>
            </Button>
            <Button
              onClick={openDrawer}
              className="flex-[2] h-14 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:-translate-y-1 shadow-lg shadow-pink-500/25 font-bold text-base"
            >
              <Sparkles className="h-5 w-5 mr-1.5" />
              無料相談（30秒）
            </Button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeDrawer}
      />

      {/* Right Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[70] shadow-2xl transition-transform duration-300 ease-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {!isSubmitted ? (
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 p-5 text-white relative">
              <button 
                onClick={closeDrawer}
                className="absolute right-4 top-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">無料カウンセリング</h2>
                  <p className="text-sm text-white/80">たった30秒で予約完了</p>
                </div>
              </div>
              {/* Step indicator */}
              <div className="flex items-center gap-2 mt-4">
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

            {/* Form content - scrollable */}
            <div className="flex-1 overflow-y-auto">
              <form onSubmit={handleSubmit} className="p-5">
                {step === 1 && (
                  <div className="space-y-5">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-pink-100">
                      <p className="text-sm text-pink-700 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        強引な勧誘は一切ありません
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-1.5 text-sm font-medium">
                        <User className="h-4 w-4 text-pink-600" />
                        お名前
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="山田 太郎"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 text-base border-2 focus:border-pink-400"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-1.5 text-sm font-medium">
                        <Mail className="h-4 w-4 text-pink-600" />
                        メールアドレス
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 text-base border-2 focus:border-pink-400"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-1.5 text-sm font-medium">
                        <Phone className="h-4 w-4 text-pink-600" />
                        電話番号
                        <span className="text-xs text-muted-foreground ml-1">(任意)</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="090-1234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 text-base border-2 focus:border-pink-400"
                        required={false}
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
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
                      <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-1">
                        {availableDates.map((date) => (
                          <button
                            key={date.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredDate: date.value })}
                            className={`py-2.5 px-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
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
                          <RadioGroupItem value="online" id="online" className="sr-only" />
                          <span className="text-sm font-medium">オンライン</span>
                        </label>
                        <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${formData.consultationType === 'visit' ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300'}`}>
                          <RadioGroupItem value="visit" id="visit" className="sr-only" />
                          <span className="text-sm font-medium">来店（茨城）</span>
                        </label>
                      </RadioGroup>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Fixed bottom buttons */}
            <div className="p-5 border-t bg-gray-50">
              {step === 1 ? (
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1}
                  className="w-full h-14 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:-translate-y-1 shadow-lg shadow-pink-500/25 font-bold text-base rounded-xl"
                >
                  次へ：日程を選ぶ
                  <ChevronRight className="h-5 w-5 ml-1" />
                </Button>
              ) : (
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="h-14 px-6 rounded-xl border-2"
                  >
                    戻る
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceedStep2}
                    className="flex-1 h-14 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:-translate-y-1 shadow-lg shadow-pink-500/25 font-bold text-base rounded-xl"
                  >
                    予約を確定する
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              ご予約ありがとうございます
            </h3>
            <p className="text-muted-foreground mb-6">
              担当者より24時間以内にご連絡いたします。<br />
              お会いできることを楽しみにしております。
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 text-left w-full max-w-sm border border-pink-100">
              <p className="font-bold text-pink-700 mb-3">ご予約内容</p>
              <div className="space-y-2 text-sm text-foreground">
                <p><span className="text-muted-foreground">お名前：</span>{formData.name} 様</p>
                <p><span className="text-muted-foreground">日時：</span>{availableDates.find(d => d.value === formData.preferredDate)?.label} {formData.preferredTime}</p>
                <p><span className="text-muted-foreground">形式：</span>{formData.consultationType === 'online' ? 'オンライン相談' : '来店相談'}</p>
              </div>
            </div>
            <Button
              onClick={closeDrawer}
              className="w-full max-w-sm h-14 mt-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl font-bold"
            >
              閉じる
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
