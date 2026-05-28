'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.055,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.35,
      smoothWheel: true,
    })

    let frameId = 0

    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      )

      if (!link) {
        return
      }

      const hash = link.hash
      const target = hash === '#' ? 0 : document.querySelector(hash)

      if (!target && hash !== '#') {
        return
      }

      event.preventDefault()

      lenis.scrollTo(target || 0, {
        offset: hash === '#' ? 0 : -96,
        duration: 1.35,
        easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
      })

      window.history.pushState(null, '', hash)
    }

    document.addEventListener('click', handleAnchorClick, true)

    return () => {
      document.removeEventListener('click', handleAnchorClick, true)
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return null
}
