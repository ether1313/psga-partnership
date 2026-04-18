import SiteHeader from './components/SiteHeader';
import FeaturesSection from './components/FeaturesSection';
import LeftBanner from './components/LeftBanner';
import CenterContent from './components/CenterContent';
import RightSidebar from './components/RightSidebar';
import BottomNav from './components/BottomNav';
import GridBackground from './components/GridBackground';

export default function HomePage() {
  return (
    <div
      className="min-h-screen pb-20 relative"
      style={{ background: '#050300', color: '#fff' }}
    >
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
          style={{ background: 'linear-gradient(90deg, transparent, #f59e0b44, transparent)' }}
        />

        {/* Main 3-column layout */}
        <main
          className="max-w-screen-xl mx-auto px-3 py-6"
          style={{ background: 'transparent' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_260px] gap-5">
            {/* Left: Banners & Info */}
            <aside className="flex flex-col gap-4">
              <LeftBanner />
            </aside>

            {/* Center: Description, Badges */}
            <section className="flex flex-col gap-4">
              <CenterContent />
            </section>

            {/* Right: Jackpot Sidebar */}
            <aside className="flex flex-col gap-4">
              <RightSidebar />
            </aside>
          </div>
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
}
