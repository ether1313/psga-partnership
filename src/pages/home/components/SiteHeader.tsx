import { useState, useEffect } from 'react';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled ? 'border-slate-200 shadow-sm' : 'border-slate-100'
        }`}
        style={{
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="relative flex items-center justify-center px-4 py-3">
          <a href="/" className="flex items-center justify-center gap-4">
            {/*
              Logo PNG is raster: any words baked into the image cannot change font via CSS.
              Goldman applies only to the HTML title spans below.
            */}
            <img
              src="https://storage.readdy-site.link/project_files/e0a8be36-44a1-49ae-8c9c-bcd59c8e395f/d9cd378f-f92b-440e-b8fc-71f025618564_Image_20260417145639_357_17.png"
              alt="PSGA Papua New Guinea"
              className="h-16 object-contain shrink-0"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(180,83,9,0.2))' }}
            />
            <div className="goldman-regular flex flex-col gap-0">
              <span
                className="text-2xl sm:text-[1.65rem] tracking-[0.08em] whitespace-nowrap leading-none uppercase"
                style={{
                  color: '#911B1D',
                  fontFamily: '"Goldman", ui-sans-serif, system-ui, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                PNG SECURE
              </span>
              <span
                className="text-lg sm:text-xl tracking-[0.06em] whitespace-nowrap leading-none -mt-0.5 uppercase"
                style={{
                  color: '#8C5520',
                  fontFamily: '"Goldman", ui-sans-serif, system-ui, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                }}
              >
                GAMING ALLIANCE
              </span>
            </div>
          </a>
        </div>
      </header>

      {/* Marquee ticker */}
      <div
        className="overflow-hidden whitespace-nowrap py-2 relative border-b border-red-900/10"
        style={{
          background: 'linear-gradient(90deg, #9f1239, #b91c1c, #dc2626, #b91c1c, #9f1239)',
        }}
      >
        <div className="animate-marquee-slow inline-block">
          {[1, 2, 3].map((i) => (
            <span key={i} className="inline-block">
              <span
                className="subheading-casino text-sm text-white"
                style={{
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                }}
              >
                🔥 HOT: PSGA-VETTED PLATFORMS FOR PNG &nbsp;•&nbsp; JOIN THE ALLIANCE — PLAY SAFE &nbsp;•&nbsp;{' '}
                <span className="text-amber-100">
                  CERTIFIED SITES ONLY — WE VERIFY FOR YOU
                </span>
                {' '}&nbsp;•&nbsp; PNG PLAYERS: FIND YOUR TRUSTED PLATFORM &nbsp;•&nbsp; PSGA SECURITY AND LICENSE CHECKS &nbsp;•&nbsp;{' '}
                <span className="text-amber-50">
                  ONLY RECOMMENDED SAFE OPERATORS FOR PNG
                </span>
                {' '}&nbsp;•&nbsp; YOUR PNG GAMING ALLIANCE &nbsp;•&nbsp; STAY PROTECTED — CHOOSE PSGA-LISTED BRANDS &nbsp;•&nbsp;{' '}
                <span className="text-amber-100">
                  TRENDING: SAFE PLAY IN PAPUA NEW GUINEA
                </span>
                {' '}&nbsp;•&nbsp;
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
