import { Nav } from "./components/Nav";
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
import { Assessment } from "./components/Assessment";

export default function Home() {
  return (
    <>
      <Nav />
      <RevealObserver />
      <main>
        <Hero />
        <PullQuote />
        <Problem />
        <Credibility />
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
