import { useEffect, useState } from 'react';

const depositRankingBanner = `${import.meta.env.BASE_URL}images/deposit-ranking.png`;
const comingSoonBanner = `${import.meta.env.BASE_URL}images/coming-soon-sidebar.png`;

const jackpotData = [
  {
    id: 1,
    name: 'PNGGO',
    href: 'https://pnggo.bet/',
    banner: depositRankingBanner,
    jackpot: 461257,
    rank: 1,
  },
  {
    id: 2,
    name: 'Coming Soon',
    href: '',
    banner: comingSoonBanner,
    jackpot: 0,
    rank: 2,
  },
  {
    id: 3,
    name: 'Coming Soon',
    href: '',
    banner: comingSoonBanner,
    jackpot: 0,
    rank: 3,
  },
];

function LiveJackpotCard({ item }: { item: typeof jackpotData[0] }) {
  const isComingSoon = item.banner === comingSoonBanner;
  const [amount, setAmount] = useState(item.jackpot);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (isComingSoon) return;
    const interval = setInterval(() => {
      setAmount((prev) => prev + Math.floor(Math.random() * 29 + 1));
    }, 900 + item.id * 200);
    return () => clearInterval(interval);
  }, [item.id, isComingSoon]);

  const rankColors = ['#FFD700', '#E0E0E0', '#CD7F32'];
  const rankColor = rankColors[item.rank - 1] || '#FFD700';

  const shellClass = `block rounded-xl overflow-hidden transition-all duration-300 ${
    isComingSoon ? 'cursor-default' : 'cursor-pointer'
  }`;
  const shellStyle = {
    background: 'linear-gradient(145deg, #1c0c00, #0d0500)',
    border: `1.5px solid ${hovered ? rankColor : rankColor + '44'}`,
    boxShadow: hovered
      ? `0 0 24px ${rankColor}77, 0 0 48px ${rankColor}22`
      : `0 0 8px ${rankColor}22`,
    transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
  } as const;

  const body = (
    <>
      <div className="relative">
        <img
          src={item.banner}
          alt={item.rank === 1 ? 'Monthly competition — deposit ranking' : `${item.name} — coming soon`}
          className="w-full h-24 object-cover object-center transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div
          className="absolute top-2 left-2 w-7 h-7 flex items-center justify-center rounded-full label-futuristic"
          style={{
            background: `linear-gradient(135deg, ${rankColor}, ${rankColor}99)`,
            color: '#000',
            boxShadow: `0 0 12px ${rankColor}`,
            fontSize: '10px',
          }}
        >
          #{item.rank}
        </div>
        {hovered && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,215,0,0.2) 50%, transparent 60%)',
              animation: 'streak 0.6s ease-out forwards',
            }}
          />
        )}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
          style={{ background: 'linear-gradient(0deg, #0d0500 0%, transparent 100%)' }}
        />
      </div>

      <div
        className="px-3 py-2"
        style={{ background: 'linear-gradient(180deg, #0d0500 0%, #080300 100%)' }}
      >
        <div className={`flex items-center justify-between ${isComingSoon ? '' : 'mb-1'}`}>
          <span
            className="subheading-casino text-xs tracking-widest uppercase"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 8px rgba(255,215,0,0.5), 0 1px 3px rgba(0,0,0,0.95)',
            }}
          >
            {item.name}
          </span>
          {!isComingSoon && (
            <span
              className="label-futuristic px-1.5 py-0.5 rounded"
              style={{
                background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                color: '#FFFFFF',
                boxShadow: '0 0 8px #ef4444',
                fontSize: '8px',
              }}
            >
              LIVE
            </span>
          )}
        </div>
        {!isComingSoon && (
          <div className="flex items-baseline gap-1">
            <span className="jackpot-number text-lg tabular-nums">
              {amount.toLocaleString()}
            </span>
            <span
              className="label-futuristic text-xs"
              style={{ color: '#E6C200' }}
            >
              PGK
            </span>
          </div>
        )}
      </div>
    </>
  );

  return isComingSoon ? (
    <div className={shellClass} style={shellStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {body}
    </div>
  ) : (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={shellClass}
      style={shellStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {body}
    </a>
  );
}

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div
        className="rounded-xl p-3"
        style={{
          background: 'linear-gradient(145deg, #1c0c00, #0d0500)',
          border: '1px solid #FFD70044',
          boxShadow: '0 0 15px #FFD70011',
        }}
      >
        <div className="flex items-center gap-2">
          <i
            className="ri-bar-chart-fill text-sm"
            style={{ color: '#FFD700', filter: 'drop-shadow(0 0 5px #FFD700)' }}
          ></i>
          <span
            className="subheading-casino text-xs tracking-widest uppercase"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 10px rgba(255,215,0,0.5), 0 1px 3px rgba(0,0,0,0.95)',
            }}
          >
            Highest Winrate Platform
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span
            className="label-futuristic text-xs"
            style={{
              color: '#ef4444',
              textShadow: '0 0 10px #ef444499, 0 0 20px #ef444444, 0 1px 2px rgba(0,0,0,0.8)',
            }}
          >
            TOP 3 THIS WEEK
          </span>

        </div>
      </div>

      {jackpotData.map((item) => (
        <LiveJackpotCard key={item.id} item={item} />
      ))}
    </div>
  );
}
