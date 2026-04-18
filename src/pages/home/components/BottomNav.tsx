import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { id: 'home', label: 'HOME', icon: 'ri-home-5-fill', path: '/' },
  { id: 'casinos', label: 'CASINOS', icon: 'ri-gamepad-fill', path: '/casinos', badge: 1 },
  /** Placeholder: navigates home until RTP page is ready */
  { id: 'rtp-games', label: 'RTP GAMES', icon: 'ri-percent-line', path: '/' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [pressedId, setPressedId] = useState<string | null>(null);
  const [pulseId, setPulseId] = useState<string | null>(null);

  /* Cycle through icons with a subtle pulse every few seconds */
  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    let idx = 0;
    const interval = setInterval(() => {
      setPulseId(ids[idx % ids.length]);
      idx += 1;
      setTimeout(() => setPulseId(null), 600);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (item: (typeof navItems)[0]) => {
    setPressedId(item.id);
    setTimeout(() => setPressedId(null), 350);
    if (!item.path.startsWith('#')) {
      navigate(item.path);
    }
  };

  return (
    <>
      <style>{`
        @keyframes icon-bounce {
          0%   { transform: translateY(0) scale(1); }
          30%  { transform: translateY(-5px) scale(1.18); }
          55%  { transform: translateY(1px) scale(0.95); }
          75%  { transform: translateY(-2px) scale(1.06); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes icon-spin-once {
          0%   { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes icon-shake {
          0%, 100% { transform: rotate(0deg); }
          20%  { transform: rotate(-12deg) scale(1.15); }
          40%  { transform: rotate(12deg) scale(1.15); }
          60%  { transform: rotate(-8deg); }
          80%  { transform: rotate(8deg); }
        }
        @keyframes nav-active-glow {
          0%, 100% { box-shadow: 0 0 14px #FFD70055; }
          50%       { box-shadow: 0 0 28px #FFD700aa, 0 0 50px #f59e0b44; }
        }
        @keyframes badge-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 8px #ef4444; }
          50%       { transform: scale(1.25); box-shadow: 0 0 16px #ef4444, 0 0 28px #ef444466; }
        }
        @keyframes label-slide-up {
          0%   { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes top-bar-glow {
          0%, 100% { opacity: 0.7; width: 40px; }
          50%       { opacity: 1; width: 56px; box-shadow: 0 0 18px #FFD700; }
        }
      `}</style>

      <nav
        className="fixed bottom-0 left-0 right-0 z-50 flex items-stretch h-16"
        style={{
          background: 'linear-gradient(180deg, #0d0500 0%, #000000 100%)',
          borderTop: '1px solid #FFD70033',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.9), 0 -1px 0 #FFD70022',
        }}
      >
        {navItems.map((item) => {
          const isActive =
            item.id === 'rtp-games'
              ? false
              : item.path.startsWith('#')
                ? false
                : location.pathname === item.path;
          const isPressed = pressedId === item.id;
          const isPulsing = pulseId === item.id;

          /* Pick animation per icon */
          const iconAnim =
            item.id === 'home'
              ? 'icon-bounce'
              : item.id === 'casinos'
              ? 'icon-spin-once'
              : 'icon-shake';

          const shouldAnimate = isPressed || isPulsing;

          return (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all duration-300 relative border-0 bg-transparent"
              style={{
                background: isActive
                  ? 'linear-gradient(180deg, #1c0c00 0%, #0d0500 100%)'
                  : 'transparent',
                animation: isActive ? 'nav-active-glow 2.5s ease-in-out infinite' : 'none',
              }}
            >
              {/* Active top border glow */}
              {isActive && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
                    boxShadow: '0 0 12px #FFD700',
                    animation: 'top-bar-glow 2s ease-in-out infinite',
                  }}
                />
              )}

              {/* Icon wrapper */}
              <div className="w-8 h-8 flex items-center justify-center relative">
                {/* Glow ring behind icon when active */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 70%)',
                      animation: 'nav-active-glow 2s ease-in-out infinite',
                    }}
                  />
                )}

                <i
                  className={`${item.icon} text-xl transition-colors duration-300`}
                  style={{
                    color: isActive ? '#FFD700' : '#888888',
                    filter: isActive
                      ? 'drop-shadow(0 0 8px #FFD700) drop-shadow(0 0 16px #f59e0b66)'
                      : shouldAnimate
                      ? 'drop-shadow(0 0 6px #FFD70088)'
                      : 'none',
                    animation: shouldAnimate
                      ? `${iconAnim} 0.5s ease-in-out`
                      : 'none',
                    display: 'inline-block',
                  }}
                />

                {/* Badge */}
                {item.badge && (
                  <span
                    className="absolute -top-1 -right-1 label-futuristic rounded-full w-4 h-4 flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                      color: '#FFFFFF',
                      fontSize: '8px',
                      animation: 'badge-pulse 1.8s ease-in-out infinite',
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              <span
                className="label-futuristic whitespace-nowrap transition-all duration-300"
                style={{
                  fontSize: '9px',
                  color: isActive ? '#FFD700' : '#888888',
                  textShadow: isActive
                    ? '0 0 10px #FFD700aa, 0 0 20px #FFD70055, 0 1px 2px rgba(0,0,0,0.9)'
                    : '0 1px 2px rgba(0,0,0,0.6)',
                  animation: isActive ? 'label-slide-up 0.3s ease-out' : 'none',
                  transform: isPressed ? 'scale(0.9)' : 'scale(1)',
                }}
              >
                {item.label}
              </span>

              {/* Press ripple */}
              {isPressed && (
                <div
                  className="absolute inset-0 rounded pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,215,0,0.15) 0%, transparent 70%)',
                    animation: 'nav-active-glow 0.35s ease-out',
                  }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
}
