import { useEffect, useRef } from 'react';

const BRAND = '#C04000';

/* ── Animated Casino Signboard ── */
function CasinoSign() {
  const letters = ['P', 'S', 'G', 'A'];

  return (
    <div
      className="relative rounded-xl overflow-hidden flex flex-col items-center justify-center py-6 px-4"
      style={{
        background: 'linear-gradient(160deg, #0d0500 0%, #1a0800 50%, #0a0300 100%)',
        border: '2px solid #FFD70055',
        boxShadow: '0 0 30px #FFD70022, inset 0 0 40px rgba(0,0,0,0.6)',
        minHeight: '220px',
      }}
    >
      {/* Corner decorations */}
      <CornerDecor pos="top-2 left-2" />
      <CornerDecor pos="top-2 right-2" />
      <CornerDecor pos="bottom-2 left-2" />
      <CornerDecor pos="bottom-2 right-2" />

      {/* Top border light strip */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, #FFD700, #fff9c4, #FFD700, transparent)',
          animation: 'sign-sweep 2.5s ease-in-out infinite',
        }}
      />

      {/* Neon frame glow */}
      <div
        className="absolute inset-2 rounded-lg pointer-events-none"
        style={{
          border: '1px solid #FFD70033',
          boxShadow: 'inset 0 0 20px #FFD70011',
        }}
      />

      {/* Warm radial bloom behind sign text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,180,0,0.12) 0%, transparent 70%)',
        }}
      />

      {/* CASINO label */}
      <div
        className="label-futuristic mb-2 tracking-widest"
        style={{
          fontSize: '0.6rem',
          color: '#f59e0b',
          textShadow: '0 0 8px #f59e0b, 0 0 18px #f59e0b66',
          letterSpacing: '0.35em',
          animation: 'pulse-glow 2s ease-in-out infinite',
        }}
      >
        ★ CASINO ★
      </div>

      {/* Main PSGA letters */}
      <div className="flex items-center gap-2 mb-2">
        {letters.map((letter, i) => (
          <SignLetter key={letter} letter={letter} delay={i * 0.18} />
        ))}
      </div>

      {/* Subtitle */}
      <div
        className="label-futuristic mt-1"
        style={{
          fontSize: '0.55rem',
          color: '#E6C200',
          letterSpacing: '0.25em',
          textShadow: '0 0 10px #E6C200aa, 0 0 22px #E6C20044',
          animation: 'flicker-soft 4s ease-in-out infinite',
        }}
      >
        PAPUA NEW GUINEA
      </div>

      {/* Decorative gold divider */}
      <div className="flex items-center gap-2 mt-3 w-full px-4">
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #FFD70066)' }} />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: '#FFD700',
            boxShadow: '0 0 8px #FFD700, 0 0 16px #FFD70066',
            animation: 'pulse-dot 1.5s ease-in-out infinite',
          }}
        />
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #FFD70066, transparent)' }} />
      </div>

      {/* Bottom light strip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, #FFD700, #fff9c4, #FFD700, transparent)',
          animation: 'sign-sweep 2.5s ease-in-out infinite 1.25s',
        }}
      />

      {/* Blinking dots row */}
      <BlinkingDots />
    </div>
  );
}

