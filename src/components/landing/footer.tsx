import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-muted border-t">
            <div className="container py-12">
                <div className="grid gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Logo />
                        <p className="mt-4 text-muted-foreground text-sm">
                            Modern banking for a modern world.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
                        <div>
                            <h4 className="font-semibold">Product</h4>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><Link href="/features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                                <li><Link href="/security" className="text-muted-foreground hover:text-foreground">Security</Link></li>
                                <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                                <li><Link href="/integrations" className="text-muted-foreground hover:text-foreground">Integrations</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold">Company</h4>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                                <li><Link href="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
                                <li><Link href="/press" className="text-muted-foreground hover:text-foreground">Press</Link></li>
                                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold">Legal</h4>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                                <li><Link href="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Verity Bank. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 mt-4 sm:mt-0">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="#"><Twitter /></Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="#"><Github /></Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="#"><Linkedin /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
