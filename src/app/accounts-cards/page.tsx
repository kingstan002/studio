import { LandingNavbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function AccountsCardsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingNavbar />
      <main className="flex-1 container py-12 lg:py-24">
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Accounts & Cards</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                This is a placeholder page for Accounts & Cards. Content will be added later.
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
