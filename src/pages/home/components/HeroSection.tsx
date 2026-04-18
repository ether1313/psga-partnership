import { useEffect, useState } from 'react';
import GridBackground from './GridBackground';

const jackpots = [
  {
    id: 1,
    name: '1XPNG',
    base: 461257,
    img: 'https://static.kiyupa.com/media/4344bf565bd96ae30512f.png',
    href: 'https://1xpng.com/RF1SKPNG',
    badge: 'HOT',
  },
  {
    id: 2,
    name: 'BBPokies',
    base: 244356,
    img: 'https://static.kiyupa.com/media/023ca1565bd96c262fc7c.png',
    href: 'https://bbpokies.net/RF11SKPNG',
    badge: 'LIVE',
  },
  {
    id: 3,
    name: 'PLAY420',
    base: 299367,
    img: 'https://static.kiyupa.com/media/861655765bd96b7cd4ba6.png',
    href: 'https://play420.com/RF111SKPNG',
    badge: 'TOP',
  },
];

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay((prev) => prev + Math.floor(Math.random() * 37 + 3));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="jackpot-number text-xl tabular-nums">
      {display.toLocaleString()}
    </span>
  );
}

function JackpotCard({ item }: { item: typeof jackpots[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="block rounded-xl overflow-hidden cursor-pointer relative group transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, #1c0c00, #0d0500)',
        border: `2px solid ${hovered ? '#FFD700' : '#f59e0b55'}`,
        boxShadow: hovered
          ? '0 0 30px #FFD70077, 0 0 60px #f59e0b33, inset 0 0 20px #f59e0b0d'
          : '0 0 10px #f59e0b22',
        transform: hovered ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,215,0,0.18) 50%, transparent 60%)',
            animation: 'streak 0.8s ease-out forwards',
            zIndex: 10,
          }}
        />
      )}

      <div className="absolute top-2 left-2 z-20">
        <span
          className="label-futuristic text-xs px-2 py-0.5 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
            color: '#fff',
            boxShadow: '0 0 10px #ef4444, 0 0 20px #ef444455',
            fontSize: '9px',
          }}
        >
          {item.badge}
        </span>
      </div>

      <div className="w-full h-28 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div
        className="p-3"
        style={{ background: 'linear-gradient(180deg, #0d0500 0%, #080300 100%)' }}
      >
        <div className="flex items-center justify-between mb-1">
          <span
            className="subheading-casino text-xs tracking-widest uppercase"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 8px rgba(255,215,0,0.5), 0 1px 3px rgba(0,0,0,0.95)',
            }}
          >
            {item.name}
          </span>
          <i className="ri-fire-fill text-red-400 text-sm" style={{ filter: 'drop-shadow(0 0 5px #ef4444)' }}></i>
        </div>
        <div
          className="label-futuristic text-xs mb-1 tracking-widest uppercase"
          style={{ color: '#888888', fontSize: '9px' }}
        >
          TOTAL JACKPOT
        </div>
        <div className="flex items-baseline gap-1">
          <AnimatedNumber value={item.base} />
          <span
            className="label-futuristic text-xs"
            style={{ color: '#E6C200' }}
          >
            PGK
          </span>
        </div>
        <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: '#1a1a1a' }}>
          <div
            className="h-full rounded-full"
            style={{
              width: `${60 + Math.random() * 30}%`,
              background: 'linear-gradient(90deg, #f59e0b, #FFD700)',
            }}
          />
        </div>
      </div>
    </a>
  );
}

