'use client'

import Image from 'next/image'
import { MapPin, Clock, Phone, Mail, Award, CheckCircle2 } from 'lucide-react'
import { sharedPhoto } from '@/lib/images'

const officeInfo = [
  { label: '相談所名', value: '結婚相談所名' },
  { label: '代表者', value: 'XXXX' },
  { label: '所在地', value: '茨城県つくば市XXXXX △△ビル5F' },
  { label: '電話番号', value: '029-XXX-XXXX' },
  { label: 'メール', value: 'info@fitmarriage.example.com' },
  { label: '営業時間', value: '10:00〜19:00（完全予約制）' },
  { label: '定休日', value: '不定休' },
  { label: '加盟団体', value: 'IBJ（日本結婚相談所連盟）正規加盟店' },
]

const qualifications = [
  'XXXXXXX',
  'XXXXXXX',
  'XXXXXXX',
  'XXXXXXX',
]

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold mb-4">
            <Award className="h-4 w-4" />
            <span>ABOUT US</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            相談所概要
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            茨城県つくば市を拠点に、地域に密着したサポートを提供しています。
          </p>
        </div>

        {/* Counselor Introduction */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-teal-500/30 rounded-3xl transform rotate-3" />
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={sharedPhoto}
                    alt="カウンセラー"
                    fill
                    className="object-cover grayscale contrast-105"
                  />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <p className="text-teal-600 font-semibold text-sm mb-2">COUNSELOR MESSAGE</p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                あなたの「最高の自分」への
                <br />
                挑戦を、全力でサポートします。
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                「婚活を始めたいけど、今の自分に自信がない」—そんなお悩みを持つ方に出会い、
                ダイエット・ボディメイクと婚活を組み合わせたこのサービスを始めました。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                体型が変わると、自信が生まれます。自信が生まれると、行動が変わります。
                あなたの人生を変える第一歩を、私たちと一緒に踏み出しませんか？
              </p>
              
              {/* Qualifications */}
              <div className="bg-sky-50 rounded-2xl p-6">
                <p className="text-sm font-semibold text-foreground mb-4">保有資格</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {qualifications.map((q, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-sky-600 flex-shrink-0" />
                      <span className="text-sm text-foreground">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Office Information */}
          <div className="bg-white rounded-3xl border border-border p-8 shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                <Award className="h-4 w-4 text-sky-600" />
              </div>
              会社情報
            </h3>
            <div className="space-y-4">
              {officeInfo.map((info, index) => (
                <div key={index} className="flex border-b border-border/50 pb-4 last:border-0 last:pb-0">
                  <span className="font-medium text-muted-foreground w-24 flex-shrink-0 text-sm">
                    {info.label}
                  </span>
                  <span className="text-foreground text-sm break-all">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map & Contact */}
          <div className="space-y-6">
            {/* Google Map embed */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-border aspect-[4/3]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.8127738095087!2d140.1106!3d36.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA0JzU5LjkiTiAxNDDCsDA2JzM4LjIiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="相談所の場所"
              />
            </div>

            {/* Office interior image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[2/1]">
              <Image
                src={sharedPhoto}
                alt="相談所の内観"
                fill
                className="object-cover grayscale contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">相談所の雰囲気</p>
                <p className="font-bold">明るく落ち着いた空間でお待ちしております</p>
              </div>
            </div>

            {/* Quick contact info */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-sky-600" />
                </div>
                <p className="text-xs text-muted-foreground text-center">営業時間</p>
                <p className="text-sm font-bold text-foreground text-center">10:00-19:00</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-teal-600" />
                </div>
                <p className="text-xs text-muted-foreground text-center">電話番号</p>
                <p className="text-sm font-bold text-foreground text-center">029-XXX</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-amber-600" />
                </div>
                <p className="text-xs text-muted-foreground text-center">メール</p>
                <p className="text-sm font-bold text-foreground text-center">お問合せ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
