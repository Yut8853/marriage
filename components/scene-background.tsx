'use client'

import { useEffect, useRef, useState } from 'react'

const unicornScript =
  '/unicornStudio.umd.js'
const scenePath = '/bokeh-gradient-scene.json'

type UnicornScene = {
  destroy?: () => void
}

type UnicornStudioApi = {
  addScene?: (options: {
    filePath: string
    element: HTMLElement
    scale?: number
    lazyLoad?: boolean
    ariaLabel?: string
    altText?: string
  }) => Promise<UnicornScene>
}

type DesignMode = 'elegant' | 'pop'

declare global {
  interface Window {
    UnicornStudio?: UnicornStudioApi
  }
}

let unicornLoader: Promise<void> | null = null

function loadUnicornStudio() {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (window.UnicornStudio?.addScene) {
    return Promise.resolve()
  }

  if (!unicornLoader) {
    unicornLoader = new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="${unicornScript}"]`
      )

      if (existingScript) {
        if (existingScript.dataset.loaded === 'true') {
          resolve()
          return
        }

        existingScript.addEventListener('load', () => resolve(), { once: true })
        existingScript.addEventListener('error', reject, { once: true })
        return
      }

      const script = document.createElement('script')
      script.src = unicornScript
      script.async = true
      script.onload = () => {
        script.dataset.loaded = 'true'
        resolve()
      }
      script.onerror = reject
      document.body.appendChild(script)
    })
  }

  return unicornLoader
}

export function SceneBackground({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [designMode, setDesignMode] = useState<DesignMode>('pop')

  useEffect(() => {
    const currentMode =
      document.documentElement.dataset.design === 'elegant' ? 'elegant' : 'pop'
    setDesignMode(currentMode)

    const handleDesignModeChange = (event: Event) => {
      const nextMode = (event as CustomEvent<DesignMode>).detail
      setDesignMode(nextMode === 'elegant' ? 'elegant' : 'pop')
    }

    window.addEventListener('design-mode-change', handleDesignModeChange)

    return () => {
      window.removeEventListener('design-mode-change', handleDesignModeChange)
    }
  }, [])

  useEffect(() => {
    if (designMode === 'pop') {
      return
    }

    let cancelled = false
    let scene: UnicornScene | null = null

    loadUnicornStudio()
      .then(() => {
        if (cancelled || !containerRef.current) {
          return
        }

        return window.UnicornStudio?.addScene?.({
          filePath: scenePath,
          element: containerRef.current,
          scale: 1,
          lazyLoad: false,
          ariaLabel: 'Bokeh gradient background',
          altText: 'Bokeh gradient background',
        })
      })
      .then((loadedScene) => {
        if (loadedScene) {
          if (cancelled) {
            loadedScene.destroy?.()
            return
          }

          scene = loadedScene
        }
      })
      .catch((error) => {
        console.error('Failed to load Unicorn Studio background', error)
      })

    return () => {
      cancelled = true
      scene?.destroy?.()
    }
  }, [designMode])

  return (
    <div
      ref={containerRef}
      className={`scene-background pointer-events-none fixed inset-0 z-0 h-screen overflow-hidden bg-[#dfe9ff] [&>canvas]:absolute [&>canvas]:inset-0 [&>canvas]:h-full! [&>canvas]:w-full! ${className}`}
    >
      <div className="scene-fallback absolute inset-0 bg-[linear-gradient(115deg,#b8c4ff_0%,#eef2ff_58%,#ddf9ff_100%)]" />
      <div className="pop-background absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-[#fbfeff]" />
        <div className="pop-grid absolute inset-0" />
        <div className="pop-shape pop-shape-sky" />
        <div className="pop-shape pop-shape-mint" />
        <div className="pop-shape pop-shape-coral" />
        <div className="pop-bubbles">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="pop-card pop-card-1">
          <span>BODY CHECK</span>
          <strong>-4.8kg</strong>
        </div>
        <div className="pop-card pop-card-2">
          <span>MEAL LOG</span>
          <strong>92%</strong>
        </div>
        <div className="pop-card pop-card-3">
          <span>PHOTO READY</span>
          <strong>UP</strong>
        </div>
        <div className="pop-card pop-card-4">
          <span>HABIT</span>
          <strong>21days</strong>
        </div>
        <div className="pop-measure pop-measure-1" />
        <div className="pop-measure pop-measure-2" />
      </div>
    </div>
  )
}
