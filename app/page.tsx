import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import Problem from '@/components/landing/Problem';
import Solution from '@/components/landing/Solution';
import Features from '@/components/landing/Features';
import Screenshots from '@/components/landing/Screenshots';
import HowItWorks from '@/components/landing/HowItWorks';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import { MobileAppStructuredData, FAQStructuredData } from '@/components/shared/StructuredData';

export default function Home() {
  return (
    <>
      <MobileAppStructuredData />
      <FAQStructuredData />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
