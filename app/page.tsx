import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ClientTestimonials } from "@/components/ClientTestimonials";
import { LetsWorkTogether } from "@/components/LetsWorkTogether";
import { FAQ } from "@/components/FAQ";
import { StickyContact } from "@/components/StickyContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-primary selection:text-black">
      <StickyContact />
      <Hero />
      <Services />
      <Testimonials />
      <ClientTestimonials />
      <LetsWorkTogether />
      <FAQ />
    </main>
  );
}
