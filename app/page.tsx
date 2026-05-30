import Navbar from "../src/components/navbar/Navbar";
import WelcomeIntro from "../src/components/intro/WelcomeIntro";
import Hero from "../src/components/hero/Hero";
import Marquee from "../src/components/marquee/Marquee";
import Stats from "../src/components/stats/Stats";
import LogoSlider from "../src/components/logos/LogoSlider";
import Services from "../src/components/services/Services";
import Pricing from "../src/components/pricing/Pricing";
import ReelPackages from "../src/components/pricing/ReelPackages";
import Portfolio from "../src/components/portfolio/Portfolio";
import InstagramFeed from "../src/components/instagram/InstagramFeed";
import VideoShowcase from "../src/components/video/VideoShowcase";
import Testimonials from "../src/components/testimonials/Testimonials";
import FAQ from "../src/components/faq/FAQ";
import Contact from "../src/components/Contact/Contact";
import CTA from "../src/components/cta/CTA";
import Footer from "../src/components/footer/Footer";

import Reveal from "../src/components/animations/Reveal";

export default function Home() {
  return (
    <main>

      <WelcomeIntro />

      <Navbar />

      <Hero />

      <Marquee />

      <Reveal>
        <Stats />
      </Reveal>

      <Reveal>
        <LogoSlider />
      </Reveal>

      <Reveal>
        <Services />
      </Reveal>

      <Reveal>
        <Pricing />
      </Reveal>

      <Reveal>
        <ReelPackages />
      </Reveal>

      <Reveal>
        <Portfolio />
      </Reveal>

      <Reveal>
        <InstagramFeed />
      </Reveal>

      <Reveal>
        <VideoShowcase />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>

      <Reveal>
        <FAQ />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Reveal>
        <CTA />
      </Reveal>

      <Footer />

    </main>
  );
}
