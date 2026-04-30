import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BRAND = '#C04000';

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
        @keyframes badge-pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.15); }
        }
      `}</style>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-stretch h-16 bg-white border-t border-slate-200 shadow-[0_-4px_24px_rgba(15,23,42,0.08)]">
        {navItems.map((item) => {
          const isActive =
            item.id === 'rtp-games'
              ? false
              : item.path.startsWith('#')
                ? false
                : location.pathname === item.path;
          const isPressed = pressedId === item.id;

          const iconAnim =
            item.id === 'home'
              ? 'icon-bounce'
              : item.id === 'casinos'
              ? 'icon-spin-once'
              : 'icon-shake';

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item)}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 cursor-pointer relative border-0 bg-transparent"
            >
              {isActive && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-10 rounded-full"
                  style={{ backgroundColor: BRAND }}
                />
              )}

              <div className="w-8 h-8 flex items-center justify-center relative">
                <i
                  className={`${item.icon} text-xl transition-colors duration-200`}
                  style={{
                    color: isActive ? BRAND : '#64748b',
                    animation: isPressed ? `${iconAnim} 0.5s ease-in-out` : 'none',
                    display: 'inline-block',
                  }}
                />

                {item.badge && (
                  <span
                    className="absolute -top-1 -right-1 label-futuristic rounded-full w-4 h-4 flex items-center justify-center bg-red-600 text-white text-[8px]"
                    style={{ animation: 'badge-pulse 1.8s ease-in-out infinite' }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              <span
                className="label-futuristic whitespace-nowrap text-[9px] transition-colors duration-200"
                style={{
                  color: isActive ? BRAND : '#64748b',
                  transform: isPressed ? 'scale(0.96)' : 'scale(1)',
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
