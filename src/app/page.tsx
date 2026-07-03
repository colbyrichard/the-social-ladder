import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { LogoWall } from "@/components/logo-wall";
import { Services } from "@/components/services";
import { Founder } from "@/components/founder";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <LogoWall />
        <Services />
        <Founder />
        <Work />
        <Process />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