export default function HeroSection() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #050300 0%, #0a0400 40%, #0d0500 70%, #050300 100%)',
        minHeight: '520px',
      }}
    >
      <GridBackground zone="hero" />

      {/* ── Edge vignette overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.88) 100%)',
          zIndex: 2,
        }}
      />

      {/* ── Warm focal bloom — centered behind hero text ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          left: '5%',
          width: '55%',
          height: '80%',
          background:
            'radial-gradient(ellipse 70% 60% at 40% 45%, rgba(245,158,11,0.13) 0%, rgba(255,215,0,0.07) 40%, transparent 75%)',
          filter: 'blur(40px)',
          zIndex: 3,
        }}
      />

      {/* ── Ambient glow orbs ── */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #f59e0b14 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 1,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #ef444414 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-center">

          {/* Left: Hero text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Crown icon */}
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full mb-4 animate-float"
              style={{
                background: 'linear-gradient(135deg, #3d1f00, #1a0a00)',
                border: '2px solid #FFD700',
                boxShadow: '0 0 28px #FFD70077, 0 0 56px #f59e0b33',
              }}
            >
              <i
                className="ri-vip-crown-2-fill text-2xl"
                style={{ color: '#FFD700', filter: 'drop-shadow(0 0 8px #FFD700)' }}
              ></i>
            </div>

            {/* ── Dark overlay panel behind headline block ── */}
            <div
              className="relative mb-1 rounded-2xl"
              style={{
                /* semi-transparent dark panel for readability */
                background: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
                border: '1px solid rgba(255,215,0,0.08)',
                padding: '18px 28px 14px',
                boxShadow:
                  'inset 0 0 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,215,0,0.06)',
              }}
            >
              {/* ── Radial glow behind headline ── */}
              <div
                className="absolute pointer-events-none select-none"
                aria-hidden="true"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '200%',
                  background:
                    'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255,215,0,0.18) 0%, rgba(245,158,11,0.10) 35%, transparent 70%)',
                  filter: 'blur(18px)',
                  zIndex: 0,
                }}
              />

              {/* Bloom layer behind headline text */}
              <div
                className="absolute inset-0 pointer-events-none select-none flex items-center justify-center lg:justify-start"
                aria-hidden="true"
                style={{
                  fontFamily: '\'Barlow Condensed\', sans-serif',
                  fontStyle: 'italic',
                  fontWeight: 900,
                  fontSize: 'clamp(3rem, 7vw, 4.5rem)',
                  lineHeight: 1.0,
                  background: 'linear-gradient(135deg, #FFD700, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'blur(18px)',
                  opacity: 0.65,
                  zIndex: 0,
                  paddingLeft: '28px',
                }}
              >
                WIN BIG TODAY 💰
              </div>

              <h1
                className="headline-cinematic relative"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 4.5rem)',
                  background: 'linear-gradient(135deg, #fff5cc 0%, #FFD700 25%, #FFF9C4 50%, #f59e0b 75%, #FFD700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% auto',
                  animation: 'shimmer 3s linear infinite',
                  filter: 'drop-shadow(0 0 14px #FFD700aa) drop-shadow(0 0 30px #f59e0b55)',
                  letterSpacing: '0.03em',
                  zIndex: 1,
                  position: 'relative',
                }}
              >
                WIN BIG TODAY 💰
              </h1>
            </div>

            {/* ── Keyword emphasis row — inside its own subtle panel ── */}
            <div
              className="flex items-center gap-2 mb-4 flex-wrap justify-center lg:justify-start px-4 py-2 rounded-xl"
              style={{
                background: 'rgba(0,0,0,0.35)',
                border: '1px solid rgba(255,215,0,0.07)',
              }}
            >
              {['MASSIVE JACKPOT', '•', 'FAST WITHDRAW', '•', 'TRUSTED PLATFORM'].map((word, i) => (
                word === '•' ? (
                  <span key={i} style={{ color: '#f59e0b55', fontSize: '1.2rem' }}>•</span>
                ) : (
                  <span
                    key={i}
                    className="subheading-casino"
                    style={{
                      color: i === 0 ? '#FFD700' : i === 2 ? '#FFF176' : '#F5F5F5',
                      fontSize: i === 0 ? '1.05rem' : '0.95rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textShadow: i === 0
                        ? '0 0 12px #FFD700aa, 0 0 24px #FFD70055, 0 2px 4px rgba(0,0,0,0.95)'
                        : '0 0 8px rgba(255,215,0,0.3), 0 2px 4px rgba(0,0,0,0.9)',
                    }}
                  >
                    {word}
                  </span>
                )
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="relative overflow-hidden px-10 py-4 rounded-full font-black text-lg tracking-widest uppercase whitespace-nowrap cursor-pointer transition-all duration-300 headline-cinematic"
              style={{
                background: btnHovered
                  ? 'linear-gradient(135deg, #FFD700, #f59e0b, #FFD700)'
                  : 'linear-gradient(135deg, #b91c1c, #ef4444, #dc2626)',
                color: btnHovered ? '#000000' : '#FFFFFF',
                fontSize: '1.1rem',
                letterSpacing: '0.12em',
                boxShadow: btnHovered
                  ? '0 0 30px #FFD700, 0 0 60px #f59e0b66, 0 0 100px #f59e0b33'
                  : '0 0 20px #ef4444, 0 0 40px #ef444466',
                transform: btnHovered ? 'scale(1.06) skewX(-1deg)' : 'scale(1)',
                animation: !btnHovered ? 'pulse-red 2s ease-in-out infinite' : 'none',
                textShadow: btnHovered ? 'none' : '0 1px 3px rgba(0,0,0,0.6)',
              }}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
            >
              <span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.28) 50%, transparent 60%)',
                  animation: 'streak 2s ease-in-out infinite',
                }}
              />
              <i className="ri-gift-2-fill mr-2"></i>
              Claim Bonus Now
            </button>

            {/* Stats row */}
            <div
              className="flex items-center gap-6 mt-8 flex-wrap justify-center lg:justify-start px-5 py-3 rounded-xl"
              style={{
                background: 'rgba(0,0,0,0.40)',
                border: '1px solid rgba(255,215,0,0.08)',
              }}
            >
              {[
                { icon: 'ri-user-fill', val: '50K+', label: 'Active Players' },
                { icon: 'ri-money-dollar-circle-fill', val: 'K500+', label: 'Daily Payouts' },
                { icon: 'ri-shield-check-fill', val: '100%', label: 'Secure' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <div className="flex items-center gap-1">
                    <i
                      className={`${s.icon} text-sm`}
                      style={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px #FFD700)' }}
                    ></i>
                    <span
                      className="label-futuristic text-lg"
                      style={{
                        color: '#FFD700',
                        textShadow: '0 0 10px #FFD70088, 0 0 20px #FFD70044, 0 1px 3px rgba(0,0,0,0.9)',
                      }}
                    >
                      {s.val}
                    </span>
                  </div>
                  <span className="text-small-casino text-xs font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hot Jackpots */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <i
                className="ri-fire-fill text-lg animate-pulse"
                style={{ color: '#ef4444', filter: 'drop-shadow(0 0 6px #ef4444)' }}
              ></i>
              <span
                className="label-futuristic text-sm"
                style={{
                  color: '#FFD700',
                  textShadow: '0 0 12px #FFD700aa, 0 0 24px #FFD70055, 0 1px 3px rgba(0,0,0,0.9)',
                }}
              >
                Hot Jackpots
              </span>
              <div
                className="ml-auto px-2 py-0.5 rounded-full label-futuristic"
                style={{
                  background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                  color: '#FFFFFF',
                  boxShadow: '0 0 8px #ef4444',
                  fontSize: '9px',
                }}
              >
                LIVE
              </div>
            </div>
            {jackpots.map((item) => (
              <JackpotCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
