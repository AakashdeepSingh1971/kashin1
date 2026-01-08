import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { Megaphone, LineChart, Users, ArrowRight } from 'lucide-react';

const MarketingGrowthPage = () => {
  const features = [
    {
      icon: Megaphone,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that maximize ROI and drive measurable results across digital platforms.'
    },
    {
      icon: LineChart,
      title: 'Marketing Strategy',
      description: 'Comprehensive marketing plans that align with your brand goals and resonate with your target audience.'
    },
    {
      icon: Users,
      title: 'Growth & Data-driven Campaigns',
      description: 'Customer acquisition strategies powered by analytics and insights to fuel sustainable brand growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-kashin-cream">

      <Breadcrumb items={[
        { label: 'Services', href: '/services' },
        { label: 'Marketing & Performance Growth' }
      ]} />

      {/* Hero */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-kashin-brown/60 text-sm tracking-[0.25em] uppercase mb-6">
            OUR SERVICES
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-kashin-brown mb-6">
            Marketing & Performance Growth
          </h1>
          <p className="text-kashin-brown/70 text-lg md:text-xl max-w-2xl mx-auto">
            We build visibility and demand through performance marketing, strategic planning, and data-driven customer acquisition.
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
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-kashin-brown/70 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s create marketing strategies that drive real, measurable results.
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

export default MarketingGrowthPage;
