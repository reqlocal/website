import { ApiBlock } from "@/components/ApiBlock";
import { Features } from "@/components/Features";
import { FrameworkTabs } from "@/components/FrameworkTabs";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { InstallBlock } from "@/components/InstallBlock";
import { SectionDivider } from "@/components/SectionDivider";
import { WhySection } from "@/components/WhySection";

export default function HomePage() {
  return (
    <main className="bg-canvas">
      <Hero />
      <SectionDivider />
      <WhySection />
      <InstallBlock />
      <FrameworkTabs />
      <HowItWorks />
      <Features />
      {/* Pricing (paid tiers) paused — see /pricing for a short note */}
      <ApiBlock />
    </main>
  );
}
