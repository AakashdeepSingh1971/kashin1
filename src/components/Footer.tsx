'use client'
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/profile.php?id=61581815557440" },
    { name: "Instagram", icon: Instagram, url: "https://www.facebook.com/profile.php?id=61581815557440" },
  ];
  return (
    <footer className="bg-kashin-beige border-t border-kashin-brown/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-2xl tracking-[0.3em] text-kashin-brown">
              KASHIN
            </Link>
            <p className="text-kashin-brown/60 mt-4 max-w-sm">
              Strategic retail consultancy for Indian fashion and lifestyle brands. Building systems for sustainable growth.
            </p>
            <div className="flex gap-3 pt-2 mt-6 ">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 hover:bg-kashin-brown hover:text-white rounded-full bg-kashin-brown/40 flex items-center justify-center text-kashin-brown/100 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-display text-kashin-brown text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-kashin-brown/60 hover:text-kashin-brown transition-colors">About Us</Link>
              <Link href="/founder" className="text-kashin-brown/60 hover:text-kashin-brown transition-colors">About the Founder</Link>
              <Link href="/#services" className="text-kashin-brown/60 hover:text-kashin-brown transition-colors">Our Services</Link>
              <Link href="/careers" className="text-kashin-brown/60 hover:text-kashin-brown transition-colors">Careers</Link>
              <Link href="/testimonials" className="text-kashin-brown/60 hover:text-kashin-brown transition-colors">Client Testimonials</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-kashin-brown text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-kashin-brown/60">
              <p>kashinbebrilliant@gmail.com</p>
              <p>+91 98765 43210</p>
              <p>Spaze iTech Park, 853, Tower, B2, Sohna - Gurgaon Rd, Sector 49, Gurugram, Haryana 122018</p>
            </div>
          </div>
        </div>

        <div className="border-t border-kashin-brown/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-kashin-brown/50 text-sm">
            © {new Date().getFullYear()} Kashin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
