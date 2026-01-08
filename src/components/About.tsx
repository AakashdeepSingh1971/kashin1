'use client'
import { Award, Heart, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-32 bg-kashin-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center mb-12 md:mb-16">
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="font-display text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-kashin-brown mb-4 md:mb-6">
              ABOUT US
            </h2>

            <p className="text-kashin-brown/70 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
              At Kashin, we are dedicated to helping businesses unlock their full potential through strategic, tailored consulting services.
            </p>

            <p className="text-kashin-brown/70 text-base sm:text-lg leading-relaxed mb-6">
              Founded by Nitin, a growth and performance consultant with deep experience working with fashion and lifestyle brands across strategy, operations, and scale, our firm is built on a foundation of expertise, integrity, and results-driven solutions.
            </p>

            <Link
              href="/founder"
              className="inline-flex items-center gap-2 text-kashin-brown border-b-2 border-kashin-brown pb-1 hover:text-kashin-taupe hover:border-kashin-taupe transition-colors duration-200 font-medium"
            >
              Meet the Founder
            </Link>
          </div>

          {/* Founder Image */}
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

        {/* Who We Are & Our Mission */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-lg sm:text-xl md:text-2xl text-kashin-brown mb-3 md:mb-4">
              Who We Are
            </h3>
            <p className="text-kashin-brown/70 text-sm sm:text-base leading-relaxed">
              At Kashin, we are dedicated to helping businesses unlock their full potential through strategic, tailored consulting services. We partner with ambitious brands that are ready to move from creative chaos to structured, profitable growth.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-display text-lg sm:text-xl md:text-2xl text-kashin-brown mb-3 md:mb-4">
              Our Mission
            </h3>
            <p className="text-kashin-brown/70 text-sm sm:text-base leading-relaxed">
              Our mission is to bring clarity, structure, and momentum to creative businesses. We work alongside founders to transform ambition into actionable strategy—aligning vision, systems and execution to build brands that scale sustainably and perform consistently.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="font-display text-lg sm:text-xl md:text-2xl text-kashin-brown mb-6 md:mb-8 text-center sm:text-left">
            Why Choose Us?
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start text-center sm:text-left">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-kashin-beige flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-kashin-brown/60" />
              </div>
              <div>
                <h4 className="font-display text-base sm:text-lg md:text-xl text-kashin-brown mb-1 md:mb-2">Expertise</h4>
                <p className="text-kashin-brown/60 text-xs sm:text-sm leading-relaxed">
                  Deep industry knowledge and strategic insights that deliver measurable results.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start text-center sm:text-left">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-kashin-beige flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-kashin-brown/60" />
              </div>
              <div>
                <h4 className="font-display text-base sm:text-lg md:text-xl text-kashin-brown mb-1 md:mb-2">Integrity</h4>
                <p className="text-kashin-brown/60 text-xs sm:text-sm leading-relaxed">
                  A commitment to honesty, transparency, and ethical business practices.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start text-center sm:text-left sm:col-span-2 md:col-span-1 sm:max-w-xs sm:mx-auto md:max-w-none">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-kashin-beige flex items-center justify-center flex-shrink-0">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-kashin-brown/60" />
              </div>
              <div>
                <h4 className="font-display text-base sm:text-lg md:text-xl text-kashin-brown mb-1 md:mb-2">Results</h4>
                <p className="text-kashin-brown/60 text-xs sm:text-sm leading-relaxed">
                  Proven strategies that drive measurable growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
