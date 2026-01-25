'use client';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImages = PlaceHolderImages.filter(p => p.id.startsWith('hero-'));

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
        <Carousel 
            className="w-full h-full" 
            opts={{ loop: true }}
            plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
        >
            <CarouselContent>
                {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="relative h-[80vh] w-full">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover"
                                data-ai-hint={image.imageHint}
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-black/50" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold !text-white tracking-tight">
                Your money, secured with next-gen technology.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
                Join thousands who trust Verity Bank for secure, simple, and powerful digital banking.
            </p>
            <div className="mt-8 flex gap-4">
                <Button size="lg" asChild>
                    <Link href="/signup">Open Account in Minutes</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black" asChild>
                    <Link href="/banking-services">Explore Features</Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
