'use client'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const NextSteps = () => {
  return (
    <section className="bg-kashin-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <div className="bg-kashin-cream/80 rounded-2xl p-10 md:p-16 shadow-sm">
          <p className="text-kashin-brown/60 text-sm tracking-[0.25em] uppercase mb-6">
            NEXT STEPS
          </p>

          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-kashin-brown leading-[1.3] mb-6">
            Let&apos;s bring clarity
            <br />
            to your brand.
          </h2>

          <p className="text-kashin-brown/70 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Whether you&apos;re refining your strategy or preparing for growth, our team works closely with you to bring structure, direction, and momentum to your business.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-kashin-brown border-b-2 border-kashin-brown pb-1 hover:text-kashin-taupe hover:border-kashin-taupe transition-colors duration-200 text-lg font-medium"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
