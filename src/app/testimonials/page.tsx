import { Testimonials } from "@/components/landing/testimonials";
import { Footer } from "@/components/landing/footer";
import { LandingNavbar } from "@/components/landing/navbar";

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingNavbar />
      <main className="flex-1">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
