import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Navbar from "@/components/layout/Navbar";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
