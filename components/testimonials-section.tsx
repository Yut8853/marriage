'use client'

import { Star, Quote, User } from 'lucide-react'

const testimonials = [
  {
    name: 'T.K さん',
    age: '34歳',
    gender: '男性',
    weightLoss: '-18kg',
    result: '成婚',
    quote: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。',
  },
  {
    name: 'M.S さん',
    age: '29歳',
    gender: '女性',
    weightLoss: '-12kg',
    result: '成婚',
    quote: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。',
  },
  {
    name: 'Y.H さん',
    age: '31歳',
    gender: '男性',
    weightLoss: '-15kg',
    result: '成婚',
    quote: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。',
  },
  {
    name: 'A.N さん',
    age: '27歳',
    gender: '女性',
    weightLoss: '-10kg',
    result: '成婚',
    quote: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。',
  },
  {
    name: 'K.M さん',
    age: '36歳',
    gender: '男性',
    weightLoss: '-20kg',
    result: '成婚',
    quote: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。',
  },
  {
    name: 'R.T さん',
    age: '30歳',
    gender: '女性',
    weightLoss: '-8kg',
    result: '成婚',
    quote: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。',
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[350px] bg-white rounded-3xl p-6 border border-border shadow-lg">
      {/* Quote icon */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-sky-500 flex items-center justify-center mb-4">
        <Quote className="h-5 w-5 text-white" />
      </div>
      
      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-foreground leading-relaxed mb-5 text-sm line-clamp-3">
        {testimonial.quote}
      </p>
      
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-100 to-teal-100 flex items-center justify-center border-2 border-teal-200">
          <User className="h-6 w-6 text-teal-500" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.age} / {testimonial.gender}</p>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-sky-100 to-teal-100 text-teal-600 text-xs font-bold">
            {testimonial.weightLoss}
          </div>
          <p className="text-xs text-sky-500 font-semibold mt-1">{testimonial.result}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="relative flex min-h-screen items-center overflow-hidden py-20 md:py-28">
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold mb-4">
              <Star className="h-4 w-4 fill-current" />
              <span>SUCCESS STORIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              成婚された会員様の声
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              実際にご成婚された会員様から、嬉しいお声をいただいています。
            </p>
          </div>
        </div>

        {/* Infinite scroll container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
          padding-left: 24px;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
