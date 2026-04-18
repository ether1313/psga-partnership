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
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300"
        style={{
          background:
            casino.label === 'PNGGO'
              ? 'linear-gradient(145deg, #ffffff, #f0f0f0)'
              : 'linear-gradient(145deg, #1a0a00, #0d0500)',
          border: `2px solid ${hovered ? '#FFD700' : '#f59e0b33'}`,
          boxShadow: hovered
            ? '0 0 22px #FFD70077, 0 0 44px #f59e0b33'
            : '0 0 6px #f59e0b11',
          transform: hovered ? 'translateY(-4px) scale(1.06)' : 'translateY(0) scale(1)',
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
        className="subheading-casino text-xs tracking-wider text-center whitespace-nowrap transition-all duration-300"
        style={{
          color: hovered ? '#FFD700' : '#CCCCCC',
          textShadow: hovered
            ? '0 0 10px #FFD700aa, 0 0 20px #FFD70055, 0 1px 2px rgba(0,0,0,0.9)'
            : '0 1px 2px rgba(0,0,0,0.8)',
        }}
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
      className="rounded-xl p-5 relative overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #111, #0a0a0a)',
        border: `1px solid ${accentColor}33`,
        boxShadow: `0 0 20px ${accentColor}11`,
      }}
    >
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]">
        <span className="headline-cinematic text-5xl" style={{ color: '#FFD700', letterSpacing: '0.15em' }}>
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
            <span
              className="subheading-casino text-xs tracking-widest uppercase"
              style={{ color: '#CCCCCC', textShadow: '0 1px 2px rgba(0,0,0,0.9)' }}
            >
              WEEKLY RECOMMEND BY PSGA
            </span>
            <span
              className="label-futuristic px-3 py-1 rounded-full flex items-center gap-1 shrink-0"
              style={{
                background: 'linear-gradient(135deg, #b45309, #FFD700)',
                color: '#000000',
                boxShadow: '0 0 12px #FFD70077',
                fontSize: '0.65rem',
              }}
            >
              <i className="ri-trophy-fill"></i> TOP TIER
            </span>
            <img
              src={`${import.meta.env.BASE_URL}images/weekly-top-tier-banner.png`}
              alt="PNGGO weekly jackpot banner"
              className="h-6 sm:h-7 w-auto max-w-[100px] sm:max-w-[118px] object-contain object-left rounded-md shrink-0"
              style={{ filter: 'drop-shadow(0 0 8px #FFD70033)' }}
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
              <span
                className="subheading-casino text-xs tracking-widest uppercase block"
                style={{ color: '#CCCCCC', textShadow: '0 1px 2px rgba(0,0,0,0.9)' }}
              >
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
    <div
      className="min-h-screen pb-24 relative"
      style={{ background: '#050300' }}
    >
      {/* Grid background */}
      <GridBackground zone="normal" style={{ position: 'fixed', zIndex: 0 }} />

      <div className="relative" style={{ zIndex: 1 }}>
        <SiteHeader />

        {/* Page title */}
        <div
          className="py-6 px-4 text-center"
          style={{
            background: 'linear-gradient(180deg, rgba(28,12,0,0.7) 0%, transparent 100%)',
            borderBottom: '1px solid #FFD70022',
          }}
        >
          <h1
            className="headline-cinematic"
            style={{
              fontSize: '2rem',
              color: '#FFD700',
              filter: 'drop-shadow(0 0 10px #FFD70077)',
            }}
          >
            <i className="ri-gamepad-fill mr-2"></i>Casino Platforms
          </h1>
          <p
            className="subheading-casino text-xs mt-1"
            style={{ color: '#CCCCCC', textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}
          >
            Verified &amp; Trusted Gaming Partners
          </p>
        </div>

        <main className="max-w-3xl mx-auto px-3 py-4 flex flex-col gap-4">
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
            accentColor="#fbbf24"
            icon="ri-medal-fill"
          />
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