function SignLetter({ letter, delay }: { letter: string; delay: number }) {
  return (
    <div
      className="headline-cinematic relative flex items-center justify-center"
      style={{
        fontSize: '3.2rem',
        width: '64px',
        height: '72px',
        background: 'linear-gradient(160deg, #1a0c00, #0d0500)',
        border: '1.5px solid #FFD70066',
        borderRadius: '8px',
        boxShadow: '0 0 18px #FFD70033, inset 0 0 12px rgba(255,215,0,0.08)',
        animation: `letter-glow 2s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Gold gradient letter */}
      <span
        style={{
          background: 'linear-gradient(180deg, #fff9c4 0%, #FFD700 40%, #f59e0b 70%, #b45309 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 0 8px #FFD700) drop-shadow(0 0 18px #f59e0b88)',
          fontStyle: 'italic',
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        {letter}
      </span>

      {/* Shine sweep */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden"
        style={{ borderRadius: '6px' }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '60%',
            height: '100%',
            background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
            animation: `shine-sweep 3s ease-in-out infinite`,
            animationDelay: `${delay + 0.5}s`,
          }}
        />
      </div>
    </div>
  );
}

function CornerDecor({ pos }: { pos: string }) {
  return (
    <div
      className={`absolute ${pos} w-3 h-3 pointer-events-none`}
      style={{
        borderTop: '2px solid #FFD700',
        borderLeft: pos.includes('right') ? 'none' : '2px solid #FFD700',
        borderRight: pos.includes('right') ? '2px solid #FFD700' : 'none',
        borderBottom: pos.includes('bottom') ? '2px solid #FFD700' : 'none',
        borderTopColor: pos.includes('bottom') ? 'transparent' : '#FFD700',
        filter: 'drop-shadow(0 0 4px #FFD700)',
        opacity: 0.8,
      }}
    />
  );
}

function BlinkingDots() {
  const dots = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="flex items-center gap-1.5 mt-3">
      {dots.map((i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            width: '5px',
            height: '5px',
            background: i % 2 === 0 ? '#FFD700' : '#f59e0b',
            boxShadow: `0 0 6px ${i % 2 === 0 ? '#FFD700' : '#f59e0b'}`,
            animation: `blink-dot 1.2s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Gold Accent Divider ── */
function GoldDivider() {
  return (
    <div className="flex items-center gap-2 px-1">
      <div
        className="flex-1 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${BRAND}99)` }}
      />
      <i className="ri-star-fill" style={{ color: BRAND, fontSize: '10px' }} />
      <div
        className="flex-1 h-px"
        style={{ background: `linear-gradient(90deg, ${BRAND}99, transparent)` }}
      />
    </div>
  );
}

const trustBadgeSections = [
  {
    id: 'license',
    icon: 'ri-award-fill',
    title: 'License',
    img: [
      `${import.meta.env.BASE_URL}images/license-curacao.png`,
      `${import.meta.env.BASE_URL}images/license-pagcor.png`,
    ],
    color: BRAND,
  },
  {
    id: 'certifications',
    icon: 'ri-verified-badge-fill',
    title: 'Certifications',
    img: [
      `${import.meta.env.BASE_URL}images/cert-bmm.webp`,
      `${import.meta.env.BASE_URL}images/cert-iovation.png`,
    ],
    color: BRAND,
  },
  {
    id: 'responsible',
    icon: 'ri-heart-fill',
    title: 'Responsible Gaming',
    img: [
      `${import.meta.env.BASE_URL}images/responsible-therapy.png`,
      `${import.meta.env.BASE_URL}images/responsible-gamble-aware.png`,
      `${import.meta.env.BASE_URL}images/responsible-18-only.png`,
    ],
    color: BRAND,
  },
];

const badgeTileShell = {
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
} as const;

export function WelcomeBannerImage() {
  return (
    <div className="hidden lg:flex lg:justify-center rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
      <img
        src="https://storage.readdy-site.link/project_files/e0a8be36-44a1-49ae-8c9c-bcd59c8e395f/d9cd378f-f92b-440e-b8fc-71f025618564_Image_20260417145639_357_17.png"
        alt="Welcome to PSGA Papua New Guinea"
        className="w-full max-h-[min(44vw,168px)] object-contain object-top sm:max-h-[min(46vw,200px)] md:max-h-[min(48vw,240px)] lg:max-h-none lg:object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
  );
}

export function WelcomeInfoSection() {
  return (
    <div className="rounded-xl p-4 bg-white border border-slate-200 shadow-sm">
      <h2 className="headline-cinematic text-sm mb-2 text-slate-900 tracking-wide">
        WELCOME TO PSGA...
      </h2>

      <p className="text-body-casino text-xs leading-relaxed mb-3">
        PSGA holds itself responsible for any fraudulent or scam activity conducted by casinos introduced under our authority.
        In such cases, PSGA will take full responsibility for refunds and settlement.
      </p>

      <div className="border-t border-slate-200 pt-3">
        <h3 className="label-futuristic mb-1 text-xs" style={{ color: BRAND }}>
          REFERRING FRIENDS
        </h3>

        <p className="text-body-casino text-xs leading-relaxed">
          Refer Friends: Spread the word about PSGA. Share your referral link and earn exciting rewards for every new member you bring onboard!
        </p>
        <p className="text-body-casino text-xs leading-relaxed mt-1">
          Exclusive Offers: Get access to exclusive bonuses, promotions, and special deals. Maximize your winnings and enjoy VIP treatment.
        </p>
      </div>
    </div>
  );
}

export function TrustBadgesSection() {
  return (
    <div className="rounded-xl p-4 bg-white border border-slate-200 shadow-sm">
      <div className="flex flex-col gap-4">
        {trustBadgeSections.map((section) => {
          const urls: string[] = Array.isArray(section.img) ? [...section.img] : [section.img];
          return (
            <div key={section.id}>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-6 h-6 flex items-center justify-center rounded-full shrink-0"
                  style={{
                    background: `${section.color}22`,
                    border: `1px solid ${section.color}`,
                  }}
                >
                  <i className={`${section.icon} text-xs`} style={{ color: section.color }} />
                </div>
                <h3 className="label-futuristic text-[0.6rem]" style={{ color: BRAND }}>
                  {section.title}
                </h3>
              </div>
              <div className="flex items-center justify-start gap-2 flex-wrap">
                {urls.map((src, idx) => (
                  <div
                    key={`${section.id}-${idx}`}
                    className="flex items-center justify-center rounded-md px-2 py-1"
                    style={badgeTileShell}
                  >
                    <img
                      src={src}
                      alt={`${section.title} — badge ${idx + 1}`}
                      className="h-6 max-w-[100px] sm:h-7 sm:max-w-[110px] w-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Main LeftBanner (desktop column: image → welcome → trust) ── */
export default function LeftBanner() {
  return (
    <div className="flex flex-col gap-4">
      <WelcomeBannerImage />
      <WelcomeInfoSection />
      <TrustBadgesSection />

      {/* ★ Animated keyframes injected via style tag ★ */}
      <style>{`
        @keyframes letter-glow {
          0%, 100% {
            box-shadow: 0 0 18px #FFD70033, inset 0 0 12px rgba(255,215,0,0.08);
            border-color: #FFD70066;
          }
          50% {
            box-shadow: 0 0 32px #FFD70077, 0 0 60px #f59e0b33, inset 0 0 20px rgba(255,215,0,0.15);
            border-color: #FFD700cc;
          }
        }
        @keyframes sign-sweep {
          0% { opacity: 0.3; background-position: -100% 0; }
          50% { opacity: 1; }
          100% { opacity: 0.3; background-position: 200% 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; text-shadow: 0 0 8px #f59e0b, 0 0 18px #f59e0b66; }
          50% { opacity: 1; text-shadow: 0 0 14px #f59e0b, 0 0 30px #f59e0baa, 0 0 50px #f59e0b44; }
        }
        @keyframes flicker-soft {
          0%, 90%, 100% { opacity: 1; }
          92% { opacity: 0.6; }
          94% { opacity: 1; }
          96% { opacity: 0.4; }
          98% { opacity: 1; }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); box-shadow: 0 0 8px #FFD700, 0 0 16px #FFD70066; }
          50% { transform: scale(1.4); box-shadow: 0 0 14px #FFD700, 0 0 28px #FFD700aa; }
        }
        @keyframes blink-dot {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shine-sweep {
          0% { left: -100%; }
          60%, 100% { left: 150%; }
        }
      `}</style>
    </div>
  );
}
