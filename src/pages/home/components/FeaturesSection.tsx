import { useState } from 'react';

const features = [
  {
    icon: 'ri-flashlight-fill',
    title: 'Instant Withdraw',
    desc: 'Lightning-fast payouts processed in under 5 minutes. Your winnings, your way.',
    color: '#FFD700',
    glow: '#FFD700',
  },
  {
    icon: 'ri-shield-keyhole-fill',
    title: 'Secure System',
    desc: '256-bit SSL encryption and multi-layer security protecting every transaction.',
    color: '#ef4444',
    glow: '#ef4444',
  },
  {
    icon: 'ri-gift-2-fill',
    title: 'Daily Bonus',
    desc: 'Exclusive daily rewards, cashback offers, and VIP loyalty points every single day.',
    color: '#E6C200',
    glow: '#E6C200',
  },
];

export default function FeaturesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-10 px-4" style={{ background: 'transparent' }}>
      <div className="max-w-screen-xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-8">
          <div className="inline-block relative px-6 py-2">
            <div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 80%)' }}
            />
            <h2
              className="headline-cinematic relative"
              style={{
                fontSize: '1.8rem',
                color: '#E6C200',
                textShadow:
                  '0 0 14px #E6C200aa, 0 0 28px #E6C20055, 0 0 50px #E6C20022, 0 2px 4px rgba(0,0,0,0.95)',
                letterSpacing: '0.08em',
              }}
            >
              Why Choose Us
            </h2>
          </div>
          <div
            className="w-24 h-0.5 mx-auto rounded-full mt-1"
            style={{
              background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
              boxShadow: '0 0 8px #FFD700',
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300"
              style={{
                background: hovered === i
                  ? 'linear-gradient(145deg, #1c0c00, #0d0500)'
                  : 'linear-gradient(145deg, #131313, #0a0a0a)',
                border: `1px solid ${hovered === i ? f.glow : '#2a2a2a'}`,
                boxShadow: hovered === i
                  ? `0 0 24px ${f.glow}44, 0 0 48px ${f.glow}22, inset 0 0 20px ${f.glow}0d`
                  : '0 0 0 transparent',
                transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
                style={{
                  background: `radial-gradient(circle, ${f.color}22 0%, transparent 70%)`,
                  border: `2px solid ${f.color}`,
                  boxShadow: hovered === i
                    ? `0 0 24px ${f.glow}, 0 0 48px ${f.glow}44`
                    : `0 0 10px ${f.glow}44`,
                }}
              >
                <i
                  className={`${f.icon} text-2xl`}
                  style={{
                    color: f.color,
                    filter: `drop-shadow(0 0 8px ${f.glow})`,
                  }}
                ></i>
              </div>

              {/* Card title */}
              <h3
                className="headline-cinematic text-lg mb-2"
                style={{
                  color: '#FFFFFF',
                  letterSpacing: '0.06em',
                  textShadow: hovered === i
                    ? `0 0 12px ${f.glow}99, 0 0 24px ${f.glow}44, 0 2px 4px rgba(0,0,0,0.95)`
                    : '0 0 6px rgba(255,215,0,0.2), 0 2px 4px rgba(0,0,0,0.9)',
                }}
              >
                {f.title}
              </h3>

              {/* Body text */}
              <p className="text-body-casino text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
