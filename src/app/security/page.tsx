import { Stats } from "@/components/landing/stats";
import { Footer } from "@/components/landing/footer";
import { LandingNavbar } from "@/components/landing/navbar";

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingNavbar />
      <main className="flex-1">
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
