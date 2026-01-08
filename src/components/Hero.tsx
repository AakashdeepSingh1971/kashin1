'use client'
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen bg-kashin-cream flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-kashin-brown leading-[1.15] mb-6">
              Where creative
              <br />
              ambition meets
              <br />
              business clarity.
            </h1>

            <p className="text-kashin-brown/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Kashin is a growth and performance consultancy helping fashion and lifestyle brands move from creative chaos to structured, sustainable growth.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-kashin-brown border-b-2 border-kashin-brown pb-1 hover:text-kashin-taupe hover:border-kashin-taupe transition-colors duration-200 text-lg"
            >
              Start a conversation
              <ArrowDown className="w-4 h-4 rotate-[-45deg]" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative order-1 md:order-2">
            <Link href="/founder" className="block group">
              <div className="aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg max-w-xs sm:max-w-sm mx-auto md:max-w-none">
                <Image fill
                  src="/croppedFounderImage.png"
                  alt="Nitin Kapoor - Founder of Kashin"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:right-4 md:translate-x-0 bg-kashin-cream/90 backdrop-blur-sm rounded-lg p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[calc(100%-2rem)] max-w-xs sm:max-w-sm md:max-w-none md:w-auto">
                <p className="font-display text-kashin-brown text-base md:text-lg">Nitin Kapoor</p>
                <p className="text-kashin-brown/60 text-xs md:text-sm">Founder, Kashin</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
