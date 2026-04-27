import { useState, useEffect } from 'react'

const EVENT_DATE = new Date('2026-05-24T20:00:00')

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const diff = EVENT_DATE - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ]

  return (
    <div className="flex items-end gap-3 sm:gap-5">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-end gap-3 sm:gap-5">
          <div className="countdown-block">
            <span className="countdown-number">{pad(value)}</span>
            <span className="countdown-label">{label}</span>
          </div>
          {i < units.length - 1 && <span className="sep">:</span>}
        </div>
      ))}
    </div>
  )
}
