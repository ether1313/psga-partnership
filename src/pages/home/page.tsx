import SiteHeader from './components/SiteHeader';
import FeaturesSection from './components/FeaturesSection';
import LeftBanner, { WelcomeInfoSection, TrustBadgesSection } from './components/LeftBanner';
import CenterContent from './components/CenterContent';
import { HighestWinratePlatform } from './components/RightSidebar';
import BottomNav from './components/BottomNav';
import GridBackground from './components/GridBackground';

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20 relative text-slate-900" style={{ background: '#f1f5f9' }}>
      {/* Global subtle grid — covers entire page */}
      <GridBackground zone="normal" style={{ position: 'fixed', zIndex: 0 }} />

      {/* All content sits above the grid */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Header + Marquee */}
        <SiteHeader />

        {/* Features: 3 glowing icons */}
        <FeaturesSection />

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(192,64,0,0.35), transparent)' }}
        />

        {/* Main layout */}
        <main
          className="max-w-screen-xl mx-auto px-3 py-6"
          style={{ background: 'transparent' }}
        >
          {/* Mobile: winrate → welcome copy → center → trust badges (last). Welcome banner hidden on mobile (see LeftBanner). */}
          <div className="flex flex-col gap-5 lg:hidden">
            <HighestWinratePlatform />
            <WelcomeInfoSection />
            <CenterContent />
            <TrustBadgesSection />
          </div>

          {/* Desktop: 3 columns */}
          <div className="hidden lg:grid lg:grid-cols-[280px_1fr_260px] gap-5">
            <aside className="flex flex-col gap-4">
              <LeftBanner />
            </aside>

            <section className="flex flex-col gap-4">
              <CenterContent />
            </section>

            <aside className="flex flex-col gap-4">
              <HighestWinratePlatform />
            </aside>
          </div>
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
