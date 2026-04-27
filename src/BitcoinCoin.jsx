export default function BitcoinCoin({ size = 120, opacity = 1, style = {}, tilt = false }) {
  const uid = Math.random().toString(36).slice(2, 6)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, display: 'block', ...style }}
    >
      <defs>
        <radialGradient id={`fg-${uid}`} cx="38%" cy="32%" r="68%">
          <stop offset="0%"   stopColor="#F08030" />
          <stop offset="60%"  stopColor="#D45A14" />
          <stop offset="100%" stopColor="#9C3205" />
        </radialGradient>
        <radialGradient id={`sh-${uid}`} cx="36%" cy="28%" r="50%">
          <stop offset="0%"   stopColor="rgba(255,210,130,0.4)" />
          <stop offset="100%" stopColor="rgba(255,210,130,0)" />
        </radialGradient>
        <clipPath id={`clip-${uid}`}>
          <circle cx="100" cy="100" r="84" />
        </clipPath>
      </defs>

      {/* 3-D edge / shadow — offset to simulate depth */}
      <circle cx="107" cy="107" r="84" fill="#1A0606" />
      <circle cx="104" cy="104" r="84" fill="#2E0D0D" />

      {/* Face */}
      <circle cx="100" cy="100" r="84" fill={`url(#fg-${uid})`} />

      {/* Outer ring stroke */}
      <circle cx="100" cy="100" r="84" fill="none" stroke="#1A0606" strokeWidth="5" />

      {/* Inner concentric groove */}
      <circle cx="100" cy="100" r="71" fill="none" stroke="#1A0606" strokeWidth="3" opacity="0.55" />
      <circle cx="100" cy="100" r="68" fill="none" stroke="rgba(255,170,70,0.2)" strokeWidth="1.5" />

      {/* Shine */}
      <circle cx="100" cy="100" r="84" fill={`url(#sh-${uid})`} />

      {/* Bitcoin ₿ symbol */}
      <g transform="translate(100,100)" fill="rgba(255,200,100,0.52)">
        {/* Vertical bar */}
        <rect x="-9" y="-42" width="13" height="84" rx="3" />
        {/* Top serif */}
        <rect x="-15" y="-50" width="9" height="11" rx="2" />
        {/* Bottom serif */}
        <rect x="-15" y="39" width="9" height="11" rx="2" />
        {/* Upper D-bump */}
        <path d="M4,-40 L4,2 Q42,2 42,-19 Q42,-40 4,-40 Z" />
        {/* Lower D-bump */}
        <path d="M4,4 L4,44 Q46,44 46,22 Q46,4 4,4 Z" />
        {/* Cutout upper */}
        <ellipse cx="20" cy="-19" rx="14" ry="15" fill={`url(#fg-${uid})`} opacity="0.9" />
        {/* Cutout lower */}
        <ellipse cx="22" cy="24" rx="15" ry="14" fill={`url(#fg-${uid})`} opacity="0.9" />
      </g>
    </svg>
  )
}
