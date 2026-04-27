import { useState, useEffect } from 'react'

const EVENT_DATE = new Date('2026-05-24T20:00:00')

function pad(n) { return String(n).padStart(2, '0') }

function getTimeLeft() {
  const diff = EVENT_DATE - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const UNITS = ['Días', 'Horas', 'Min', 'Seg']

export default function Countdown() {
  const [t, setT] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const vals = [t.days, t.hours, t.minutes, t.seconds]

  return (
    <div className="cd-wrap">
      {vals.map((v, i) => (
        <div key={UNITS[i]} style={{ display: 'flex', alignItems: 'flex-end', gap: 'inherit' }}>
          <div className="cd-block">
            <span className="cd-num">{pad(v)}</span>
            <span className="cd-label">{UNITS[i]}</span>
          </div>
          {i < vals.length - 1 && <span className="cd-sep">:</span>}
        </div>
      ))}
    </div>
  )
}
