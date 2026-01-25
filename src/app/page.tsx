import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { LandingNavbar } from "@/components/landing/navbar";
import { Stats } from "@/components/landing/stats";
import { Testimonials } from "@/components/landing/testimonials";
import { AiChatButton } from "@/components/landing/ai-chat-button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingNavbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
      <AiChatButton />
    </div>
  );
}
