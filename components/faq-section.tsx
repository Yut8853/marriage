'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HelpCircle, Sparkles, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { sharedPhoto } from '@/lib/images'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: '詳しくお話を聞きたいのですが、カウンセリングで無理やり入会させられませんか？',
    answer:
      'カウンセリングで強引な勧誘などは一切行いません。そのため安心してご相談ください。じっくりご検討いただいた上で、ご入会についてご判断いただければと思います。',
  },
  {
    question: 'カウンセリングでは、どんなことを聞かれるのでしょうか？',
    answer:
      '現在のご状況や結婚への想い、相手に望まれること等をお伺いいたします。一方で、結婚相談所に対する質問やご不明点があれば、どんなことでもお気軽にご質問ください。',
  },
  {
    question: 'プライバシーはきちんと守られるのでしょうか？',
    answer:
      '「秘密厳守」を徹底しており、お預かりした個人情報は、厳重に管理されています。外部に漏れるようなことは一切ございません。安心してご利用ください。',
  },
  {
    question: '運動経験がなくても大丈夫ですか？',
    answer:
      'はい、全く問題ありません。専属トレーナーがあなたの体力レベルや生活スタイルに合わせた完全オーダーメイドのプログラムを作成します。無理のない範囲で、着実に成果を出せるようサポートします。',
  },
  {
    question: '婚活とダイエットを同時に進めることはできますか？',
    answer:
      'はい、当相談所の最大の特徴はまさにそこにあります。まずボディメイクで自信をつけてから婚活をスタートする方もいれば、並行して進める方もいらっしゃいます。あなたのペースに合わせて柔軟にプランを調整します。',
  },
  {
    question: 'IBJ加盟とは何ですか？',
    answer:
      'IBJ（日本結婚相談所連盟）は、国内最大級の結婚相談所ネットワークです。約10万人の会員が在籍しており、独身証明書や収入証明書の提出が必須のため、真剣に結婚を考える方だけが集まる安全な環境が整っています。',
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative flex min-h-screen items-center overflow-hidden py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-600 via-teal-500 to-cyan-500 text-white text-sm font-semibold mb-6 shadow-lg shadow-teal-500/25">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            よくあるご質問
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            お客様からよくいただくご質問をまとめました。<br className="hidden sm:block" />
            その他ご不明点があれば、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-6xl mx-auto">
          {/* Couple image - left side */}
          <div className="lg:col-span-2 relative hidden lg:block">
            <div className="sticky top-32">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-sky-400 via-teal-400 to-cyan-400 rounded-3xl opacity-20 blur-xl" />
                <div className="absolute -inset-1 bg-gradient-to-br from-sky-500 via-teal-500 to-cyan-500 rounded-3xl opacity-60" />
                
                {/* Image container */}
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src={sharedPhoto}
                      alt="幸せなカップル"
                      fill
                      className="object-cover grayscale contrast-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ accordion - right side */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-sky-100/50 px-0 overflow-hidden data-[state=open]:border-teal-300 data-[state=open]:shadow-xl data-[state=open]:shadow-teal-100/50 data-[state=open]:bg-white transition-all duration-300 hover:border-teal-200 hover:shadow-lg"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold py-5 px-6 hover:no-underline transition-colors [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-sky-50/80 [&[data-state=open]]:via-teal-50/60 [&[data-state=open]]:to-amber-50/40">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 via-teal-500 to-cyan-500 flex items-center justify-center text-white text-lg font-bold shadow-md shadow-teal-500/30">
                        Q
                      </span>
                      <span className="text-base md:text-lg pt-1.5">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 px-6">
                    <div className="flex gap-4 ml-0 md:ml-14">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-teal-100 flex items-center justify-center text-teal-600 text-lg font-bold">
                        A
                      </span>
                      <div className="text-muted-foreground leading-relaxed pt-2 text-base">
                        {faq.answer}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA after FAQ */}
            <div className="mt-10">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 p-1">
                <div className="bg-white rounded-[1.4rem] p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                        <MessageCircle className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-lg text-foreground">まだ疑問がありますか？</p>
                        <p className="text-muted-foreground">専門カウンセラーがお答えします</p>
                      </div>
                    </div>
                    <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:-translate-y-1 shadow-lg shadow-pink-500/25 px-8 ml-auto">
                      <Link href="#contact" className="gap-2">
                        <Sparkles className="h-4 w-4" />
                        無料で相談する
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
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
