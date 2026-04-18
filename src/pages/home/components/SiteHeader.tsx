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
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-yellow-500/30' : 'border-b border-yellow-500/20'
        }`}
        style={{
          background: scrolled
            ? 'rgba(0,0,0,0.97)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(5,3,0,0.92) 100%)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="relative flex items-center justify-center px-4 py-3">
          {/* Logo + Title — centered */}
          <a href="/" className="flex items-center justify-center gap-4">
            <img
              src="https://storage.readdy-site.link/project_files/e0a8be36-44a1-49ae-8c9c-bcd59c8e395f/d9cd378f-f92b-440e-b8fc-71f025618564_Image_20260417145639_357_17.png"
              alt="PSGA Papua New Guinea"
              className="h-16 object-contain"
              style={{ filter: 'drop-shadow(0 0 14px #FFD70099)' }}
            />
            <div className="flex flex-col gap-0">
              <span
                className="text-2xl font-black tracking-widest whitespace-nowrap leading-none"
                style={{
                  background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 30%, #FFD700 70%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 0 8px #FF000066)',
                  fontFamily: '"Rajdhani", "Oswald", sans-serif',
                  letterSpacing: '0.12em',
                }}
              >
                PNG SECURE
              </span>
              <span
                className="text-xl font-bold tracking-widest whitespace-nowrap leading-none -mt-1"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 40%, #FF4500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 6px #FFD70066)',
                  fontFamily: '"Rajdhani", "Oswald", sans-serif',
                  letterSpacing: '0.08em',
                }}
              >
                GAMING ALLIANCE
              </span>
            </div>
          </a>
        </div>
      </header>

      {/* Glowing Marquee ticker */}
      <div
        className="overflow-hidden whitespace-nowrap py-2 relative"
        style={{
          background: 'linear-gradient(90deg, #7f0000, #cc0000, #ff0000, #cc0000, #7f0000)',
          boxShadow: '0 0 24px #ff000077, 0 2px 12px #ff000044',
        }}
      >
        <div className="animate-marquee-slow inline-block">
          {[1, 2, 3].map((i) => (
            <span key={i} className="inline-block">
              <span
                className="subheading-casino text-sm"
                style={{
                  color: '#FFFFFF',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textShadow:
                    '0 0 8px #FFFFFF, 0 0 18px #FFD700, 0 0 32px #FFD70066, 0 1px 3px rgba(0,0,0,0.6)',
                }}
              >
                🔥 HOT: PSGA-VETTED PLATFORMS FOR PNG &nbsp;•&nbsp; JOIN THE ALLIANCE — PLAY SAFE &nbsp;•&nbsp;{' '}
                <span style={{ color: '#FFD700', textShadow: '0 0 10px #FFD700, 0 0 22px #FFD70099' }}>
                  CERTIFIED SITES ONLY — WE VERIFY FOR YOU
                </span>
                {' '}&nbsp;•&nbsp; PNG PLAYERS: FIND YOUR TRUSTED PLATFORM &nbsp;•&nbsp; PSGA SECURITY AND LICENSE CHECKS &nbsp;•&nbsp;{' '}
                <span style={{ color: '#FFF176', textShadow: '0 0 10px #FFF176, 0 0 20px #FFD70066' }}>
                  ONLY RECOMMENDED SAFE OPERATORS FOR PNG
                </span>
                {' '}&nbsp;•&nbsp; YOUR PNG GAMING ALLIANCE &nbsp;•&nbsp; STAY PROTECTED — CHOOSE PSGA-LISTED BRANDS &nbsp;•&nbsp;{' '}
                <span style={{ color: '#FFD700', textShadow: '0 0 10px #FFD700, 0 0 22px #FFD70099' }}>
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
