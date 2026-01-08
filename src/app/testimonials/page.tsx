
import { Star, Quote } from 'lucide-react';
import Link from 'next/link';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      // role: '',
      // company: '',
      quote: 'KASHIN helped us scale from 2 to 12 stores in 18 months. Their retail strategy and operational systems were game-changing for our brand. We couldn\'t have done it without their expertise.',
      rating: 5
    },
    {
      name: 'Rajesh Mehta',
      // role: '',
      // company: '',
      quote: 'The insights we gained from their market analysis helped us increase our average transaction value by 45%. They truly understand luxury fashion retail and the Indian market.',
      rating: 5
    },
    {
      name: 'Ananya Kapoor',
      // role: '',
      // company: '',
      quote: 'From store layout to inventory management, KASHIN transformed our entire retail operation. Our customer satisfaction scores have never been higher. Highly recommended!',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      // role: '',
      // company: '',
      quote: 'Working with Nitin and his team was a transformative experience. They brought clarity to our chaotic operations and helped us build sustainable growth systems.',
      rating: 5
    },
    {
      name: 'Meera Reddy',
      // role: '',
      // company: '',
      quote: 'KASHIN\'s strategic approach to brand expansion was exactly what we needed. They helped us enter 3 new markets while maintaining our brand identity and profitability.',
      rating: 5
    },
    {
      name: 'Arjun Nair',
      // role: '',
      // company: '',
      quote: 'The team\'s deep understanding of retail operations and fashion industry dynamics made all the difference. Our revenue grew 60% in the first year of partnership.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-kashin-cream">

      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-kashin-brown/60 text-sm tracking-[0.25em] uppercase mb-4">
              CLIENT TESTIMONIALS
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-kashin-brown mb-6">
              What Our Clients Say
            </h1>
            <p className="text-kashin-brown/70 text-lg max-w-2xl mx-auto">
              We measure our success through the success of our partners. Heres what some of India&apos;s leading fashion brands have to say about working with us.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-kashin-beige/30 rounded-xl p-6 md:p-8 hover:bg-kashin-beige/50 transition-colors"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-kashin-brown/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-kashin-brown/70 leading-relaxed mb-6 text-sm md:text-base">
                  &quot;{testimonial.quote}&quot;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-kashin-taupe/20 flex items-center justify-center">
                    <span className="font-display text-sm text-kashin-brown/60">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-kashin-brown text-sm">{testimonial.name}</p>
                    {/* <p className="text-kashin-brown/50 text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-kashin-beige/50 rounded-2xl p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl text-kashin-brown mb-4">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-kashin-brown/70 mb-8 max-w-lg mx-auto">
              Join the growing list of successful fashion brands that trust KASHIN for their growth journey.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-kashin-taupe text-kashin-cream px-8 py-4 rounded-full font-medium hover:bg-kashin-brown transition-colors"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TestimonialsPage;
