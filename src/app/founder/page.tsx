'use client'
import Link from 'next/link';
import Image from "next/image";
const FounderPage = () => {
  const brands = [
    'Burberry', 'Marks & Spencer', "Papa Don't Preach", 'Lacoste', 'Reliance Brands', 'Torani', 'AMPM', 'And more...'
  ];

  return (
    <div className="min-h-screen bg-kashin-cream">

      <main className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Hero Section - Instagram Style Layout */}
          <div className="relative mb-12 md:mb-16">
            {/* Mobile Layout - Stacked */}
            <div className="block lg:hidden">
              {/* Image First on Mobile */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-8">
                <Image fill
                  src="/croppedFounderImage.png"
                  alt="Nitin Kapoor - Founder of Kashin"
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>

              {/* Quote Below */}
              <div className="bg-kashin-beige/30 rounded-2xl p-6 sm:p-8">
                <div className="text-kashin-brown text-5xl sm:text-6xl font-serif leading-none mb-4">&quot;</div>
                <div className="border-l-4 border-kashin-brown pl-4 sm:pl-6">
                  <blockquote className="font-display text-lg sm:text-xl text-kashin-brown leading-relaxed">
                    Every successful brand begins with a spark and for me, that spark was the desire to help entrepreneurs turn their ideas into reality.
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-2 items-stretch min-h-[600px] rounded-2xl overflow-hidden shadow-xl">
              {/* Quote Side */}
              <div className="bg-kashin-cream p-12 xl:p-16 flex flex-col justify-center">
                <div className="text-kashin-brown text-7xl xl:text-8xl font-serif leading-none mb-6">&quot;</div>
                <div className="border-l-4 border-kashin-brown pl-6">
                  <blockquote className="font-display text-2xl xl:text-3xl text-kashin-brown leading-relaxed">
                    Every successful brand begins with a spark and for me, that spark was the desire to help entrepreneurs turn their ideas into reality.
                  </blockquote>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative">
                <Image fill
                  src="/croppedFounderImage.png"
                  alt="Nitin Kapoor - Founder of Kashin"
                  className="w-full h-full object-cover object-top grayscale"
                />
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-kashin-cream to-transparent"></div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start mb-12 md:mb-16">
            <div className="text-center lg:text-left">
              <p className="text-kashin-brown/60 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 md:mb-4">
                ABOUT THE FOUNDER
              </p>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-kashin-brown mb-4 md:mb-6">
                Nitin Kapoor
              </h1>

              <p className="text-kashin-brown/70 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
                A visionary retail leader with over 20 years of experience shaping India&apos;s most influential fashion and lifestyle brands. His expertise spans merchandising, P&L management, operations, franchise expansion, and building high-performing teams.
              </p>

              <p className="text-kashin-brown/70 text-base sm:text-lg leading-relaxed mb-6 md:mb-8">
                He has worked with some of the biggest names in the industry, bringing a unique blend of strategic thinking and operational excellence to every partnership.
              </p>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-kashin-taupe text-kashin-cream px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-kashin-brown transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>

            {/* Experience Section */}
            <div className="bg-kashin-beige/50 rounded-2xl p-6 sm:p-8 md:p-12">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-kashin-brown mb-4 md:mb-6 text-center">
                Brands He&apos;s Worked With
              </h2>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                {brands.map((brand, index) => (
                  <span
                    key={index}
                    className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-kashin-cream rounded-full text-kashin-brown/70 text-xs sm:text-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default FounderPage;
