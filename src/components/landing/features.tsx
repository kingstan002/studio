import { ShieldCheck, Zap, Smartphone, Bot } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Smart Banking Experience',
    description: 'Real-time transactions, intelligent dashboards, and instant alerts to keep you in control.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Secure & Transparent',
    description: 'Bank-grade encryption, fraud detection, and a privacy-first architecture to protect your assets.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Exclusive Client Benefits',
    description: 'Enjoy zero-balance accounts, cashback rewards, and priority customer support.',
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'AI-Powered Assistance',
    description: 'Our Gemini-powered AI assistant is here to help you every step of the way.',
  }
];

export function Features() {
  return (
    <section className="py-12 lg:py-24 bg-muted">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our platform is designed to be powerful yet simple, giving you the tools to manage your financial life with ease.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col items-center text-center p-6">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription>
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
