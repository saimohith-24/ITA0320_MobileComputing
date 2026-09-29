import { useState, useEffect } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────
type FrameId =
  | 'intro'
  | 'components'
  | 'analog'
  | 'digital'
  | 'packet'
  | 'summary'
  | 'detail-cell'
  | 'detail-ms'
  | 'detail-bts'
  | 'detail-bsc'
  | 'detail-msc'
  | 'detail-pstn'

// ─── Icons ───────────────────────────────────────────────────────────────────
function IconSignal({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h.01M7 20v-4M12 20v-8M17 20v-12M22 20V4" />
    </svg>
  )
}

function IconSmartphone({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

function IconTower({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M8 8l4 4 4-4" />
      <path d="M6 6l6-6 6 6" />
      <path d="M10 22h4" />
    </svg>
  )
}

function IconServer({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

function IconNetwork({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M12 7v6M5 17l7-4M19 17l-7-4" />
    </svg>
  )
}

function IconGlobe({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function IconHome({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function IconArrowLeft({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function IconChevronRight({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function IconPacket({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center my-1">
      <div className="flow-arrow flex flex-col items-center gap-0.5">
        <div style={{ width: 2, height: 18, background: '#1d4ed8', borderRadius: 1 }} />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="#1d4ed8">
          <path d="M6 8L0 0h12L6 8z" />
        </svg>
      </div>
      {label && <span className="mono text-[10px] text-blue-600 mt-0.5">{label}</span>}
    </div>
  )
}

function HArrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flow-arrow flex items-center gap-0.5">
        <div style={{ height: 2, width: 22, background: '#1d4ed8', borderRadius: 1 }} />
        <svg width="8" height="12" viewBox="0 0 8 12" fill="#1d4ed8">
          <path d="M8 6L0 0v12L8 6z" />
        </svg>
      </div>
      {label && <span className="mono text-[10px] text-blue-600">{label}</span>}
    </div>
  )
}

function SlideHeader({
  frame,
  total,
  title,
  subtitle,
}: {
  frame: number
  total: number
  title: string
  subtitle?: string
}) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <div className="mono text-[11px] text-blue-500 mb-1 tracking-widest uppercase">
          Frame {frame} / {total}
        </div>
        <h1 className="text-2xl font-bold text-slate-900 leading-tight">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>
      <div
        className="mono text-[10px] text-slate-400 text-right"
        style={{ letterSpacing: '0.05em' }}
      >
        Mobile Computing Lab
        <br />
        Cellular Systems
      </div>
    </div>
  )
}

function NavBar({
  current,
  onGo,
  onBack,
  showBack = false,
}: {
  current: FrameId
  onGo: (id: FrameId) => void
  onBack?: () => void
  showBack?: boolean
}) {
  const frames: { id: FrameId; label: string }[] = [
    { id: 'intro', label: 'Introduction' },
    { id: 'components', label: 'Components' },
    { id: 'analog', label: 'Analog CS' },
    { id: 'digital', label: 'Digital CS' },
    { id: 'packet', label: 'Packet Switched' },
    { id: 'summary', label: 'Summary' },
  ]

  const mainFrames = ['intro', 'components', 'analog', 'digital', 'packet', 'summary']
  const isMain = mainFrames.includes(current)

  return (
    <div
      className="flex items-center justify-between"
      style={{
        borderTop: '1px solid #e2e8f0',
        paddingTop: 12,
        marginTop: 'auto',
      }}
    >
      <div className="flex gap-1.5">
        {showBack && onBack && (
          <button
            onClick={onBack}
            className="btn-primary flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium"
            style={{ background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0' }}
          >
            <IconArrowLeft size={14} />
            Back
          </button>
        )}
        <button
          onClick={() => onGo('intro')}
          className="btn-primary flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium"
          style={{ background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0' }}
        >
          <IconHome size={14} />
          Home
        </button>
      </div>

      {isMain && (
        <div className="flex gap-1">
          {frames.map((f) => (
            <button
              key={f.id}
              onClick={() => onGo(f.id)}
              className="mono text-[10px] px-2.5 py-1 rounded transition-all"
              style={{
                background: current === f.id ? '#1d4ed8' : '#f1f5f9',
                color: current === f.id ? '#fff' : '#64748b',
                border: '1px solid',
                borderColor: current === f.id ? '#1d4ed8' : '#e2e8f0',
                fontWeight: current === f.id ? 600 : 400,
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Hexagon Cell ─────────────────────────────────────────────────────────────
function HexCell({
  x,
  y,
  size = 44,
  active = false,
  label,
  onClick,
}: {
  x: number
  y: number
  size?: number
  active?: boolean
  label?: string
  onClick?: () => void
}) {
  const r = size
  const h = r * Math.sqrt(3)
  const points = [
    [r * Math.cos((Math.PI / 6) * 0), r * Math.sin((Math.PI / 6) * 0)],
    [r * Math.cos((Math.PI / 6) * 2), r * Math.sin((Math.PI / 6) * 2)],
    [r * Math.cos((Math.PI / 6) * 4), r * Math.sin((Math.PI / 6) * 4)],
    [r * Math.cos((Math.PI / 6) * 6), r * Math.sin((Math.PI / 6) * 6)],
    [r * Math.cos((Math.PI / 6) * 8), r * Math.sin((Math.PI / 6) * 8)],
    [r * Math.cos((Math.PI / 6) * 10), r * Math.sin((Math.PI / 6) * 10)],
  ]
    .map(([px, py]) => `${x + px},${y + py}`)
    .join(' ')

  return (
    <g
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <polygon
        points={points}
        fill={active ? '#dbeafe' : '#f8fafc'}
        stroke={active ? '#1d4ed8' : '#94a3b8'}
        strokeWidth={active ? 1.5 : 1}
      />
      {/* BTS tower dot */}
      <circle cx={x} cy={y} r={4} fill={active ? '#1d4ed8' : '#64748b'} />
      {/* Wireless rings */}
      <circle cx={x} cy={y} r={10} fill="none" stroke={active ? '#3b82f6' : '#94a3b8'} strokeWidth={0.8} strokeDasharray="2 2" opacity={0.6} />
      <circle cx={x} cy={y} r={16} fill="none" stroke={active ? '#3b82f6' : '#cbd5e1'} strokeWidth={0.6} strokeDasharray="2 3" opacity={0.4} />
      {label && (
        <text x={x} y={y + r + 11} textAnchor="middle" fontSize={8} fill={active ? '#1d4ed8' : '#64748b'} fontFamily="JetBrains Mono">
          {label}
        </text>
      )}
    </g>
  )
}

// ─── FRAME 1: INTRODUCTION ────────────────────────────────────────────────────
function FrameIntro({ onGo }: { onGo: (id: FrameId) => void }) {
  return (
    <div className="flex flex-col h-full">
      <SlideHeader
        frame={1}
        total={6}
        title="Basic Cellular System"
        subtitle="Overview of cellular network architecture and system types"
      />

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Left – text intro */}
        <div className="flex flex-col gap-4" style={{ flex: '0 0 42%' }}>
          <div
            className="rounded-lg p-4"
            style={{ background: '#fff', border: '1px solid #e2e8f0' }}
          >
            <div
              className="mono text-[10px] font-semibold tracking-widest text-blue-500 mb-2 uppercase"
            >
              Definition
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              A <span className="font-semibold text-slate-900">cellular system</span> divides a
              geographical area into small regions called <em>cells</em>. Each cell is served by a{' '}
              <span className="font-semibold text-slate-900">base station</span> that communicates
              wirelessly with mobile users within its coverage area.
            </p>
          </div>

          <div
            className="rounded-lg p-4"
            style={{ background: '#fff', border: '1px solid #e2e8f0' }}
          >
            <div className="mono text-[10px] font-semibold tracking-widest text-blue-500 mb-3 uppercase">
              Key Principles
            </div>
            <div className="flex flex-col gap-2">
              {[
                { n: '01', t: 'Cell Reuse', d: 'Same frequencies reused in non-adjacent cells to increase capacity.' },
                { n: '02', t: 'Handoff', d: 'Mobile users move between cells without dropping the connection.' },
                { n: '03', t: 'Hierarchical', d: 'BTS → BSC → MSC → PSTN forms the backbone architecture.' },
              ].map((item) => (
                <div key={item.n} className="flex gap-3 items-start">
                  <span
                    className="mono text-[10px] font-semibold text-blue-400 pt-0.5"
                    style={{ minWidth: 20 }}
                  >
                    {item.n}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-slate-800">{item.t} — </span>
                    <span className="text-sm text-slate-600">{item.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Types */}
          <div className="mono text-[10px] font-semibold tracking-widest text-slate-400 uppercase mb-1">
            Two Major System Types
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => onGo('analog')}
              className="btn-primary flex-1 rounded-lg p-4 text-left"
              style={{ background: '#1d4ed8', border: 'none' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <IconSignal size={16} color="#fff" />
                <span className="mono text-[10px] font-semibold text-blue-200 uppercase tracking-wider">
                  Type 1
                </span>
              </div>
              <div className="text-sm font-bold text-white mb-1">Circuit-Switched</div>
              <div className="text-[11px] text-blue-200">
                Dedicated channel maintained for call duration. Analog &amp; Digital variants.
              </div>
              <div className="flex items-center gap-1 mt-2 text-blue-300 text-[11px] font-medium">
                Explore <IconChevronRight size={12} color="#93c5fd" />
              </div>
            </button>

            <button
              onClick={() => onGo('packet')}
              className="btn-primary flex-1 rounded-lg p-4 text-left"
              style={{ background: '#0f172a', border: '1px solid #334155' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <IconPacket size={16} color="#38bdf8" />
                <span className="mono text-[10px] font-semibold text-sky-400 uppercase tracking-wider">
                  Type 2
                </span>
              </div>
              <div className="text-sm font-bold text-white mb-1">Packet-Switched</div>
              <div className="text-[11px] text-slate-400">
                Data split into packets. Shared channel for efficient bandwidth use.
              </div>
              <div className="flex items-center gap-1 mt-2 text-sky-400 text-[11px] font-medium">
                Explore <IconChevronRight size={12} color="#38bdf8" />
              </div>
            </button>
          </div>
        </div>

        {/* Right – hex cell diagram */}
        <div
          className="flex-1 rounded-lg flex flex-col items-center justify-center relative"
          style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
        >
          <div className="mono text-[10px] text-slate-400 uppercase tracking-widest absolute top-3 left-4">
            Cellular Coverage Grid
          </div>
          <svg viewBox="0 0 360 260" width="100%" style={{ maxWidth: 360 }}>
            {/* Hexagon grid – flat-top arrangement */}
            <HexCell x={80}  y={75}  size={40} active label="Cell A" />
            <HexCell x={149} y={75}  size={40} label="Cell B" />
            <HexCell x={218} y={75}  size={40} label="Cell C" />
            <HexCell x={287} y={75}  size={40} active label="Cell D" />
            <HexCell x={114} y={143} size={40} label="Cell E" />
            <HexCell x={183} y={143} size={40} active label="Cell F" />
            <HexCell x={252} y={143} size={40} label="Cell G" />
            <HexCell x={80}  y={211} size={40} label="Cell H" />
            <HexCell x={149} y={211} size={40} active label="Cell I" />
            <HexCell x={218} y={211} size={40} label="Cell J" />
            <HexCell x={287} y={211} size={40} label="Cell K" />

            {/* Mobile user icons in active cells */}
            <g>
              <circle cx={65} cy={60} r={5} fill="#1d4ed8" opacity={0.7} />
              <line x1={65} y1={65} x2={80} y2={75} stroke="#3b82f6" strokeWidth={1} strokeDasharray="3 2" opacity={0.5} />
            </g>
            <g>
              <circle cx={195} cy={128} r={5} fill="#1d4ed8" opacity={0.7} />
              <line x1={195} y1={133} x2={183} y2={143} stroke="#3b82f6" strokeWidth={1} strokeDasharray="3 2" opacity={0.5} />
            </g>
          </svg>

          <div className="flex items-center gap-4 absolute bottom-3">
            <div className="flex items-center gap-1.5">
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1d4ed8' }} />
              <span className="mono text-[9px] text-slate-500">BTS (Base Station)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1d4ed8', opacity: 0.5 }} />
              <span className="mono text-[9px] text-slate-500">Mobile User</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div style={{ width: 14, height: 14, background: '#dbeafe', border: '1.5px solid #1d4ed8' }} />
              <span className="mono text-[9px] text-slate-500">Active Cell</span>
            </div>
          </div>
        </div>
      </div>

      <NavBar current="intro" onGo={onGo} />
    </div>
  )
}

// ─── FRAME 2: COMPONENTS ─────────────────────────────────────────────────────
function FrameComponents({ onGo }: { onGo: (id: FrameId) => void }) {
  const components = [
    {
      id: 'detail-ms' as FrameId,
      abbr: 'MS',
      name: 'Mobile Station',
      desc: 'User\'s mobile device that communicates wirelessly with the network',
      icon: <IconSmartphone size={18} color="#fff" />,
      color: '#1d4ed8',
    },
    {
      id: 'detail-bts' as FrameId,
      abbr: 'BTS',
      name: 'Base Transceiver Station',
      desc: 'Communicates wirelessly with mobile stations in its cell coverage area',
      icon: <IconTower size={18} color="#fff" />,
      color: '#0369a1',
    },
    {
      id: 'detail-bsc' as FrameId,
      abbr: 'BSC',
      name: 'Base Station Controller',
      desc: 'Controls multiple BTSs, manages radio resources and handoffs',
      icon: <IconServer size={18} color="#fff" />,
      color: '#0284c7',
    },
    {
      id: 'detail-msc' as FrameId,
      abbr: 'MSC',
      name: 'Mobile Switching Center',
      desc: 'Manages switching, mobility, and connection to the external network',
      icon: <IconNetwork size={18} color="#fff" />,
      color: '#0891b2',
    },
    {
      id: 'detail-pstn' as FrameId,
      abbr: 'PSTN',
      name: 'Public Telephone System',
      desc: 'The wired telephone and Internet backbone that connects to other networks',
      icon: <IconGlobe size={18} color="#fff" />,
      color: '#0e7490',
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <SlideHeader
        frame={2}
        total={6}
        title="Components of a Basic Cellular System"
        subtitle="Architecture hierarchy — click any component for details"
      />

      <div className="flex gap-5 flex-1 min-h-0">
        {/* Left: vertical architecture flow */}
        <div className="flex flex-col items-center justify-center gap-0" style={{ flex: '0 0 46%' }}>
          {components.map((comp, idx) => (
            <div key={comp.id} className="flex flex-col items-center w-full">
              <button
                onClick={() => onGo(comp.id)}
                className="arch-card w-full rounded-lg px-4 py-3 flex items-center gap-3 text-left"
                style={{ background: '#fff', border: `1.5px solid ${comp.color}22`, maxWidth: 320 }}
              >
                <div
                  className="rounded flex items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    background: comp.color,
                    flexShrink: 0,
                  }}
                >
                  {comp.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="mono text-[11px] font-semibold" style={{ color: comp.color }}>
                      {comp.abbr}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{comp.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{comp.desc}</p>
                </div>
                <IconChevronRight size={14} color="#94a3b8" />
              </button>
              {idx < components.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        {/* Right: hex cell diagram with labels */}
        <div className="flex-1 flex flex-col rounded-lg" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div className="mono text-[10px] text-slate-400 uppercase tracking-widest p-3 pb-0">
            Network Topology — Multi-Cell View
          </div>
          <div className="flex-1 flex items-center justify-center">
            <svg viewBox="0 0 330 260" width="100%">
              {/* Cells */}
              <HexCell x={75}  y={80}  size={36} active label="Cell 1" />
              <HexCell x={137} y={80}  size={36} label="Cell 2" />
              <HexCell x={199} y={80}  size={36} active label="Cell 3" />
              <HexCell x={261} y={80}  size={36} label="Cell 4" />
              <HexCell x={106} y={142} size={36} label="Cell 5" />
              <HexCell x={168} y={142} size={36} label="Cell 6" />
              <HexCell x={230} y={142} size={36} active label="Cell 7" />

              {/* BSC node */}
              <rect x={130} y={195} width={70} height={28} rx={4} fill="#0284c7" />
              <text x={165} y={212} textAnchor="middle" fontSize={10} fill="white" fontFamily="JetBrains Mono" fontWeight="600">BSC</text>

              {/* BSC lines */}
              <line x1={75}  y1={116} x2={145} y2={195} stroke="#0284c7" strokeWidth={1} strokeDasharray="4 2" opacity={0.5} />
              <line x1={199} y1={116} x2={175} y2={195} stroke="#0284c7" strokeWidth={1} strokeDasharray="4 2" opacity={0.5} />
              <line x1={230} y1={178} x2={190} y2={195} stroke="#0284c7" strokeWidth={1} strokeDasharray="4 2" opacity={0.5} />

              {/* MSC node */}
              <rect x={125} y={235} width={80} height={22} rx={4} fill="#0891b2" />
              <text x={165} y={250} textAnchor="middle" fontSize={10} fill="white" fontFamily="JetBrains Mono" fontWeight="600">MSC → PSTN</text>

              {/* BSC → MSC arrow */}
              <line x1={165} y1={223} x2={165} y2={235} stroke="#0891b2" strokeWidth={1.5} />
              <polygon points="165,235 162,230 168,230" fill="#0891b2" />
            </svg>
          </div>

          <div
            className="p-3 pt-0"
            style={{ borderTop: '1px solid #e2e8f0' }}
          >
            <div className="mono text-[9px] text-slate-400 uppercase mb-1.5">Legend</div>
            <div className="flex flex-wrap gap-3">
              {[
                { color: '#1d4ed8', label: 'BTS (dot in hex)' },
                { color: '#0284c7', label: 'BSC node' },
                { color: '#0891b2', label: 'MSC → PSTN' },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: l.color }} />
                  <span className="mono text-[9px] text-slate-500">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NavBar current="components" onGo={onGo} />
    </div>
  )
}

// ─── FRAME 3: ANALOG CIRCUIT-SWITCHED ────────────────────────────────────────
function FrameAnalog({ onGo }: { onGo: (id: FrameId) => void }) {
  return (
    <div className="flex flex-col h-full">
      <SlideHeader
        frame={3}
        total={6}
        title="Analog Circuit-Switched System"
        subtitle="First-generation (1G) cellular — dedicated channel for each voice call"
      />

      <div className="flex gap-5 flex-1 min-h-0">
        {/* Diagram */}
        <div
          className="flex-1 rounded-lg flex flex-col"
          style={{ background: '#fff', border: '1px solid #e2e8f0' }}
        >
          <div className="mono text-[10px] text-slate-400 uppercase tracking-widest p-4 pb-0">
            Architecture Diagram
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 p-6">
            {/* Mobile Unit */}
            <div
              className="arch-card rounded-xl px-8 py-4 text-center"
              style={{ background: '#dbeafe', border: '2px solid #1d4ed8', minWidth: 220 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <IconSmartphone size={20} color="#1d4ed8" />
                <span className="text-base font-bold text-blue-900">Mobile Unit</span>
              </div>
              <span className="mono text-[10px] text-blue-600">Analog radio transceiver</span>
            </div>

            <Arrow label="AMPS radio channel" />

            {/* Cell Site */}
            <div
              className="arch-card rounded-xl px-8 py-4 text-center"
              style={{ background: '#e0f2fe', border: '2px solid #0369a1', minWidth: 220 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <IconTower size={20} color="#0369a1" />
                <span className="text-base font-bold text-sky-900">Cell Site</span>
              </div>
              <span className="mono text-[10px] text-sky-600">Radio antenna &amp; base transceiver</span>
            </div>

            <Arrow label="dedicated circuit (copper/microwave)" />

            {/* MTSO */}
            <div
              className="arch-card rounded-xl px-8 py-4 text-center"
              style={{ background: '#ccfbf1', border: '2px solid #0891b2', minWidth: 220 }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <IconServer size={20} color="#0891b2" />
                <span className="text-base font-bold text-teal-900">MTSO</span>
              </div>
              <span className="mono text-[10px] text-teal-600">Mobile Telephone Switching Office</span>
            </div>

            <Arrow label="PSTN trunk" />

            {/* PSTN */}
            <div
              className="rounded-xl px-8 py-3 text-center"
              style={{ background: '#f1f5f9', border: '1.5px solid #94a3b8', minWidth: 220 }}
            >
              <div className="flex items-center justify-center gap-2">
                <IconGlobe size={16} color="#64748b" />
                <span className="text-sm font-semibold text-slate-600">Public Telephone Network</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right info panels */}
        <div className="flex flex-col gap-4" style={{ flex: '0 0 40%' }}>
          <div
            className="rounded-lg p-4"
            style={{ background: '#fff', border: '1px solid #e2e8f0' }}
          >
            <div className="mono text-[10px] text-blue-500 uppercase tracking-widest font-semibold mb-3">
              How It Works
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { step: '1', text: 'Mobile unit transmits analog voice signal to the nearest cell site.' },
                { step: '2', text: 'Cell site forwards signal to MTSO via a dedicated backhaul circuit.' },
                { step: '3', text: 'MTSO switches the call to the PSTN or to another mobile unit.' },
                { step: '4', text: 'A dedicated traffic channel is held for the entire call duration.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-2.5">
                  <div
                    className="mono text-[11px] font-bold text-blue-600 rounded-full flex items-center justify-center"
                    style={{ width: 20, height: 20, background: '#dbeafe', flexShrink: 0, fontSize: 10 }}
                  >
                    {s.step}
                  </div>
                  <span className="text-sm text-slate-700 leading-snug">{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg p-4"
            style={{ background: '#fff', border: '1px solid #e2e8f0' }}
          >
            <div className="mono text-[10px] text-blue-500 uppercase tracking-widest font-semibold mb-3">
              Key Characteristics
            </div>
            <div className="flex flex-col gap-2">
              {[
                { k: 'Generation', v: '1G (First Generation)' },
                { k: 'Modulation', v: 'FM (Frequency Modulation)' },
                { k: 'Standard', v: 'AMPS (Advanced Mobile Phone System)' },
                { k: 'Channel', v: 'Dedicated 30 kHz per call' },
                { k: 'Quality', v: 'Susceptible to noise and interception' },
              ].map((item) => (
                <div key={item.k} className="flex justify-between items-start">
                  <span className="mono text-[11px] text-slate-400">{item.k}</span>
                  <span className="text-sm text-slate-800 font-medium text-right">{item.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg p-3 flex items-start gap-3"
            style={{ background: '#fef9c3', border: '1px solid #fde047' }}
          >
            <div style={{ fontSize: 16 }}>⚡</div>
            <p className="text-[12px] text-yellow-800 leading-relaxed">
              <strong>Dedicated Channel:</strong> A single frequency pair is exclusively allocated for the call from setup to termination — no resource sharing.
            </p>
          </div>
        </div>
      </div>

      <NavBar current="analog" onGo={onGo} />
    </div>
  )
}

// ─── FRAME 4: DIGITAL CIRCUIT-SWITCHED ───────────────────────────────────────
function FrameDigital({ onGo }: { onGo: (id: FrameId) => void }) {
  return (
    <div className="flex flex-col h-full">
      <SlideHeader
        frame={4}
        total={6}
        title="Digital Circuit-Switched System"
        subtitle="Second-generation (2G) cellular — GSM/IS-136 digital voice architecture"
      />

      <div className="flex gap-5 flex-1 min-h-0">
        {/* Diagram */}
        <div
          className="flex-1 rounded-lg flex flex-col"
          style={{ background: '#fff', border: '1px solid #e2e8f0' }}
        >
          <div className="mono text-[10px] text-slate-400 uppercase tracking-widest p-4 pb-2">
            Communication Path: MS → BTS → BSC → Switching Subsystem
          </div>

          {/* Horizontal flow diagram */}
          <div className="flex-1 flex flex-col justify-center px-6 pb-4">
            {/* Top row – horizontal flow */}
            <div className="flex items-center justify-center gap-1 mb-8">
              {[
                { abbr: 'MS', name: 'Mobile Station', color: '#1d4ed8', bg: '#dbeafe', icon: <IconSmartphone size={20} color="#1d4ed8" /> },
                { abbr: 'BTS', name: 'Base Transceiver Station', color: '#0369a1', bg: '#e0f2fe', icon: <IconTower size={20} color="#0369a1" /> },
                { abbr: 'BSC', name: 'Base Station Controller', color: '#0284c7', bg: '#f0f9ff', icon: <IconServer size={20} color="#0284c7" /> },
                { abbr: 'SS', name: 'Switching Subsystem', color: '#0891b2', bg: '#ccfbf1', icon: <IconNetwork size={20} color="#0891b2" /> },
              ].map((item, idx, arr) => (
                <div key={item.abbr} className="flex items-center">
                  <div
                    className="arch-card rounded-lg flex flex-col items-center gap-1.5 p-3"
                    style={{
                      background: item.bg,
                      border: `2px solid ${item.color}`,
                      minWidth: 90,
                    }}
                  >
                    {item.icon}
                    <span className="mono text-[11px] font-bold" style={{ color: item.color }}>{item.abbr}</span>
                    <span className="text-[9px] text-slate-600 text-center leading-tight">{item.name}</span>
                  </div>
                  {idx < arr.length - 1 && <HArrow />}
                </div>
              ))}
            </div>

            {/* Subsystem breakdown */}
            <div className="rounded-lg p-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div className="mono text-[10px] text-slate-400 uppercase tracking-widest mb-3">
                Switching Subsystem — Internal Components
              </div>
              <div className="flex gap-3">
                {[
                  { abbr: 'MSC', name: 'Mobile Switching Center', desc: 'Core circuit switch and mobility manager' },
                  { abbr: 'HLR', name: 'Home Location Register', desc: 'Subscriber database — permanent records' },
                  { abbr: 'VLR', name: 'Visitor Location Register', desc: 'Temporary records for roaming users' },
                  { abbr: 'AuC', name: 'Authentication Center', desc: 'Security — SIM authentication and ciphering' },
                ].map((item) => (
                  <div
                    key={item.abbr}
                    className="arch-card flex-1 rounded p-2.5"
                    style={{ background: '#fff', border: '1px solid #e2e8f0' }}
                  >
                    <div className="mono text-[11px] font-bold text-slate-700 mb-0.5">{item.abbr}</div>
                    <div className="text-[11px] font-medium text-slate-800 mb-1">{item.name}</div>
                    <div className="text-[10px] text-slate-500 leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex flex-col gap-4" style={{ flex: '0 0 38%' }}>
          <div className="rounded-lg p-4" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
            <div className="mono text-[10px] text-blue-500 uppercase tracking-widest font-semibold mb-3">
              Comparison with Analog
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Signal Type', analog: 'Analog FM', digital: 'Digital (PCM)' },
                { label: 'Modulation', analog: 'FM', digital: 'GMSK / QPSK' },
                { label: 'Multiple Access', analog: 'FDMA', digital: 'TDMA / CDMA' },
                { label: 'Voice Quality', analog: 'Lower', digital: 'Higher (compressed)' },
                { label: 'Security', analog: 'None', digital: 'Encryption (A5)' },
                { label: 'Data Services', analog: 'None', digital: 'SMS, basic data' },
              ].map((row) => (
                <div key={row.label} className="flex gap-2 text-[11px]">
                  <span className="mono text-slate-400 w-28 flex-shrink-0">{row.label}</span>
                  <span className="text-red-500 w-20 flex-shrink-0">{row.analog}</span>
                  <span className="text-green-700 font-medium">{row.digital}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg p-4" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
            <div className="mono text-[10px] text-blue-500 uppercase tracking-widest font-semibold mb-3">
              GSM Frame Structure
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded p-2" style={{ background: '#dbeafe' }}>
                <div className="mono text-[9px] text-blue-700 mb-1">TDMA Frame (4.615 ms)</div>
                <div className="flex gap-0.5">
                  {[0,1,2,3,4,5,6,7].map((slot) => (
                    <div
                      key={slot}
                      className="flex-1 rounded-sm flex items-center justify-center mono text-[8px] font-bold"
                      style={{
                        background: slot === 2 ? '#1d4ed8' : '#bfdbfe',
                        color: slot === 2 ? '#fff' : '#1e40af',
                        height: 22,
                      }}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
                <div className="mono text-[9px] text-blue-600 mt-1">Slot 2 = dedicated time slot for this user</div>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg p-3 flex items-start gap-3"
            style={{ background: '#f0fdf4', border: '1px solid #86efac' }}
          >
            <div style={{ fontSize: 16 }}>📡</div>
            <p className="text-[12px] text-green-800 leading-relaxed">
              <strong>Digital advantage:</strong> Digitization enables compression, encryption, error correction, and multiple users per channel via TDMA/CDMA multiplexing.
            </p>
          </div>
        </div>
      </div>

      <NavBar current="digital" onGo={onGo} />
    </div>
  )
}

// ─── FRAME 5: PACKET-SWITCHED ─────────────────────────────────────────────────
function FramePacket({ onGo }: { onGo: (id: FrameId) => void }) {
  return (
    <div className="flex flex-col h-full">
      <SlideHeader
        frame={5}
        total={6}
        title="Packet-Switched Cellular System"
        subtitle="3G UMTS/WCDMA architecture — IP-based packet data network"
      />

      <div className="flex gap-5 flex-1 min-h-0">
        {/* Diagram */}
        <div className="flex-1 rounded-lg flex flex-col" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
          <div className="mono text-[10px] text-slate-400 uppercase tracking-widest p-4 pb-2">
            UMTS Packet Core Architecture — Packet Flow
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-0 px-4 pb-4">
            {/* Row 1: MS + Node B */}
            <div className="flex items-center gap-2 w-full justify-center mb-0">
              <div
                className="arch-card rounded-lg p-3 text-center"
                style={{ background: '#dbeafe', border: '2px solid #1d4ed8', minWidth: 100 }}
              >
                <IconSmartphone size={20} color="#1d4ed8" />
                <div className="mono text-[11px] font-bold text-blue-800 mt-1">MS</div>
                <div className="text-[9px] text-blue-600">Mobile Station</div>
              </div>

              <div className="flex flex-col items-center">
                <HArrow label="Uu (air interface)" />
              </div>

              <div
                className="arch-card rounded-lg p-3 text-center"
                style={{ background: '#e0f2fe', border: '2px solid #0369a1', minWidth: 100 }}
              >
                <IconTower size={20} color="#0369a1" />
                <div className="mono text-[11px] font-bold text-sky-800 mt-1">Node B</div>
                <div className="text-[9px] text-sky-600">Radio base station</div>
              </div>

              <div className="flex flex-col items-center">
                <HArrow label="Iub interface" />
              </div>

              <div
                className="arch-card rounded-lg p-3 text-center"
                style={{ background: '#f0f9ff', border: '2px solid #0284c7', minWidth: 100 }}
              >
                <IconServer size={20} color="#0284c7" />
                <div className="mono text-[11px] font-bold text-sky-900 mt-1">RNC</div>
                <div className="text-[9px] text-sky-600">Radio Network Controller</div>
              </div>
            </div>

            <Arrow label="Iu-PS interface" />

            {/* Row 2: SGSN + GGSN */}
            <div className="flex items-center gap-3">
              <div
                className="arch-card rounded-lg p-3 text-center"
                style={{ background: '#ccfbf1', border: '2px solid #0891b2', minWidth: 120 }}
              >
                <IconNetwork size={20} color="#0891b2" />
                <div className="mono text-[11px] font-bold text-teal-800 mt-1">SGSN</div>
                <div className="text-[9px] text-teal-600">Serving GPRS Support Node</div>
              </div>

              <HArrow label="Gn interface" />

              <div
                className="arch-card rounded-lg p-3 text-center"
                style={{ background: '#d1fae5', border: '2px solid #059669', minWidth: 120 }}
              >
                <IconGlobe size={20} color="#059669" />
                <div className="mono text-[11px] font-bold text-green-800 mt-1">GGSN</div>
                <div className="text-[9px] text-green-600">Gateway GPRS Support Node</div>
              </div>
            </div>

            <Arrow label="Gi interface" />

            {/* External */}
            <div
              className="rounded-xl px-10 py-3 text-center"
              style={{ background: '#f1f5f9', border: '1.5px solid #94a3b8', minWidth: 200 }}
            >
              <div className="flex items-center justify-center gap-2">
                <IconGlobe size={16} color="#64748b" />
                <span className="text-sm font-semibold text-slate-600">External IP Network (Internet)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right info */}
        <div className="flex flex-col gap-4" style={{ flex: '0 0 40%' }}>
          <div className="rounded-lg p-4" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
            <div className="mono text-[10px] text-blue-500 uppercase tracking-widest font-semibold mb-3">
              Component Roles
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { abbr: 'MS', desc: 'User equipment with packet data capabilities (smartphone, tablet).' },
                { abbr: 'Node B', desc: 'Physical radio base station; handles WCDMA air interface encoding.' },
                { abbr: 'RNC', desc: 'Manages radio resources for one or more Node Bs; controls handovers.' },
                { abbr: 'SGSN', desc: 'Tracks MS location, handles security, and routes packets within the GPRS network.' },
                { abbr: 'GGSN', desc: 'Gateway to external IP networks; assigns IP addresses to MS.' },
              ].map((item) => (
                <div key={item.abbr} className="flex gap-2">
                  <span
                    className="mono text-[10px] font-bold text-blue-600"
                    style={{ minWidth: 46, flexShrink: 0 }}
                  >
                    {item.abbr}
                  </span>
                  <span className="text-[11px] text-slate-600 leading-snug">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg p-4" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
            <div className="mono text-[10px] text-blue-500 uppercase tracking-widest font-semibold mb-3">
              Packet vs. Circuit Comparison
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Channel', cs: 'Dedicated', ps: 'Shared (statistical multiplex)' },
                { label: 'Billing', cs: 'Per minute', ps: 'Per megabyte / flat rate' },
                { label: 'Latency', cs: 'Low (constant)', ps: 'Variable (QoS-managed)' },
                { label: 'Data rate', cs: 'Fixed', ps: 'Burst (up to full capacity)' },
              ].map((row) => (
                <div key={row.label} className="flex gap-2 text-[11px]">
                  <span className="mono text-slate-400 w-20 flex-shrink-0">{row.label}</span>
                  <span className="text-red-500 w-20 flex-shrink-0">{row.cs}</span>
                  <span className="text-green-700 font-medium">{row.ps}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg p-3 flex items-start gap-3"
            style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}
          >
            <div style={{ fontSize: 16 }}>📦</div>
            <p className="text-[12px] text-blue-800 leading-relaxed">
              <strong>Packet switching</strong> allows multiple users to share the same radio channel simultaneously, dramatically increasing network efficiency for data services.
            </p>
          </div>
        </div>
      </div>

      <NavBar current="packet" onGo={onGo} />
    </div>
  )
}

// ─── FRAME 6: SUMMARY ─────────────────────────────────────────────────────────
function FrameSummary({ onGo }: { onGo: (id: FrameId) => void }) {
  return (
    <div className="flex flex-col h-full">
      <SlideHeader
        frame={6}
        total={6}
        title="Basic Cellular System — Summary"
        subtitle="Mobile Computing Laboratory Record — Experiment Conclusions"
      />

      <div className="flex flex-col gap-4 flex-1 min-h-0">
        {/* Key statement */}
        <div
          className="rounded-lg p-5"
          style={{ background: '#1d4ed8', border: 'none' }}
        >
          <p className="text-sm text-blue-100 leading-relaxed text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
            A <span className="font-bold text-white">cellular system</span> provides wireless communication by dividing a geographical area into cells and connecting mobile stations through base stations and switching/network components.
          </p>
        </div>

        {/* Full architecture chain */}
        <div className="rounded-lg p-5" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
          <div className="mono text-[10px] text-slate-400 uppercase tracking-widest mb-4">
            Complete Network Architecture Chain
          </div>
          <div className="flex items-center justify-center gap-1 flex-wrap">
            {[
              { abbr: 'MS', name: 'Mobile Station', color: '#1d4ed8', bg: '#dbeafe' },
              { abbr: 'BTS', name: 'Base Transceiver Station', color: '#0369a1', bg: '#e0f2fe' },
              { abbr: 'BSC', name: 'Base Station Controller', color: '#0284c7', bg: '#f0f9ff' },
              { abbr: 'MSC', name: 'Mobile Switching Center', color: '#0891b2', bg: '#ccfbf1' },
              { abbr: 'PSTN', name: 'External/Wired Network', color: '#059669', bg: '#d1fae5' },
            ].map((item, idx, arr) => (
              <div key={item.abbr} className="flex items-center">
                <div
                  className="arch-card rounded-lg px-4 py-3 text-center"
                  style={{ background: item.bg, border: `2px solid ${item.color}` }}
                >
                  <div className="mono text-[12px] font-bold" style={{ color: item.color }}>{item.abbr}</div>
                  <div className="text-[9px] text-slate-600 mt-0.5" style={{ maxWidth: 80 }}>{item.name}</div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flow-arrow mx-1">
                    <svg width="24" height="14" viewBox="0 0 24 14">
                      <line x1="0" y1="7" x2="18" y2="7" stroke="#1d4ed8" strokeWidth="2" />
                      <polygon points="18,3 24,7 18,11" fill="#1d4ed8" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Summary table */}
        <div className="flex gap-4 flex-1 min-h-0">
          <div className="flex-1 rounded-lg p-4" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
            <div className="mono text-[10px] text-blue-500 uppercase tracking-widest font-semibold mb-3">
              System Types Comparison
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
              <thead>
                <tr>
                  {['Feature', 'Analog CS (1G)', 'Digital CS (2G)', 'Packet Switched (3G)'].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '6px 8px',
                        background: '#f1f5f9',
                        fontFamily: 'JetBrains Mono',
                        fontSize: 9,
                        color: '#64748b',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
                {[
                  ['Switching', 'Circuit', 'Circuit', 'Packet'],
                  ['Standard', 'AMPS', 'GSM/IS-136', 'GPRS/UMTS'],
                  ['Multiplexing', 'FDMA', 'TDMA/CDMA', 'CDMA/OFDM'],
                  ['Voice Quality', 'Low', 'High', 'VoIP-based'],
                  ['Data Speed', '~2.4 kbps', '~14.4 kbps', '~2–42 Mbps'],
                  ['Security', 'None', 'Encryption', 'Strong (IPSec)'],
                ].map((row, ridx) => (
                  <tr key={ridx} style={{ background: ridx % 2 === 0 ? '#fff' : '#f8fafc' }}>
                    {row.map((cell, cidx) => (
                      <td
                        key={cidx}
                        style={{
                          padding: '5px 8px',
                          color: cidx === 0 ? '#64748b' : cidx === 3 ? '#059669' : '#0f172a',
                          fontFamily: cidx === 0 ? 'JetBrains Mono' : 'Inter',
                          fontWeight: cidx === 3 ? 600 : 400,
                          borderBottom: '1px solid #f1f5f9',
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </thead>
            </table>
          </div>

          <div className="flex flex-col gap-3" style={{ flex: '0 0 28%' }}>
            <div className="rounded-lg p-4 flex-1" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
              <div className="mono text-[10px] text-blue-500 uppercase tracking-widest font-semibold mb-2">
                Key Takeaways
              </div>
              <div className="flex flex-col gap-2">
                {[
                  'Cells enable frequency reuse for high capacity.',
                  'BTS handles air interface; BSC manages multiple BTS.',
                  'MSC is the core switch connecting to PSTN.',
                  'Circuit switching allocates dedicated channels.',
                  'Packet switching shares bandwidth efficiently.',
                  'Handoff ensures seamless mobility between cells.',
                ].map((point, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <div
                      className="rounded-full flex-shrink-0 mt-0.5"
                      style={{ width: 5, height: 5, background: '#1d4ed8', marginTop: 5 }}
                    />
                    <span className="text-[11px] text-slate-700 leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavBar current="summary" onGo={onGo} />
    </div>
  )
}

// ─── DETAIL FRAMES ────────────────────────────────────────────────────────────
const detailData: Record<string, { title: string; abbr: string; color: string; bg: string; body: string[]; specs: { k: string; v: string }[] }> = {
  'detail-cell': {
    title: 'Cell',
    abbr: 'CELL',
    color: '#1d4ed8',
    bg: '#dbeafe',
    body: [
      'A cell is the basic geographical unit of a cellular network, typically hexagonal in shape for theoretical modeling (actual coverage is irregular).',
      'Each cell has a base station at or near its center. Cells are sized based on subscriber density — smaller cells (microcells) in dense urban areas, larger cells (macrocells) in rural areas.',
    ],
    specs: [
      { k: 'Shape (theoretical)', v: 'Hexagonal' },
      { k: 'Urban cell radius', v: '0.5 – 5 km' },
      { k: 'Rural cell radius', v: '5 – 30 km' },
      { k: 'Frequency reuse', v: 'Non-adjacent cells reuse the same frequency' },
    ],
  },
  'detail-ms': {
    title: 'Mobile Station',
    abbr: 'MS',
    color: '#1d4ed8',
    bg: '#dbeafe',
    body: [
      'The Mobile Station (MS) is the user-facing end device. It consists of the Mobile Equipment (ME) — the physical handset — and the SIM/USIM card, which identifies the subscriber.',
      'The MS establishes a wireless link with the nearest BTS and handles encoding, modulation, and transmission of voice or data packets.',
    ],
    specs: [
      { k: 'Components', v: 'ME (handset) + SIM/USIM card' },
      { k: 'Interface to network', v: 'Air interface (Uu/Um)' },
      { k: 'Functions', v: 'Encoding, modulation, power control' },
      { k: 'Identification', v: 'IMSI (SIM), IMEI (device)' },
    ],
  },
  'detail-bts': {
    title: 'Base Transceiver Station',
    abbr: 'BTS',
    color: '#0369a1',
    bg: '#e0f2fe',
    body: [
      'The BTS is the radio hardware located at each cell site. It houses the antennas, transmitters, and receivers needed to communicate wirelessly with mobile stations within its coverage area.',
      'Each BTS is connected to a BSC via the Abis interface. The BTS handles only radio-layer tasks; all higher-level control is delegated to the BSC.',
    ],
    specs: [
      { k: 'Interface (to MS)', v: 'Um (GSM air interface)' },
      { k: 'Interface (to BSC)', v: 'Abis interface' },
      { k: 'Key function', v: 'Modulation, demodulation, RF management' },
      { k: 'Typical coverage', v: 'One cell sector or omni-directional' },
    ],
  },
  'detail-bsc': {
    title: 'Base Station Controller',
    abbr: 'BSC',
    color: '#0284c7',
    bg: '#f0f9ff',
    body: [
      'The BSC sits between the BTS and the MSC. A single BSC typically controls dozens to hundreds of BTSs, managing their radio resources, frequency assignments, and handover decisions.',
      'When a mobile user moves from one cell to another within the same BSC, the handover is handled internally (intra-BSC handover). Cross-BSC handovers are coordinated by the MSC.',
    ],
    specs: [
      { k: 'Interface (to BTS)', v: 'Abis interface' },
      { k: 'Interface (to MSC)', v: 'A interface' },
      { k: 'BTS per BSC', v: 'Tens to hundreds' },
      { k: 'Key function', v: 'Radio resource management, handover control' },
    ],
  },
  'detail-msc': {
    title: 'Mobile Switching Center',
    abbr: 'MSC',
    color: '#0891b2',
    bg: '#ccfbf1',
    body: [
      'The MSC is the core switching node of a cellular network. It routes calls between mobile users and to/from the PSTN. The MSC maintains awareness of subscriber location through the HLR and VLR databases.',
      'A special Gateway MSC (GMSC) handles incoming calls from the PSTN by querying the HLR to locate the destination subscriber before routing the call.',
    ],
    specs: [
      { k: 'Interface (to BSC)', v: 'A interface' },
      { k: 'Interface (to PSTN)', v: 'ISDN/SS7 trunk' },
      { k: 'Associated databases', v: 'HLR, VLR, AuC, EIR' },
      { k: 'Key function', v: 'Call routing, mobility management, billing' },
    ],
  },
  'detail-pstn': {
    title: 'Public Telephone System',
    abbr: 'PSTN',
    color: '#059669',
    bg: '#d1fae5',
    body: [
      'The Public Switched Telephone Network (PSTN) is the legacy circuit-switched telephone infrastructure. The MSC connects to it via SS7 signaling and ISDN/TDM trunks, enabling calls between mobile users and fixed-line subscribers.',
      'In packet-switched networks, the GGSN acts as the gateway to the external IP network (Internet), replacing the PSTN role for data services.',
    ],
    specs: [
      { k: 'Interface to cellular', v: 'MSC–PSTN gateway (SS7)' },
      { k: 'Signaling protocol', v: 'SS7 (ISUP, TUP)' },
      { k: 'For data (3G+)', v: 'GGSN → Internet (IP)' },
      { k: 'Role', v: 'Interconnection with external telephone networks' },
    ],
  },
}

function FrameDetail({
  id,
  onGo,
  onBack,
}: {
  id: FrameId
  onGo: (id: FrameId) => void
  onBack: () => void
}) {
  const data = detailData[id]
  if (!data) return null

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="rounded-lg flex items-center justify-center"
          style={{ width: 48, height: 48, background: data.bg, border: `2px solid ${data.color}` }}
        >
          <span className="mono text-sm font-bold" style={{ color: data.color }}>{data.abbr}</span>
        </div>
        <div>
          <div className="mono text-[10px] text-slate-400 uppercase tracking-widest">Component Detail</div>
          <h2 className="text-xl font-bold text-slate-900">{data.title}</h2>
        </div>
        <div className="ml-auto mono text-[10px] text-slate-400 text-right">
          Mobile Computing Lab<br />Cellular Systems
        </div>
      </div>

      <div className="flex gap-5 flex-1 min-h-0">
        <div className="flex flex-col gap-4 flex-1">
          {data.body.map((para, i) => (
            <div key={i} className="rounded-lg p-4" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
              <p className="text-sm text-slate-700 leading-relaxed">{para}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3" style={{ flex: '0 0 38%' }}>
          <div className="rounded-lg p-4" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
            <div className="mono text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: data.color }}>
              Technical Specifications
            </div>
            <div className="flex flex-col gap-2.5">
              {data.specs.map((spec) => (
                <div key={spec.k}>
                  <div className="mono text-[10px] text-slate-400 mb-0.5">{spec.k}</div>
                  <div className="text-sm text-slate-800 font-medium">{spec.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg p-3"
            style={{ background: data.bg, border: `1px solid ${data.color}33` }}
          >
            <div className="mono text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: data.color }}>
              Position in Hierarchy
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              {['MS', 'BTS', 'BSC', 'MSC', 'PSTN'].map((node, idx, arr) => (
                <div key={node} className="flex items-center">
                  <span
                    className="mono text-[10px] font-bold px-1.5 py-0.5 rounded"
                    style={{
                      background: node === data.abbr ? data.color : '#e2e8f0',
                      color: node === data.abbr ? '#fff' : '#64748b',
                    }}
                  >
                    {node}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="mono text-[10px] text-slate-400 mx-0.5">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NavBar current={id} onGo={onGo} onBack={onBack} showBack />
    </div>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [current, setCurrent] = useState<FrameId>('intro')
  const [history, setHistory] = useState<FrameId[]>([])
  const [animating, setAnimating] = useState(false)

  const goTo = (id: FrameId) => {
    if (id === current || animating) return
    setAnimating(true)
    setHistory((h) => [...h, current])
    setTimeout(() => {
      setCurrent(id)
      setAnimating(false)
    }, 180)
  }

  const goBack = () => {
    if (history.length === 0) return
    const prev = history[history.length - 1]
    setHistory((h) => h.slice(0, -1))
    setAnimating(true)
    setTimeout(() => {
      setCurrent(prev)
      setAnimating(false)
    }, 180)
  }

  const renderFrame = () => {
    switch (current) {
      case 'intro':      return <FrameIntro onGo={goTo} />
      case 'components': return <FrameComponents onGo={goTo} />
      case 'analog':     return <FrameAnalog onGo={goTo} />
      case 'digital':    return <FrameDigital onGo={goTo} />
      case 'packet':     return <FramePacket onGo={goTo} />
      case 'summary':    return <FrameSummary onGo={goTo} />
      default:
        return (
          <FrameDetail
            id={current}
            onGo={goTo}
            onBack={goBack}
          />
        )
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* 16:9 slide shell */}
      <div
        style={{
          width: '100%',
          maxWidth: 1080,
          aspectRatio: '16/9',
          background: '#f8fafc',
          borderRadius: 12,
          boxShadow: '0 24px 80px rgba(15,23,42,0.18), 0 2px 8px rgba(15,23,42,0.08)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: 3,
            background: 'linear-gradient(90deg, #1d4ed8 0%, #0ea5e9 50%, #059669 100%)',
            flexShrink: 0,
          }}
        />

        {/* Slide content */}
        <div
          style={{
            flex: 1,
            padding: '20px 28px 16px',
            display: 'flex',
            flexDirection: 'column',
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateX(12px)' : 'translateX(0)',
            transition: 'opacity 0.18s ease, transform 0.18s ease',
            overflow: 'hidden',
          }}
        >
          {renderFrame()}
        </div>

        {/* Bottom footer bar */}
        <div
          style={{
            height: 24,
            background: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: 20,
            flexShrink: 0,
          }}
        >
          <span
            className="mono"
            style={{ fontSize: 9, color: '#475569', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            Mobile Computing Laboratory — Basic Cellular System Experiment
          </span>
          <span className="mono" style={{ fontSize: 9, color: '#334155' }}>
            {['intro','components','analog','digital','packet','summary'].indexOf(current) + 1 > 0
              ? `Frame ${['intro','components','analog','digital','packet','summary'].indexOf(current) + 1} of 6`
              : 'Detail View'
            }
          </span>
        </div>
      </div>
    </div>
  )
}
