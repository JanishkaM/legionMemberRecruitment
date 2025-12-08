// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  const handleInitialize = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center hex-pattern relative overflow-hidden">
      <div className="scanline" />
      
      {/* Hexagon background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/20"
            style={{
              width: '60px',
              height: '60px',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 15}%`,
              animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Shield logo */}
        <div className="relative mb-8 inline-block">
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 border-4 border-cyan-400/50 rounded-lg transform rotate-45 animate-pulse" />
            <div className="absolute inset-4 bg-cyan-400/10 rounded-lg transform rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-6xl font-bold mb-4 tracking-wider cyan-glow">
          #CREATIVE FORCE
        </h1>
        <p className="text-cyan-400 text-xl mb-12 tracking-widest">
          UNIVERSITY OF KELANIYA
        </p>

        {/* Initialize Button */}
        <button
          onClick={handleInitialize}
          className="btn-primary panel px-12 py-4 text-cyan-400 font-bold tracking-wider hover:bg-cyan-400/10 transition-all corner-deco group mb-8"
          style={{
            clipPath: 'polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)'
          }}
        >
          <span className="flex items-center justify-center">
            INITIALIZE
            <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>

        {/* Progress bar */}
        <div className="w-96 max-w-full mx-auto">
          <div className="panel p-4 corner-deco">
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-cyan-400">SYSTEM INTEGRITY:</span>
              <span className="text-cyan-400">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              VERS.25 VER.11 BUILD
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}