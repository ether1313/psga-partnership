import { useState } from 'react';

/** Brand accent — replaces former beige / amber UI */
const BRAND = '#C04000';

const features = [
  {
    icon: 'ri-flashlight-fill',
    title: 'Instant Withdraw',
    desc: 'Lightning-fast payouts processed in under 5 minutes. Your winnings, your way.',
  },
  {
    icon: 'ri-shield-keyhole-fill',
    title: 'Secure System',
    desc: '256-bit SSL encryption and multi-layer security protecting every transaction.',
  },
  {
    icon: 'ri-gift-2-fill',
    title: 'Daily Bonus',
    desc: 'Exclusive daily rewards, cashback offers, and VIP loyalty points every single day.',
  },
] as const;

type FeatureItem = (typeof features)[number];

function FeatureCardDesktop({
  f,
  i,
  hovered,
  setHovered,
}: {
  f: FeatureItem;
  i: number;
  hovered: number | null;
  setHovered: (n: number | null) => void;
}) {
  const active = hovered === i;
  return (
    <div
      className={`rounded-xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 bg-white border shadow-sm ${
        active ? 'shadow-md -translate-y-1' : 'border-slate-200 translate-y-0'
      }`}
      style={active ? { borderColor: BRAND, borderWidth: '1px' } : undefined}
      onMouseEnter={() => setHovered(i)}
      onMouseLeave={() => setHovered(null)}
    >
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
        style={{
          backgroundColor: BRAND,
          border: `2px solid ${BRAND}`,
          boxShadow: active ? '0 4px 14px rgba(192,64,0,0.35)' : undefined,
        }}
      >
        <i className={`${f.icon} text-2xl text-white`} />
      </div>

      <h3 className="headline-cinematic text-lg mb-2 text-slate-900">
        {f.title}
      </h3>

      <p className="text-body-casino text-xs leading-relaxed">{f.desc}</p>
    </div>
  );
}

function FeatureCardMobile({ f }: { f: FeatureItem }) {
  return (
    <div className="rounded-xl p-6 flex flex-col items-center text-center h-full bg-white border border-slate-200 shadow-sm">
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full mb-3"
        style={{ backgroundColor: BRAND, border: `2px solid ${BRAND}` }}
      >
        <i className={`${f.icon} text-xl text-white`} />
      </div>

      <h3 className="headline-cinematic text-base mb-2 text-slate-900">
        {f.title}
      </h3>

      <p className="text-body-casino text-xs leading-relaxed">{f.desc}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-5 px-4 bg-transparent md:px-6 md:py-8 lg:px-4 lg:py-10">
      <div className="mx-auto w-full max-w-screen-xl md:max-w-4xl lg:max-w-screen-xl">
        <div className="text-center mb-4 md:mb-6 lg:mb-8">
          <div className="inline-block relative px-4 py-1 md:px-6 md:py-2">
            <div
              className="absolute inset-0 rounded-lg pointer-events-none bg-slate-100/80"
            />
            <h2
              className="headline-cinematic relative text-xl tracking-wide sm:text-2xl md:text-3xl"
              style={{ color: BRAND }}
            >
              Why Choose Us
            </h2>
          </div>
          <div
            className="w-24 h-0.5 mx-auto rounded-full mt-1.5 md:mt-2 bg-gradient-to-r from-transparent to-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, transparent, ${BRAND}, transparent)`,
            }}
          />
        </div>

        {/* Desktop: three columns with hover */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {features.map((f, i) => (
            <FeatureCardDesktop
              key={f.title}
              f={f}
              i={i}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>

        {/* Tablet: two columns; third card centered on second row */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:hidden">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={i === 2 ? 'md:col-span-2 flex justify-center' : ''}
            >
              <div className={i === 2 ? 'w-full max-w-sm' : 'w-full'}>
                <FeatureCardDesktop f={f} i={i} hovered={hovered} setHovered={setHovered} />
              </div>
            </div>
          ))}
        </div>

        {/* Phone: swipe carousel */}
        <div
          className="md:hidden -mx-4 px-4 overflow-x-auto overscroll-x-contain touch-pan-x pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div
            className="flex gap-4 snap-x snap-mandatory"
            style={{ scrollPaddingInline: '1rem' }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="snap-center shrink-0 w-[min(88vw,320px)] first:snap-start"
              >
                <FeatureCardMobile f={f} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
