import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function PressPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingNavbar />
      <main className="flex-1 container py-12 lg:py-24">
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Press</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                This is a placeholder page for Press. Content will be added later.
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
