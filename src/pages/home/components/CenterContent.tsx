import { useState } from 'react';

const badgeSections = [
  {
    id: 'license',
    icon: 'ri-award-fill',
    title: 'License',
    img: 'https://static.kiyupa.com/media/8bab0645b9386030b0172.png',
    color: '#FFD700',
  },
  {
    id: 'security',
    icon: 'ri-shield-keyhole-fill',
    title: 'Security',
    img: 'https://static.kiyupa.com/media/cdc51aa79938652cba782.png',
    color: '#ef4444',
  },
  {
    id: 'certifications',
    icon: 'ri-verified-badge-fill',
    title: 'Certifications',
    img: 'https://static.kiyupa.com/media/2b79d736993863aef640f.png',
    color: '#E6C200',
  },
  {
    id: 'responsible',
    icon: 'ri-heart-fill',
    title: 'Responsible Gaming',
    img: 'https://static.kiyupa.com/media/f4fad7245938622c156ef.png',
    color: '#FFD700',
  },
];

export default function CenterContent() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-5">
      {/* SKG Description */}
      <div
        className="rounded-xl p-6 text-center"
        style={{
          background: 'linear-gradient(145deg, #131313, #0a0a0a)',
          border: '1px solid #FFD70044',
          boxShadow: '0 0 20px #FFD70011',
        }}
      >
        {/* Body text */}
        <p className="text-body-casino text-sm leading-relaxed max-w-lg mx-auto">
          Offers A Wide Range Of High-Quality Gaming Products, Delivering An Exceptional Experience To Every Player.
          Our Dedicated Customer Support Team Is Available 24/7 To Assist You With Any Inquiries. We Treat And Store
          All Personal Information With The Highest Level Of Confidentiality And Security.
        </p>

        <div
          className="w-full h-px my-4"
          style={{ background: 'linear-gradient(90deg, transparent, #FFD70066, transparent)' }}
        />

        {/* Tags */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {['Licensed', 'Secure', 'Trusted', '24/7 Support'].map((tag) => (
            <span
              key={tag}
              className="label-futuristic px-3 py-1 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #1c0c00, #0d0500)',
                border: '1px solid #FFD70055',
                color: '#FFD700',
                textShadow: '0 0 8px #FFD70077, 0 0 16px #FFD70033',
                fontSize: '0.6rem',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* License + Security combined row */}
      <div className="grid grid-cols-2 gap-3">
        {badgeSections.slice(0, 2).map((section) => (
          <div
            key={section.id}
            className="rounded-xl p-4 transition-all duration-300 cursor-default"
            style={{
              background: hovered === section.id
                ? 'linear-gradient(145deg, #1c0c00, #0d0500)'
                : 'linear-gradient(145deg, #131313, #0a0a0a)',
              border: `1px solid ${hovered === section.id ? section.color : '#2a2a2a'}`,
              boxShadow: hovered === section.id
                ? `0 0 24px ${section.color}33, 0 0 48px ${section.color}11`
                : 'none',
            }}
            onMouseEnter={() => setHovered(section.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 flex items-center justify-center rounded-full"
                style={{
                  background: `${section.color}22`,
                  border: `1px solid ${section.color}`,
                }}
              >
                <i
                  className={`${section.icon} text-sm`}
                  style={{
                    color: section.color,
                    filter: `drop-shadow(0 0 5px ${section.color})`,
                  }}
                ></i>
              </div>
              <h3
                className="label-futuristic"
                style={{
                  color: section.color === '#ef4444' ? '#F5F5F5' : '#E6C200',
                  fontSize: '0.65rem',
                  textShadow: hovered === section.id
                    ? `0 0 12px ${section.color}aa, 0 0 24px ${section.color}55, 0 1px 3px rgba(0,0,0,0.95)`
                    : `0 0 6px ${section.color}44, 0 1px 3px rgba(0,0,0,0.8)`,
                }}
              >
                {section.title}
              </h3>
            </div>
            <div className="flex items-center justify-start gap-3 flex-wrap w-full">
              <img
                src={section.img}
                alt={`${section.title} Badges`}
                className="h-10 object-contain transition-all duration-300"
                style={{ filter: hovered === section.id ? 'brightness(1.4) drop-shadow(0 0 4px #FFD70055)' : 'brightness(1.0)' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Certifications + Responsible Gaming — full width each */}
      {badgeSections.slice(2).map((section) => (
        <div
          key={section.id}
          className="rounded-xl p-5 transition-all duration-300 cursor-default"
          style={{
            background: hovered === section.id
              ? 'linear-gradient(145deg, #1c0c00, #0d0500)'
              : 'linear-gradient(145deg, #131313, #0a0a0a)',
            border: `1px solid ${hovered === section.id ? section.color : '#2a2a2a'}`,
            boxShadow: hovered === section.id
              ? `0 0 24px ${section.color}33, 0 0 48px ${section.color}11`
              : 'none',
          }}
          onMouseEnter={() => setHovered(section.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-7 h-7 flex items-center justify-center rounded-full"
              style={{
                background: `${section.color}22`,
                border: `1px solid ${section.color}`,
              }}
            >
              <i
                className={`${section.icon} text-sm`}
                style={{
                  color: section.color,
                  filter: `drop-shadow(0 0 5px ${section.color})`,
                }}
              ></i>
            </div>
            <h3
              className="label-futuristic"
              style={{
                color: section.color === '#ef4444' ? '#F5F5F5' : '#E6C200',
                fontSize: '0.65rem',
                textShadow: hovered === section.id
                  ? `0 0 12px ${section.color}aa, 0 0 24px ${section.color}55, 0 1px 3px rgba(0,0,0,0.95)`
                  : `0 0 6px ${section.color}44, 0 1px 3px rgba(0,0,0,0.8)`,
              }}
            >
              {section.title}
            </h3>
          </div>
          <div className="flex items-center justify-start gap-3 flex-wrap w-full">
            <img
              src={section.img}
              alt={`${section.title} Badges`}
              className="h-10 object-contain transition-all duration-300"
              style={{ filter: hovered === section.id ? 'brightness(1.4) drop-shadow(0 0 4px #FFD70055)' : 'brightness(1.0)' }}
            />
          </div>
        </div>
      ))}

      {/* Copyright */}
      <div className="text-center py-4">
        <p className="text-small-casino text-xs">
          © 2026-2027 PSGA PAPUA NEW GUINEA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
