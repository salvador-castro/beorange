import { useState, useRef, useCallback } from 'react'
import Countdown from './Countdown'
import BitcoinCoin from './BitcoinCoin'

// [top%, left%, size, opacity, animClass, delay, depth(1=slow..3=fast)]
const COINS = [
  { top: '-8%',  left: '-6%',  size: 260, op: 0.13, cls: 'coin-b', delay: 0,   depth: 1 },
  { top: '-4%',  left: '74%',  size: 230, op: 0.11, cls: 'coin-a', delay: 1.2, depth: 1 },
  { top: '62%',  left: '-4%',  size: 220, op: 0.12, cls: 'coin-c', delay: 2.5, depth: 1 },
  { top: '70%',  left: '78%',  size: 240, op: 0.10, cls: 'coin-a', delay: 0.8, depth: 1 },
  { top: '5%',   left: '30%',  size: 120, op: 0.18, cls: 'coin-b', delay: 0.5, depth: 2 },
  { top: '8%',   left: '60%',  size: 100, op: 0.20, cls: 'coin-a', delay: 1.8, depth: 2 },
  { top: '38%',  left: '84%',  size: 130, op: 0.16, cls: 'coin-c', delay: 3.0, depth: 2 },
  { top: '55%',  left: '10%',  size: 110, op: 0.19, cls: 'coin-b', delay: 1.4, depth: 2 },
  { top: '80%',  left: '38%',  size: 140, op: 0.15, cls: 'coin-a', delay: 2.2, depth: 2 },
  { top: '78%',  left: '60%',  size: 95,  op: 0.22, cls: 'coin-c', delay: 0.3, depth: 2 },
  { top: '22%',  left: '-2%',  size: 72,  op: 0.28, cls: 'coin-a', delay: 0.7, depth: 3 },
  { top: '28%',  left: '88%',  size: 68,  op: 0.30, cls: 'coin-b', delay: 1.6, depth: 3 },
  { top: '48%',  left: '50%',  size: 60,  op: 0.12, cls: 'coin-c', delay: 2.8, depth: 3 },
  { top: '90%',  left: '18%',  size: 76,  op: 0.26, cls: 'coin-a', delay: 0.2, depth: 3 },
  { top: '88%',  left: '84%',  size: 64,  op: 0.25, cls: 'coin-b', delay: 3.2, depth: 3 },
  { top: '14%',  left: '46%',  size: 52,  op: 0.20, cls: 'coin-a', delay: 1.0, depth: 3 },
]

const PARALLAX_FACTOR = { 1: 0.016, 2: 0.036, 3: 0.068 }

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [cardTilt, setCardTilt] = useState({ rx: 0, ry: 0 })
  const containerRef = useRef(null)
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    })
    const cr = cardRef.current?.getBoundingClientRect()
    if (cr) {
      setCardTilt({
        rx: ((e.clientY - cr.top  - cr.height / 2) / (cr.height / 2)) * -5,
        ry: ((e.clientX - cr.left - cr.width  / 2) / (cr.width  / 2)) *  5,
      })
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMouse({ x: 0, y: 0 })
    setCardTilt({ rx: 0, ry: 0 })
  }, [])

  return (
    <div
      ref={containerRef}
      className="noise"
      style={{ position: 'relative', minHeight: '100svh', background: '#190808', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Scattered parallax coins */}
      {COINS.map((c, i) => {
        const f = PARALLAX_FACTOR[c.depth]
        const rotation = (i * 27 - 50) % 50
        return (
          <div
            key={i}
            className={c.cls}
            style={{
              position: 'absolute', top: c.top, left: c.left,
              '--r': `${rotation}deg`,
              '--dur': `${6 + (i * 1.4) % 6}s`,
              animationDelay: `${c.delay}s`,
              transform: `translate(${mouse.x * f}px, ${mouse.y * f}px) rotate(${rotation}deg)`,
              transition: 'transform 0.1s linear',
              willChange: 'transform',
              pointerEvents: 'none',
              zIndex: c.depth,
            }}
          >
            <BitcoinCoin size={c.size} opacity={c.op} />
          </div>
        )
      })}

      {/* Ambient center glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(200,55,8,0.2) 0%, transparent 70%)' }} />

      {/* Header */}
      <header className="fade-up" style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 32px 10px' }}>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.28)' }}>
          The Bitcoiner Meeting
        </span>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.28)' }}>
          24 · 05 · 2026
        </span>
      </header>

      {/* Main glass card */}
      <main style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 20px' }}>
        <div
          ref={cardRef}
          className="glass-card"
          style={{
            padding: 'clamp(32px,5vw,52px) clamp(28px,6vw,60px)',
            maxWidth: 500, width: '100%',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
            transform: `perspective(900px) rotateX(${cardTilt.rx}deg) rotateY(${cardTilt.ry}deg)`,
            transition: 'transform 0.12s ease-out',
          }}
        >
          {/* Logo */}
          <div className="fade-up d1">
            <img
              src="/beorangelogo.png"
              alt="Be Orange"
              style={{ width: 'clamp(210px,48vw,360px)', filter: 'brightness(0) saturate(100%) invert(75%) sepia(40%) saturate(700%) hue-rotate(8deg) brightness(1.1)' }}
            />
          </div>

          {/* Próximamente */}
          <div className="fade-up d2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9 }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 'clamp(0.72rem,2vw,0.95rem)', letterSpacing: '0.42em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.36)' }}>
              Próximamente
            </span>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg,transparent,#F5A623 50%,transparent)' }} />
          </div>

          {/* Countdown */}
          <div className="fade-up d3">
            <Countdown />
          </div>

          {/* Description */}
          <div className="fade-up d4">
            <p style={{ fontFamily: "'Barlow',sans-serif", fontSize: 'clamp(0.79rem,2vw,0.9rem)', color: 'rgba(240,226,192,0.36)', lineHeight: 1.75, textAlign: 'center' }}>
              El encuentro definitivo para bitcoiners.<br />
              Pronto habrá más información.
            </p>
          </div>

          {/* Email capture */}
          <div className="fade-up d5" style={{ width: '100%' }}>
            {!submitted ? (
              <form onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true) }} style={{ display: 'flex', gap: 8 }}>
                <input type="email" placeholder="Tu email para novedades" value={email} onChange={e => setEmail(e.target.value)} className="notify-input" required />
                <button type="submit" className="notify-btn">Avisar</button>
              </form>
            ) : (
              <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F5A623', textAlign: 'center' }}>
                ¡Te avisaremos pronto!
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fade-up d6" style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '10px 32px 26px' }}>
        <div style={{ width: '100%', maxWidth: 320, height: 1, background: 'linear-gradient(90deg,transparent,rgba(240,226,192,0.07),transparent)', marginBottom: 2 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.59rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.55)' }}>Patrocinadores</span>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '0.88rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.85)' }}>RODERICH<sup style={{ fontSize: '0.55em' }}>S</sup></span>
          <span style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 400, fontSize: '0.84rem', color: 'rgba(240,226,192,0.85)' }}>plugin</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Telegram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>
          </a>
        </div>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.75)' }}>© 2026 Be Orange · The Bitcoiner Meeting</span>
        <a href="https://salvadorcastro.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Barlow',sans-serif", fontSize: '0.7rem', color: 'rgba(240,226,192,0.35)', textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='#F5A623'} onMouseLeave={e => e.target.style.color='rgba(240,226,192,0.35)'}>
          desarrollado por <strong style={{ fontWeight: 600 }}>salvaCastro</strong>
        </a>
      </footer>

    </div>
  )
}
