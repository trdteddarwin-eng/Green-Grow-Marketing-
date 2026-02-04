import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ClientTestimonials } from "@/components/ClientTestimonials";
import { LetsWorkTogether } from "@/components/LetsWorkTogether";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-primary selection:text-black">
      <Hero />
      <Ticker />
      <Services />
      <Testimonials />
      <ClientTestimonials />
      <LetsWorkTogether />
      <Footer />
    </main>
  );
}
