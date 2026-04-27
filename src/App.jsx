import { useState } from 'react'
import Countdown from './Countdown'

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className="noise relative min-h-screen flex flex-col items-center justify-between overflow-hidden" style={{ background: '#1A0A0A' }}>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-float absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: '-200px',
            right: '-200px',
            background: 'radial-gradient(circle, rgba(232,98,42,0.35) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="animate-float-rev absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: '-150px',
            left: '-150px',
            background: 'radial-gradient(circle, rgba(245,166,35,0.25) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="animate-pulse-glow absolute rounded-full"
          style={{
            width: 800,
            height: 800,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="animate-orbit absolute"
          style={{
            width: 700,
            height: 700,
            top: '50%',
            left: '50%',
            marginTop: '-350px',
            marginLeft: '-350px',
            borderRadius: '50%',
            border: '1px solid rgba(245,166,35,0.1)',
          }}
        />
        <div
          className="absolute"
          style={{
            width: 1000,
            height: 1000,
            top: '50%',
            left: '50%',
            marginTop: '-500px',
            marginLeft: '-500px',
            borderRadius: '50%',
            border: '1px solid rgba(232,98,42,0.06)',
          }}
        />
      </div>

      {/* Header */}
      <header
        className="animate-fade-up relative z-10 w-full flex items-center justify-between px-8 pt-7 pb-4"
        style={{ opacity: 0 }}
      >
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.35)' }}>
          The Bitcoiner Meeting
        </span>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.35)' }}>
          24 · 05 · 2026
        </span>
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 gap-9 py-8">

        {/* Logo */}
        <div className="animate-fade-up delay-100" style={{ opacity: 0 }}>
          <img
            src="/beorangelogo.png"
            alt="Be Orange — The Bitcoiner Meeting"
            style={{
              width: 'clamp(240px, 52vw, 460px)',
              filter: 'brightness(0) saturate(100%) invert(80%) sepia(30%) saturate(800%) hue-rotate(10deg) brightness(1.1)',
            }}
          />
        </div>

        {/* Próximamente label */}
        <div className="animate-fade-up delay-200 flex flex-col items-center gap-3" style={{ opacity: 0 }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.4)' }}>
            Próximamente
          </span>
          <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg, transparent, #F5A623, transparent)' }} />
        </div>

        {/* Countdown */}
        <div className="animate-fade-up delay-300" style={{ opacity: 0 }}>
          <Countdown />
        </div>

        {/* Descripción */}
        <div className="animate-fade-up delay-400 max-w-xs" style={{ opacity: 0 }}>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 'clamp(0.82rem, 2.2vw, 0.93rem)', color: 'rgba(240,226,192,0.4)', lineHeight: 1.75, letterSpacing: '0.02em' }}>
            El encuentro definitivo para bitcoiners.<br />
            Pronto habrá más información.
          </p>
        </div>

        {/* Email */}
        <div className="animate-fade-up delay-500 w-full max-w-sm" style={{ opacity: 0 }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
              <input
                type="email"
                placeholder="Tu email para novedades"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="notify-input"
                style={{ flex: 1, padding: '12px 16px', borderRadius: 10, fontSize: '0.88rem' }}
                required
              />
              <button type="submit" className="notify-btn" style={{ padding: '12px 20px', borderRadius: 10, border: 'none' }}>
                Avisar
              </button>
            </form>
          ) : (
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F5A623' }}>
              ¡Te avisaremos pronto!
            </p>
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="animate-fade-up delay-600 relative z-10 w-full flex flex-col items-center gap-4 px-8 pb-8 pt-2" style={{ opacity: 0 }}>

        <div style={{ width: '100%', maxWidth: 360, height: 1, background: 'linear-gradient(90deg, transparent, rgba(240,226,192,0.08), transparent)', marginBottom: 4 }} />

        {/* Sponsors */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.25)' }}>
            Patrocinadores
          </span>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '0.88rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.45)' }}>
            RODERICH<sup style={{ fontSize: '0.55em' }}>S</sup>
          </span>
          <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400, fontSize: '0.85rem', letterSpacing: '0.03em', color: 'rgba(240,226,192,0.45)' }}>
            plugin
          </span>
        </div>

        {/* Socials */}
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4.5"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Telegram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>
            </svg>
          </a>
        </div>

        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,226,192,0.18)' }}>
          © 2026 Be Orange · The Bitcoiner Meeting
        </span>

      </footer>
    </div>
  )
}
