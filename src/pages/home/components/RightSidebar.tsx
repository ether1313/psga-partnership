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

const cardShellStyle = {
  borderColor: '#e2e8f0',
  boxShadow: '0 1px 3px rgba(15,23,42,0.06)',
} as const;

function LiveJackpotCard({ item }: { item: typeof jackpotData[0] }) {
  const isComingSoon = item.banner === comingSoonBanner;
  const [amount, setAmount] = useState(item.jackpot);

  useEffect(() => {
    if (isComingSoon) return;
    const interval = setInterval(() => {
      setAmount((prev) => prev + Math.floor(Math.random() * 29 + 1));
    }, 900 + item.id * 200);
    return () => clearInterval(interval);
  }, [item.id, isComingSoon]);

  const rankColors = ['#C04000', '#94a3b8', '#9a3412'];
  const rankColor = rankColors[item.rank - 1] || '#ca8a04';

  const shellClass =
    'block rounded-xl overflow-hidden border bg-white shadow-sm ' +
    (isComingSoon ? 'cursor-default' : 'cursor-pointer');

  const body = (
    <>
      <div className="relative">
        <img
          src={item.banner}
          alt={item.rank === 1 ? 'Monthly competition — deposit ranking' : `${item.name} — coming soon`}
          className="w-full h-24 object-cover object-center"
        />
        <div
          className="absolute top-2 left-2 w-7 h-7 flex items-center justify-center rounded-full label-futuristic bg-white border border-slate-200 text-[10px] font-bold shadow-sm"
          style={{ color: rankColor }}
        >
          #{item.rank}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="px-3 py-2 bg-slate-50 border-t border-slate-100">
        <div className={`flex items-center justify-between ${isComingSoon ? '' : 'mb-1'}`}>
          <span className="subheading-casino text-xs tracking-widest uppercase text-slate-800">
            {item.name}
          </span>
          {!isComingSoon && (
            <span className="label-futuristic px-1.5 py-0.5 rounded text-[8px] bg-red-600 text-white">
              LIVE
            </span>
          )}
        </div>
        {!isComingSoon && (
          <div className="flex items-baseline gap-1">
            <span className="jackpot-number text-lg tabular-nums">
              {amount.toLocaleString()}
            </span>
            <span className="label-futuristic text-xs" style={{ color: '#C04000' }}>
              PGK
            </span>
          </div>
        )}
      </div>
    </>
  );

  return isComingSoon ? (
    <div className={shellClass} style={cardShellStyle}>
      {body}
    </div>
  ) : (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={shellClass}
      style={cardShellStyle}
    >
      {body}
    </a>
  );
}

/** Header + top 3 cards — used in right sidebar on desktop; under welcome banner on mobile. */
export function HighestWinratePlatform() {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl p-3 bg-white border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <i className="ri-bar-chart-fill text-sm" style={{ color: '#C04000' }}></i>
          <span className="subheading-casino text-xs tracking-widest uppercase text-slate-900">
            Highest Winrate Platform
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="label-futuristic text-xs text-red-700">
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

export default function RightSidebar() {
  return <HighestWinratePlatform />;
}
