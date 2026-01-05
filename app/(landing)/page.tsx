import LandingHero from "@/components/landing/LandingHero";
import LandingPreview from "@/components/landing/LandingPreview";
import LandingHowItWorks from "@/components/landing/LandingHowItWorks";
import LandingFeatures from "@/components/landing/LandingFeatures";
import LandingFAQ from "@/components/landing/LandingFAQ";
import LandingFinalCTA from "@/components/landing/LandingFinalCTA";

export default function LandingPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <LandingHero />
        <div className="md:justify-self-end">
          <LandingPreview />
        </div>
      </section>

      <LandingFeatures />
      <LandingFAQ />
  
    </div>
  );
}
