'use client'
import { useState } from 'react';
import { useToast } from '@/lib/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    brandName: '',
    websiteOrInstagram: '',
    businessType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed');

      toast({
        title: "Details Submitted",
        description: "Our team will contact you within 24-48 hours.",
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        brandName: '',
        websiteOrInstagram: '',
        businessType: ''
      });
    } catch {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };


  return (
    <section id="contact" className="bg-kashin-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-kashin-brown mb-4">
            Share your details
          </h2>
          <p className="text-kashin-brown/60 text-lg">
            Our team will review and reach out personally.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-kashin-cream/80 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-kashin-brown text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3.5 bg-kashin-cream border border-kashin-brown/10 rounded-lg text-kashin-brown placeholder:text-kashin-brown/40 focus:outline-none focus:border-kashin-brown/30 transition-colors"
              />
            </div>

            {/* Email & Phone in grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-kashin-brown text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                  className="w-full px-4 py-3.5 bg-kashin-cream border border-kashin-brown/10 rounded-lg text-kashin-brown placeholder:text-kashin-brown/40 focus:outline-none focus:border-kashin-brown/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-kashin-brown text-sm font-medium mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 bg-kashin-cream border border-r-0 border-kashin-brown/10 rounded-l-lg text-kashin-brown/60 text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full px-4 py-3.5 bg-kashin-cream border border-kashin-brown/10 rounded-r-lg text-kashin-brown placeholder:text-kashin-brown/40 focus:outline-none focus:border-kashin-brown/30 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Brand Name */}
            <div>
              <label className="block text-kashin-brown text-sm font-medium mb-2">
                Brand / Business Name
              </label>
              <input
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="Your brand name"
                required
                className="w-full px-4 py-3.5 bg-kashin-cream border border-kashin-brown/10 rounded-lg text-kashin-brown placeholder:text-kashin-brown/40 focus:outline-none focus:border-kashin-brown/30 transition-colors"
              />
            </div>

            {/* Website / Instagram */}
            <div>
              <label className="block text-kashin-brown text-sm font-medium mb-2">
                Website / Instagram / LinkedIn
              </label>
              <input
                type="text"
                name="websiteOrInstagram"
                value={formData.websiteOrInstagram}
                onChange={handleChange}
                required
                placeholder="Website / Instagram / LinkedIn"
                className="w-full px-4 py-3.5 bg-kashin-cream border border-kashin-brown/10 rounded-lg text-kashin-brown placeholder:text-kashin-brown/40 focus:outline-none focus:border-kashin-brown/30 transition-colors"
              />
            </div>

            {/* Nature of Business */}
            <div>
              <label className="block text-kashin-brown text-sm font-medium mb-2">
                Nature of Business
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  placeholder="Briefly describe your business"
                  className="w-full px-4 py-3.5 bg-kashin-cream border border-kashin-brown/10 rounded-lg text-kashin-brown placeholder:text-kashin-brown/40 focus:outline-none focus:border-kashin-brown/30 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-kashin-cream border-2 border-kashin-brown text-kashin-brown px-10 py-4 rounded-full font-medium hover:bg-kashin-brown hover:text-kashin-cream transition-colors duration-200"
            >
              Submit Details
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-kashin-brown/50 text-sm mt-4">
              Our team will contact you.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
