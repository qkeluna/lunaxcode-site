import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';
import { OnboardingModal } from '@/components/onboarding/OnboardingModal';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Pricing />
        <Process />
        <Contact />
      </main>
      <Footer />
      <OnboardingModal />
    </div>
  );
}
