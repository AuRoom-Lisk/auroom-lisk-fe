import { Hero } from '@/components/landing/Hero';
import { WhatIsAuRoom } from '@/components/landing/WhatIsAuRoom';
import { UnderstandingAssets } from '@/components/landing/UnderstandingAssets';
import { WhyRWA } from '@/components/landing/WhyRWA';
import { HowYieldWorks } from '@/components/landing/HowYieldWorks';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { LiveStats } from '@/components/landing/LiveStats';
import { BuiltWith } from '@/components/landing/BuiltWith';
import { SecurityCompliance } from '@/components/landing/SecurityCompliance';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { LandingFooter } from '@/components/landing/LandingFooter';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. What is AuRoom */}
      <WhatIsAuRoom />

      {/* 3. Understanding the Assets */}
      <UnderstandingAssets />

      {/* 4. Why RWA Matters */}
      <WhyRWA />

      {/* 5. How Yield is Generated */}
      <HowYieldWorks />

      {/* 6. How It Works */}
      <HowItWorks />

      {/* 7. Live Protocol Stats */}
      <LiveStats />

      {/* 8. Built With */}
      <BuiltWith />

      {/* 9. Security & Compliance */}
      <SecurityCompliance />

      {/* 10. Final CTA */}
      <FinalCTA />

      {/* 11. Footer */}
      <LandingFooter />
    </div>
  );
}
