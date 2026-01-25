import { ShieldCheck, Zap, Smartphone, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Bank-Grade Security',
    description: 'Your data and funds are protected by state-of-the-art security measures, ensuring your peace of mind.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Lightning-Fast Transactions',
    description: 'Experience near-instant transfers and payments, so you can move your money when you need to.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile-First Design',
    description: 'Manage your finances on the go with our intuitive and powerful mobile application.',
  },
  {
    icon: <ArrowRight className="h-10 w-10 text-primary" />,
    title: 'Seamless Integrations',
    description: 'Connect your favorite financial tools and services with our open API for a unified experience.',
  }
];

export function Features() {
  return (
    <section id="features" className="py-12 lg:py-24">
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
