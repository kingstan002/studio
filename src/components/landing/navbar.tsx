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
          <Link href="/features" className="text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="/security" className="text-muted-foreground transition-colors hover:text-foreground">
            Security
          </Link>
          <Link href="/testimonials" className="text-muted-foreground transition-colors hover:text-foreground">
            Testimonials
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
