'use client'
import JobApplicationForm from '@/components/JobForm';
import { MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';

const CareersPage = () => {
  const openings = [
    {
      title: 'Merchandiser',
      type: 'Full-time',
      location: 'Gurugram, Haryana',
      description: 'Plan and execute product assortments, pricing, and visual strategies to maximize sales and brand appeal.'
    },
    {
      title: 'Performance Marketing Specialist',
      type: 'Full-time',
      location: 'Gurugram, Haryana',
      description: 'Drive measurable growth through data-driven paid campaigns, analytics, and conversion optimization.'
    },
    {
      title: 'Sales Consultant',
      type: 'Full-time',
      location: 'Gurugram, Haryana',
      description: 'Identify client needs and deliver tailored solutions to drive revenue and achieve business goals.'
    },
    {
      title: 'Client Relationship Manager',
      type: 'Full-time',
      location: 'Gurugram, Haryana',
      description: 'Manage and nurture client relationships by ensuring seamless communication, satisfaction, and long-term partnerships.'
    }
  ];

  const values = [
    {
      title: 'Growth Mindset',
      description: 'We believe in continuous learning and improvement, both for ourselves and our clients.'
    },
    {
      title: 'Integrity First',
      description: 'We build trust through transparency, honesty, and ethical business practices.'
    },
    {
      title: 'Collaborative Spirit',
      description: 'We work as partners with our clients and as a close-knit team internally.'
    },
    {
      title: 'Excellence in Execution',
      description: 'We don&apos;t just strategize—we ensure every plan is implemented with precision.'
    }
  ];

  return (
    <div className="min-h-screen bg-kashin-cream">

      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-kashin-brown mb-6">
              Join Our Team
            </h1>
            <p className="text-kashin-brown/70 text-lg max-w-2xl mx-auto">
              We&apos;re looking for passionate individuals who share our vision of transforming fashion and lifestyle brands through strategic excellence.
            </p>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="font-display text-2xl md:text-3xl text-kashin-brown mb-8 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-kashin-beige/50 rounded-xl p-6">
                  <h3 className="font-display text-xl text-kashin-brown mb-3">{value.title}</h3>
                  <p className="text-kashin-brown/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-kashin-brown mb-8 text-center">
              Open Positions
            </h2>

            <div className="space-y-6">
              {openings.map((job, index) => (
                <div key={index} className="bg-kashin-beige/30 rounded-xl p-6 md:p-8 hover:bg-kashin-beige/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-kashin-brown mb-2">
                        {job.title}
                      </h3>
                      <p className="text-kashin-brown/60 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1.5 text-kashin-brown/60">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-kashin-brown/60">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="#careersForm"
                      className="inline-flex items-center justify-center bg-kashin-taupe text-kashin-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-kashin-brown transition-colors flex-shrink-0"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* General Application */}
            <div className="mt-12 text-center bg-kashin-beige/50 rounded-2xl p-8 md:p-12">
              <h3 className="font-display text-2xl text-kashin-brown mb-4">
                Don&apos;t see your role?
              </h3>
              <p className="text-kashin-brown/70 mb-6 max-w-lg mx-auto">
                We&apos;re always looking for talented individuals. Send us your resume and tell us how you can contribute to our team.
              </p>
              <Link
                href="#careersForm"
                className="inline-flex items-center gap-2 border-2 border-kashin-brown text-kashin-brown px-8 py-3 rounded-full font-medium hover:bg-kashin-brown hover:text-kashin-cream transition-colors"
              >
                Send Application
              </Link>
            </div>
          </div>
        </div>
        <JobApplicationForm />
      </main>
    </div>
  );
};

export default CareersPage;
