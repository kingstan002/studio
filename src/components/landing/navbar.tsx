'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-foreground transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link href="/banking-services" className="text-muted-foreground transition-colors hover:text-foreground">
            Banking Services
          </Link>
          <Link href="/accounts-cards" className="text-muted-foreground transition-colors hover:text-foreground">
            Accounts & Cards
          </Link>
          <Link href="/investments" className="text-muted-foreground transition-colors hover:text-foreground">
            Investments
          </Link>
          <Link href="/security" className="text-muted-foreground transition-colors hover:text-foreground">
            Security & Trust
          </Link>
          <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
            About Us
          </Link>
          <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
                <Link href="/signup">Create Account</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
