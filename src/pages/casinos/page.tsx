import { useState } from 'react';
import SiteHeader from '@/pages/home/components/SiteHeader';
import BottomNav from '@/pages/home/components/BottomNav';
import GridBackground from '@/pages/home/components/GridBackground';

const COMING_SOON_TILE = `${import.meta.env.BASE_URL}images/coming-soon.png`;
const PNGGO_TILE = `${import.meta.env.BASE_URL}images/pnggo.png`;

const toptierCasinos = [
  { id: 'pnggo', href: 'https://pnggo.bet/', tileSrc: PNGGO_TILE, label: 'PNGGO' },
  { id: 'toptier-2', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'toptier-3', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'toptier-4', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'toptier-5', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
];

const secondtierCasinos = [
  { id: 'secondtier-1', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'secondtier-2', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'secondtier-3', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'secondtier-4', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'secondtier-5', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'secondtier-6', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'secondtier-7', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'secondtier-8', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
];

const thirdtierCasinos = [
  { id: 'thirdtier-1', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'thirdtier-2', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'thirdtier-3', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'thirdtier-4', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'thirdtier-5', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
  { id: 'thirdtier-6', href: '#', tileSrc: COMING_SOON_TILE, label: 'N/A' },
];

interface Casino {
  id: string;
  href: string;
  tileSrc: string;
  label: string;
}

function CasinoCard({ casino }: { casino: Casino }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={casino.href}
      target={casino.href !== '#' ? '_blank' : undefined}
      rel="noopener noreferrer nofollow"
      className="flex flex-col items-center gap-2 cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 bg-white border-2 shadow-sm"
        style={{
          borderColor: hovered ? '#C04000' : '#e2e8f0',
          boxShadow: hovered ? '0 8px 24px rgba(15,23,42,0.12)' : '0 1px 3px rgba(15,23,42,0.08)',
          transform: hovered ? 'translateY(-4px) scale(1.04)' : 'translateY(0) scale(1)',
        }}
      >
        <img
          src={casino.tileSrc}
          alt={casino.label === 'PNGGO' ? 'PNGGO' : 'Coming soon'}
          className={`w-full h-full object-center ${
            casino.label === 'PNGGO' ? 'object-contain p-1' : 'object-cover'
          }`}
          draggable={false}
        />
      </div>
      <span
        className={`subheading-casino text-xs tracking-wider text-center whitespace-nowrap transition-colors duration-300 ${
          hovered ? 'text-[#C04000]' : 'text-slate-600'
        }`}
      >
        {casino.label}
      </span>
    </a>
  );
}

interface CategorySectionProps {
  /** Category id: toptier | secondtier | thirdtier */
  category: 'toptier' | 'secondtier' | 'thirdtier';
  supportLogo?: string;
  supportLogoAlt?: string;
  casinos: Casino[];
  accentColor?: string;
  icon?: string;
}

function CategorySection({
  category,
  supportLogo,
  supportLogoAlt,
  casinos,
  accentColor = '#f59e0b',
  icon = 'ri-trophy-fill',
}: CategorySectionProps) {
  const isToptier = category === 'toptier';
  return (
    <div
      data-category={category}
      className="rounded-xl p-5 relative overflow-hidden bg-white border-x border-b border-slate-200 shadow-sm"
      style={{
        borderTop: `3px solid ${accentColor}`,
      }}
    >
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.06]">
        <span className="headline-cinematic text-5xl text-slate-100 tracking-wide">
          PSGA GAMING
        </span>
      </div>

      {/* Glow corner */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor}11 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5 relative z-10">
        {isToptier ? (
          <div className="flex items-center gap-2 flex-wrap">
            <div
              className="w-7 h-7 flex items-center justify-center rounded-full"
              style={{ background: `${accentColor}22`, border: `1px solid ${accentColor}` }}
            >
              <i className={`${icon} text-sm`} style={{ color: accentColor }}></i>
            </div>
            <span className="subheading-casino text-xs tracking-widest uppercase text-slate-700">
              WEEKLY RECOMMEND BY PSGA
            </span>
            <span className="label-futuristic px-3 py-1 rounded-full flex items-center gap-1 shrink-0 text-xs bg-amber-100 text-amber-950 border border-amber-300">
              <i className="ri-trophy-fill"></i> TOP TIER
            </span>
            <img
              src={`${import.meta.env.BASE_URL}images/weekly-top-tier-banner.png`}
              alt="PNGGO weekly jackpot banner"
              className="h-6 sm:h-7 w-auto max-w-[100px] sm:max-w-[118px] object-contain object-left rounded-md shrink-0 shadow-sm"
            />
          </div>
        ) : (
          <div className="flex items-center gap-2 flex-wrap">
            <div
              className="w-7 h-7 flex items-center justify-center rounded-full"
              style={{ background: `${accentColor}22`, border: `1px solid ${accentColor}` }}
            >
              <i className={`${icon} text-sm`} style={{ color: accentColor }}></i>
            </div>
            <div>
              <span className="subheading-casino text-xs tracking-widest uppercase block text-slate-700">
                COMPANY IN THIS CATEGORY
              </span>
              <span
                className="text-small-casino text-xs"
              >
                SUPPORTED BY
              </span>
            </div>
            {supportLogo && (
              <img
                src={supportLogo}
                alt={supportLogoAlt || category}
                className="h-9 object-contain ml-auto"
                style={{ filter: 'brightness(0.9)' }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
          </div>
        )}
      </div>

      {/* Casino Grid */}
      <div className="flex flex-wrap gap-4 justify-start relative z-10">
        {casinos.map((casino) => (
          <CasinoCard key={casino.id} casino={casino} />
        ))}
      </div>
    </div>
  );
}

export default function CasinosPage() {
  return (
    <div className="min-h-screen pb-24 md:pb-28 relative bg-slate-100 text-slate-900">
      {/* Grid background */}
      <GridBackground zone="normal" style={{ position: 'fixed', zIndex: 0 }} />

      <div className="relative" style={{ zIndex: 1 }}>
        <SiteHeader />

        {/* Page title */}
        <div className="py-4 px-4 text-center bg-white/90 border-b border-slate-200 md:py-5 md:px-8 lg:px-6">
          <h1
            className="headline-cinematic text-xl sm:text-2xl md:text-3xl leading-tight"
            style={{ color: '#C04000' }}
          >
            <i className="ri-gamepad-fill mr-1.5 sm:mr-2 inline text-[1em]" style={{ color: '#C04000' }}></i>
            Casino Platforms
          </h1>
          <p className="subheading-casino text-xs mt-1 text-slate-600">
            Verified &amp; Trusted Gaming Partners
          </p>
        </div>

        <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-4 md:max-w-4xl md:gap-5 md:px-8 md:py-6 lg:px-6">
          <CategorySection
            category="toptier"
            casinos={toptierCasinos}
            accentColor="#f59e0b"
            icon="ri-trophy-fill"
          />
          <CategorySection
            category="secondtier"
            casinos={secondtierCasinos}
            accentColor="#ef4444"
            icon="ri-vip-crown-fill"
          />
          <CategorySection
            category="thirdtier"
            casinos={thirdtierCasinos}
            accentColor="#C04000"
            icon="ri-medal-fill"
          />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
