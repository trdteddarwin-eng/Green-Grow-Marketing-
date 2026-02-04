import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ClientTestimonials } from "@/components/ClientTestimonials";
import { LetsWorkTogether } from "@/components/LetsWorkTogether";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-primary selection:text-black">
      <Hero />
      <LogoBar />
      <Services />
      <Testimonials />
      <ClientTestimonials />
      <LetsWorkTogether />
      <FAQ />
    </main>
  );
}
