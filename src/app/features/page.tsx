import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { LandingNavbar } from "@/components/landing/navbar";

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingNavbar />
      <main className="flex-1">
        <Features />
      </main>
      <Footer />
    </div>
  );
}
