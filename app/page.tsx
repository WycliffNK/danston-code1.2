import { SiteHeader } from "./components/SiteHeader";
import { RevealObserver } from "./components/Reveal";
import {
  About,
  AfricaMission,
  Books,
  Credibility,
  Footer,
  Hero,
  Problem,
  PullQuote,
  System,
} from "./components/Sections";
import { Pathways } from "./components/Pathways";
import { ProgrammesSection } from "./components/ProgrammesSection";
import { Assessment } from "./components/Assessment";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <RevealObserver />
      <main>
        <Hero />
        <PullQuote />
        <Problem />
        <Credibility />
        <ProgrammesSection />
        <Pathways />
        <System />
        <About />
        <Books />
        <AfricaMission />
        <Assessment />
      </main>
      <Footer />
    </>
  );
}
