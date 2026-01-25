'use client';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote: "Verity Bank has revolutionized how I manage my finances. It's simple, secure, and incredibly fast. I can't imagine going back to my old bank.",
    name: 'Sarah J.',
    title: 'Freelance Designer',
    imageId: 'testimonial-1'
  },
  {
    quote: "The mobile app is a game-changer. I can do everything from paying bills to investing, all from my phone. The support team is also fantastic!",
    name: 'Mark C.',
    title: 'Tech Entrepreneur',
    imageId: 'testimonial-2'
  },
  {
    quote: "As a small business owner, the seamless integration with my accounting software has saved me hours of work. The low fees are just a bonus.",
    name: 'Emily R.',
    title: 'Cafe Owner',
    imageId: 'testimonial-3'
  },
];

export function Testimonials() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're proud to have the trust and support of our amazing community.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
                <CarouselItem key={testimonial.name} className="p-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col items-center justify-center text-center p-6 gap-4">
                        <p className="flex-1 text-muted-foreground">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4 mt-4">
                            {image && (
                                <Avatar>
                                    <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex"/>
          <CarouselNext className="hidden md:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
