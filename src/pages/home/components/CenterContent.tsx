const BRAND = '#C04000';

export default function CenterContent() {
  return (
    <div className="flex flex-col gap-5">
      {/* PSGA intro */}
      <div
        className="rounded-xl p-6 text-center bg-white border border-slate-200 shadow-sm"
      >
        <p className="text-body-casino text-sm leading-relaxed max-w-lg mx-auto">
          Offers A Wide Range Of High-Quality Gaming Products, Delivering An Exceptional Experience To Every Player.
          Our Dedicated Customer Support Team Is Available 24/7 To Assist You With Any Inquiries. We Treat And Store
          All Personal Information With The Highest Level Of Confidentiality And Security.
        </p>

        <div
          className="w-full h-px my-4"
          style={{
            background: `linear-gradient(90deg, transparent, ${BRAND}, transparent)`,
            opacity: 0.85,
          }}
        />

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {['Licensed', 'Secure', 'Trusted', '24/7 Support'].map((tag) => (
            <span
              key={tag}
              className="label-futuristic px-3 py-1 rounded-full text-xs text-white border"
              style={{ backgroundColor: BRAND, borderColor: BRAND }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* SEO: PSGA origins & purpose */}
      <article
        className="rounded-xl p-6 text-left bg-white border border-slate-200 shadow-sm"
        aria-labelledby="psga-about-heading"
      >
        <h2
          id="psga-about-heading"
          className="label-futuristic mb-3 text-sm tracking-wide"
          style={{ color: BRAND }}
        >
          What Is PSGA And Why It Exists
        </h2>
        <div className="text-body-casino text-sm leading-relaxed space-y-3 max-w-none">
          <p>
            <strong className="text-slate-900 font-semibold">PSGA</strong> stands for our Papua New Guinea–focused gaming
            initiative: a brand built to bring international-standard entertainment, transparency, and player care to the
            region. The project was started to give local audiences a single, trustworthy hub for discovering licensed
            partners and understanding how games are offered responsibly.
          </p>
          <p>
            Our purpose is straightforward: promote safe, regulated play; highlight operators that meet strict compliance
            and certification expectations; and make responsible gaming resources easy to find. PSGA is not only a
            showcase for jackpots and casinos—it is a commitment to clear information, 24/7 support culture, and respect
            for player privacy across every touchpoint.
          </p>
          <p className="text-small-casino text-xs">
            Whether you are new to online gaming or comparing trusted platforms in Papua New Guinea, PSGA exists to help
            you make informed choices—with licensing, certifications, and responsible gaming signals collected in one
            place.
          </p>
        </div>
      </article>

      <div className="text-center py-4">
        <p className="text-small-casino text-xs">
          © 2026 PSGA PAPUA NEW GUINEA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
