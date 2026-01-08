'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HowWeHelp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: 'Retail Strategy & Consulting',
      description: 'We define the core direction of your brand — from retail strategy and channel planning, to brand expansion.',
      items: ['Retail Strategy - Consulting', 'Channel Planning', 'Brand Expansion'],
      link: '/services/retail-strategy'
    },
    {
      title: 'Operational Excellence & Financial Planning',
      description: 'We bring structure to how brands operate — improving operational efficiency, financial and long-term profitability, with scalable, sustainable systems.',
      items: ['Operational Excellence', 'Financial Planning', 'Business Systems'],
      link: '/services/operational-excellence'
    },
    {
      title: 'Marketing & Performance Growth',
      description: 'We build visibility and demand through performance marketing, strategic marketing planning, customer acquisition, and modernising business readiness.',
      items: ['Performance Marketing', 'Marketing Strategy', 'Growth - Data-driven Campaigns'],
      link: '/services/marketing-growth'
    },
    {
      title: 'Brand Experience & Sales Enablement',
      description: 'We shape how brands are sold — through channel design, strategic graphic design, visual merchandising, sales-driven campaigns.',
      items: ['Graphic Design - Store Design', 'Visual Merchandising', 'Sales Enablement'],
      link: '/services/brand-experience'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="bg-kashin-beige py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-kashin-brown/60 text-sm tracking-[0.25em] uppercase mb-4">
            HOW WE HELP
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-kashin-brown mb-4">
            Our work spans strategy, execution, and performance — built to support brands end-to-end.
          </h2>
          {/* <p className="text-kashin-brown/70 text-lg max-w-2xl mx-auto">
            Our work spans strategy, execution, and performance — built to support brands end-to-end.
          </p> */}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-kashin-brown/10">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-kashin-cream p-6 lg:p-8 flex flex-col hover:bg-kashin-beige/30 transition-colors group"
            >
              <h3 className="font-display text-xl lg:text-2xl text-kashin-brown mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-kashin-brown/60 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="pt-4 border-t border-kashin-brown/10">
                {service.items.map((item, idx) => (
                  <p key={idx} className="text-kashin-brown/70 text-sm py-1">
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-kashin-taupe text-sm font-medium group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <Link href={service.link} className="block bg-kashin-beige/50 rounded-xl p-6">
                      <h3 className="font-display text-2xl text-kashin-brown mb-4">
                        {service.title}
                      </h3>
                      <p className="text-kashin-brown/60 text-base leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="pt-4 border-t border-kashin-brown/10">
                        {service.items.map((item, idx) => (
                          <p key={idx} className="text-kashin-brown/70 text-sm py-1">
                            {item}
                          </p>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-kashin-taupe text-sm font-medium">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-kashin-brown/20 flex items-center justify-center text-kashin-brown/60 hover:bg-kashin-brown/5 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-kashin-brown' : 'bg-kashin-brown/20'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-kashin-brown/20 flex items-center justify-center text-kashin-brown/60 hover:bg-kashin-brown/5 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
