import { Lightbulb, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const WhatWeDo = () => {
  return (
    <section className="bg-kashin-beige py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-kashin-brown/60 text-sm tracking-[0.25em] text-center md:text-left uppercase mb-6">
              WHAT WE DO
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem]  text-kashin-brown leading-[1.3] mb-8">
              Kashin works with fashion and lifestyle brands at the intersection of creativity and commerce — helping them build systems, strategy, and structure for sustainable growth.
            </h2>

            <div className="space-y-8 mt-12">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-kashin-cream/80 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-kashin-brown/60" />
                </div>
                <p className="text-kashin-brown/70 text-lg leading-relaxed">
                  Many brands are rich in vision but often limited by informal processes, unplanned production, and scattered marketing efforts.
                </p>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-kashin-cream/80 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-kashin-brown/60" />
                </div>
                <p className="text-kashin-brown/70 text-lg leading-relaxed">
                  We bring clarity by aligning business planning, operations, and marketing — so growth becomes intentional, not accidental.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Mobile mockup placeholder */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-72 h-[500px] bg-kashin-cream rounded-[2.5rem] border-8 border-kashin-brown/10 overflow-hidden shadow-xl">
                <div className="w-full h-full p-6 flex flex-col">
                  <div className="relative order-1 md:order-2">
                    <Link href="/founder" className="block group">
                      <div className="aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/8] rounded-2xl overflow-hidden shadow-lg max-w-xs sm:max-w-sm mx-auto md:max-w-none">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
