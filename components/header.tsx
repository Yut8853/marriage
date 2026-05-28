'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, Heart, Sparkles, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DesignModeToggle } from '@/components/design-mode-toggle'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: '当結婚相談所について' },
  { name: 'サービス・料金' },
  { name: 'ご成婚までのながれ' },
  { name: 'よくあるご質問' },
  { name: '記事一覧' },
]

const homeAnchors = [
  { name: 'トップ', href: '#home' },
  { name: 'よくあるお悩み', href: '#problem' },
  { name: '選ばれる理由', href: '#features' },
  { name: '料金プラン', href: '#pricing' },
  { name: '安心の実績', href: '#stats' },
  { name: '成婚までの流れ', href: '#flow' },
  { name: '会員様の声', href: '#testimonials' },
  { name: '相談所概要', href: '#about' },
  { name: 'よくあるご質問', href: '#faq' },
  { name: '無料相談', href: '#contact' },
]

const socialLinks = [
  { 
    name: 'X (Twitter)', 
    href: '#',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  { 
    name: 'Instagram', 
    href: '#',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    )
  },
  { 
    name: 'Facebook', 
    href: '#',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  { 
    name: 'TikTok', 
    href: '#',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    )
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHomeOpen, setIsHomeOpen] = useState(false)
  const homeMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHomeOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (
        homeMenuRef.current &&
        !homeMenuRef.current.contains(event.target as Node)
      ) {
        setIsHomeOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsHomeOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isHomeOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/35 bg-white/45 shadow-md shadow-slate-900/[0.03] backdrop-blur-sm'
          : 'border-transparent bg-transparent shadow-none backdrop-blur-0'
      }`}
    >
      {/* Top bar with SNS and contact */}
      <div
        className={`hidden transition-all duration-300 md:block ${
          isScrolled
            ? 'border-b border-white/25 bg-white/20 text-foreground'
            : 'border-b border-transparent bg-transparent text-foreground'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="tel:029-XXX-XXXX" className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-pink-600">
              <Phone className="h-3.5 w-3.5" />
              <span>029-XXX-XXXX</span>
            </Link>
            <span className="text-muted-foreground/60">|</span>
            <span className="text-xs text-muted-foreground">受付 10:00-19:00</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-teal-500 shadow-lg group-hover:shadow-teal-500/30 transition-shadow">
            <Heart className="h-5 w-5 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">Logo</span>
            </span>
            <span className="text-[10px] text-muted-foreground leading-none">ダイエット×婚活</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <div ref={homeMenuRef} className="relative">
            <button
              type="button"
              aria-expanded={isHomeOpen}
              onClick={() => setIsHomeOpen((open) => !open)}
              className="flex h-10 items-center gap-1 rounded-lg px-4 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50 hover:text-foreground"
            >
              ホーム
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isHomeOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`absolute left-0 top-full mt-5 w-56 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-xl shadow-slate-900/10 transition-all duration-300 ${
                isHomeOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-2 opacity-0'
              }`}
            >
              <div className="p-2">
                {homeAnchors.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsHomeOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50 hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navigation.map((item) => (
            <button
              key={item.name}
              type="button"
              aria-disabled="true"
              className="group relative h-10 overflow-hidden rounded-lg px-4 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50 hover:text-foreground"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-8">
                {item.name}
              </span>
              <span className="absolute inset-x-0 top-1/2 block translate-y-6 text-pink-600 transition-transform duration-300 group-hover:-translate-y-1/2">
                近日公開
              </span>
            </button>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <DesignModeToggle />
          <Button asChild variant="outline" size="sm" className="border-pink-400 text-pink-600 hover:bg-pink-50 hover:text-pink-600">
            <Link href="tel:029-XXX-XXXX" className="gap-2">
              <Phone className="h-4 w-4" />
              電話相談
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:-translate-y-1 shadow-lg shadow-pink-500/25 px-6 text-white hover:text-white">
            <Link href="#contact" className="gap-2 text-white hover:text-white">
              <Sparkles className="h-4 w-4" />
              無料相談（30秒）
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">メニューを開く</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[380px] p-0">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-border">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-teal-500">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-foreground">
                    Fit<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">Marriage</span>
                  </span>
                </Link>
              </div>
              
              {/* Navigation */}
              <nav className="flex-1 p-6">
                <div className="space-y-2">
                  <div className="overflow-hidden rounded-xl">
                    <button
                      type="button"
                      aria-expanded={isHomeOpen}
                      onClick={() => setIsHomeOpen((open) => !open)}
                      className="flex h-14 w-full items-center justify-between rounded-xl px-4 text-left text-lg font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50"
                    >
                      ホーム
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isHomeOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isHomeOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-1 rounded-xl bg-white px-2 pb-2 pt-1">
                          {homeAnchors.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50 hover:text-foreground"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-disabled="true"
                      className="group relative flex h-14 w-full items-center overflow-hidden rounded-xl px-4 text-left text-lg font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50"
                    >
                      <span className="block transition-transform duration-300 group-hover:-translate-y-10">
                        {item.name}
                      </span>
                      <span className="absolute left-4 top-1/2 block translate-y-8 text-pink-600 transition-transform duration-300 group-hover:-translate-y-1/2">
                        近日公開
                      </span>
                    </button>
                  ))}
                </div>

                {/* SNS Links in mobile menu */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50 hover:text-sky-700 hover:shadow-md"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
              
              {/* Footer CTA */}
              <div className="p-6 border-t border-border bg-gradient-to-br from-sky-50 to-teal-50">
                <div className="mb-4 flex justify-center">
                  <DesignModeToggle />
                </div>
                <Button asChild size="lg" className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:-translate-y-1 shadow-lg shadow-pink-500/25 py-6 text-white hover:text-white">
                  <Link href="#contact" onClick={() => setIsOpen(false)} className="gap-2 text-white hover:text-white">
                    <Sparkles className="h-5 w-5" />
                    無料相談（30秒）
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  強引な勧誘は一切ありません
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
