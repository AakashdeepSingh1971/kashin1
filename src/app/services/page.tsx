'use client'
import Link from 'next/link';
import { ArrowRight, Store, Settings, TrendingUp, Palette } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Store,
    title: 'Retail Strategy & Planning',
    description: 'We help retail and D2C brands define clear, actionable roadmaps that align with their business goals. From market analysis to channel strategy, we build the foundation for sustainable growth.',
    features: [
      'Market Entry Strategy',
      'Channel Planning',
      'Competitive Analysis',
      'Growth Roadmaps'
    ],
    href: '/services/retail-strategy',
    color: 'bg-kashin-brown/10'
  },
  {
    id: 2,
    icon: Settings,
    title: 'Operational Excellence',
    description: 'Streamline your operations for maximum efficiency. We optimize supply chains, inventory management, and store operations to reduce costs while improving customer experience.',
    features: [
      'Supply Chain Optimization',
      'Inventory Management',
      'Process Automation',
      'Cost Reduction'
    ],
    href: '/services/operational-excellence',
    color: 'bg-kashin-taupe/10'
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Marketing & Growth',
    description: 'Drive measurable growth through data-driven marketing strategies. We create campaigns that resonate with your audience and convert browsers into loyal customers.',
    features: [
      'Digital Marketing',
      'Customer Acquisition',
      'Retention Strategies',
      'Performance Analytics'
    ],
    href: '/services/marketing-growth',
    color: 'bg-kashin-brown/10'
  },
  {
    id: 4,
    icon: Palette,
    title: 'Brand Experience',
    description: 'Create memorable brand experiences that build lasting connections. From visual identity to customer touchpoints, we ensure your brand stands out in a crowded market.',
    features: [
      'Brand Strategy',
      'Visual Identity',
      'Customer Experience',
      'Omnichannel Presence'
    ],
    href: '/services/brand-experience',
    color: 'bg-kashin-taupe/10'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-kashin-cream">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-kashin-brown/60 uppercase tracking-[0.2em] text-sm mb-4">
              What We Offer
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-kashin-brown mb-6">
              Our Services
            </h1>
            <p className="text-kashin-brown/70 text-lg md:text-xl leading-relaxed">
              Comprehensive consulting solutions tailored for retail and D2C brands.
              We partner with you to drive growth, optimize operations, and create
              exceptional brand experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className={`group p-8 md:p-10 rounded-2xl ${service.color} 
                  hover:shadow-xl transition-all duration-500 
                  hover:-translate-y-2 border border-transparent hover:border-kashin-brown/10`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-kashin-brown/10 flex items-center justify-center
                    group-hover:bg-kashin-brown group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-kashin-brown group-hover:text-kashin-cream transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-kashin-brown mb-3 group-hover:text-kashin-brown/90 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-kashin-brown/70 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-kashin-brown/60 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-kashin-taupe" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-kashin-brown font-medium 
                      group-hover:gap-4 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-kashin-brown/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-kashin-brown mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-kashin-brown/70 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your business goals.
            Schedule a consultation with our team today.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-kashin-taupe text-kashin-cream 
              px-8 py-4 rounded-full font-medium hover:bg-kashin-brown 
              hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;