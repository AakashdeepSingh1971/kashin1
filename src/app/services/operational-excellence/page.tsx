import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { Settings, Calculator, Layers, ArrowRight } from 'lucide-react';

const OperationalExcellencePage = () => {
  const features = [
    {
      icon: Settings,
      title: 'Operational Excellence',
      description: 'Streamlining your operations to eliminate inefficiencies and create scalable processes that grow with your brand.'
    },
    {
      icon: Calculator,
      title: 'Financial Planning',
      description: 'Strategic financial management ensuring profitability and sustainable growth through data-driven decision making.'
    },
    {
      icon: Layers,
      title: 'Business Systems',
      description: 'Implementing robust systems and processes that support your team and enable consistent, high-quality execution.'
    }
  ];

  return (
    <div className="min-h-screen bg-kashin-cream">

      <Breadcrumb items={[
        { label: 'Services', href: '/services' },
        { label: 'Operational Excellence' }
      ]} />

      {/* Hero */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-kashin-brown/60 text-sm tracking-[0.25em] uppercase mb-6">
            OUR SERVICES
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-kashin-brown mb-6">
            Operational Excellence & Financial Planning
          </h1>
          <p className="text-kashin-brown/70 text-lg md:text-xl max-w-2xl mx-auto">
            We bring structure to how brands operate — improving efficiency and long-term profitability with scalable, sustainable systems.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-kashin-beige">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-kashin-cream p-8 rounded-xl">
                <div className="w-14 h-14 rounded-full bg-kashin-beige flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-kashin-brown/70" />
                </div>
                <h3 className="font-display text-xl text-kashin-brown mb-4">
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

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-kashin-brown mb-6">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-kashin-brown/70 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s build systems that support sustainable growth and profitability.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-kashin-taupe text-kashin-cream px-8 py-4 rounded-full font-medium hover:bg-kashin-brown transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default OperationalExcellencePage;
