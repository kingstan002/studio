import { Shield, TrendingUp, Users, Globe } from 'lucide-react';

const stats = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      value: '256-bit Encryption',
      label: 'Bank-Grade Security',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: '1.2M+',
      label: 'Happy Customers',
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      value: '12 Countries',
      label: 'Operations Worldwide',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      value: '99.99%',
      label: 'Uptime Guarantee',
    },
  ];

export function Stats() {
  return (
    <section className="bg-background py-12 lg:py-24">
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Trusted by Millions Worldwide
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We're committed to providing a secure and reliable platform for all your banking needs.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              {stat.icon}
              <p className="mt-4 text-4xl font-bold">{stat.value}</p>
              <p className="mt-1 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
