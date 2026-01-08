import { ArrowUpRight, LayoutGrid, TrendingUp } from 'lucide-react';

const WhyKashin = () => {
  const features = [
    {
      icon: ArrowUpRight,
      title: 'Strategy → Execution',
      description: 'We translate ideas into structured, on-ground action.'
    },
    {
      icon: LayoutGrid,
      title: 'Built for Real Operations',
      description: 'Designed around how retail and fashion businesses actually function.'
    },
    {
      icon: TrendingUp,
      title: 'Profit-Led Thinking',
      description: 'Every decision is evaluated for sustainability and profitability.'
    }
  ];

  return (
    <section className="bg-kashin-cream py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-kashin-brown/60 text-sm tracking-[0.25em] uppercase mb-4">
          WHY KASHIN
        </p>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-kashin-brown leading-[1.2] mb-6">
          Your Strategic Partner
          <br />
          in Retail Excellence
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-kashin-beige flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-kashin-brown/60" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-kashin-brown mb-3">
                {feature.title}
              </h3>
              <p className="text-kashin-brown/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKashin;
