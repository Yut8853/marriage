'use client'

import { Palette } from 'lucide-react'
import { useEffect, useState } from 'react'

type DesignMode = 'elegant' | 'pop'

const storageKey = 'design-mode'

export function DesignModeToggle() {
  const [mode, setMode] = useState<DesignMode>('pop')

  useEffect(() => {
    const storedMode = window.localStorage.getItem(storageKey)
    const nextMode = storedMode === 'elegant' ? 'elegant' : 'pop'
    setMode(nextMode)
    document.documentElement.dataset.design = nextMode
    window.dispatchEvent(
      new CustomEvent('design-mode-change', { detail: nextMode })
    )
  }, [])

  const toggleMode = () => {
    const nextMode = mode === 'pop' ? 'elegant' : 'pop'
    setMode(nextMode)
    window.localStorage.setItem(storageKey, nextMode)
    document.documentElement.dataset.design = nextMode
    window.dispatchEvent(
      new CustomEvent('design-mode-change', { detail: nextMode })
    )
  }

  return (
    <button
      type="button"
      onClick={toggleMode}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-sky-200 bg-white/75 px-3 text-xs font-semibold text-sky-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white hover:text-teal-700 hover:shadow-md"
      aria-label="デザインを切り替える"
    >
      <Palette className="h-4 w-4" />
      <span>{mode === 'pop' ? 'ポップ' : '上品'}</span>
    </button>
  )
}
