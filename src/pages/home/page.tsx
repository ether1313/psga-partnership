import SiteHeader from './components/SiteHeader';
import FeaturesSection from './components/FeaturesSection';
import LeftBanner, { WelcomeInfoSection, TrustBadgesSection } from './components/LeftBanner';
import CenterContent from './components/CenterContent';
import { HighestWinratePlatform } from './components/RightSidebar';
import BottomNav from './components/BottomNav';
import GridBackground from './components/GridBackground';

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20 md:pb-24 relative text-slate-900" style={{ background: '#f1f5f9' }}>
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
          className="w-full max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-8 lg:px-5 lg:py-6"
          style={{ background: 'transparent' }}
        >
          {/*
            Mobile: single column.
            Tablet (md–lg): max width + two columns for ranking + welcome to use horizontal space.
            Desktop (lg+): three columns.
          */}
          <div className="flex flex-col gap-5 md:gap-6 lg:hidden md:max-w-5xl md:mx-auto w-full">
            <div className="md:grid md:grid-cols-2 md:gap-6 md:items-start">
              <HighestWinratePlatform />
              <WelcomeInfoSection />
            </div>
            <CenterContent />
            <TrustBadgesSection />
          </div>

          <div className="hidden lg:grid lg:grid-cols-[280px_1fr_260px] gap-5 lg:gap-6">
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
