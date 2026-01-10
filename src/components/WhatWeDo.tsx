import { Lightbulb, Settings } from 'lucide-react';
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="bg-kashin-beige py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <p className="text-kashin-brown/60 text-sm tracking-[0.25em] text-center md:text-left uppercase mb-6">
              WHAT WE DO
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] text-kashin-brown leading-[1.3] mb-8">
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

          {/* Right - Empty for layout balance */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Notebook Image - positioned to the right with gradient blend */}
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full">
        <Image fill
          src='/what-we-do-notebook.jpeg'
          alt="Strategic planning and creative work"
          className="w-full h-full object-cover object-left opacity-90"
        />
        {/* Gradient overlays for seamless blend */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, hsl(30, 25%, 91%) 0%, transparent 40%)'
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, hsl(30, 25%, 91%) 0%, transparent 20%, transparent 80%, hsl(30, 25%, 91%) 100%)'
          }}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
