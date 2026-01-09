'use client'
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        role: '',
        portfolioLink: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setError('');

        if (!formData.fullName || !formData.phone || !formData.role || !formData.portfolioLink) {
            setError('Please fill all fields');
            return;
        }

        try {
            setLoading(true);

            const res = await fetch('/api/careers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Submission failed');
            }

            setSubmitted(true);
            setFormData({
                fullName: '',
                phone: '',
                role: '',
                portfolioLink: ''
            });
        } catch (err) {
            console.error(err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="careersForm" className="bg-kashin-cream py-20 md:py-28 min-h-screen flex items-center">
            <div className="max-w-3xl mx-auto px-6 lg:px-12 w-full">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-amber-900 mb-4">
                        Join Our Team
                    </h2>
                    <p className="text-kashin-brown/60text-lg">
                        We'll review your application and get back to you soon.
                    </p>
                </div>

                <div className="bg-white/50 rounded-2xl p-8 md:p-12 shadow-sm backdrop-blur-sm">
                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-amber-900 mb-2">Application Submitted!</h3>
                            <p className="text-amber-900/60">Our team will contact you within 24-48 hours.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label className="block text-amber-900 text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full px-4 py-3.5 bg-white border border-amber-900/10 rounded-lg text-amber-900 placeholder:text-amber-900/40 focus:outline-none focus:border-amber-900/30 focus:ring-2 focus:ring-amber-900/10 transition-all"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-amber-900 text-sm font-medium mb-2">
                                    Phone Number
                                </label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-4 bg-kashin-cream/80 border border-r-0 border-amber-900/10 rounded-l-lg text-amber-900/60 text-sm">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your phone number"
                                        required
                                        pattern="[0-9]{10}"
                                        className="w-full px-4 py-3.5 bg-white border border-amber-900/10 rounded-r-lg text-amber-900 placeholder:text-amber-900/40 focus:outline-none focus:border-amber-900/30 focus:ring-2 focus:ring-amber-900/10 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Role */}
                            <div>
                                <label className="block text-amber-900 text-sm font-medium mb-2">
                                    Role Applying For
                                </label>
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    placeholder="e.g., Frontend Developer, Designer, Marketing Manager"
                                    required
                                    className="w-full px-4 py-3.5 bg-white border border-amber-900/10 rounded-lg text-amber-900 placeholder:text-amber-900/40 focus:outline-none focus:border-amber-900/30 focus:ring-2 focus:ring-amber-900/10 transition-all"
                                />
                            </div>

                            {/* Portfolio Link */}
                            <div>
                                <label className="block text-amber-900 text-sm font-medium mb-2">
                                    Portfolio / LinkedIn / Resume Link
                                </label>
                                <input
                                    type="url"
                                    name="portfolioLink"
                                    value={formData.portfolioLink}
                                    onChange={handleChange}
                                    placeholder="https://yourportfolio.com or LinkedIn profile"
                                    required
                                    className="w-full px-4 py-3.5 bg-white border border-amber-900/10 rounded-lg text-amber-900 placeholder:text-amber-900/40 focus:outline-none focus:border-amber-900/30 focus:ring-2 focus:ring-amber-900/10 transition-all"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-10 text-center">
                                <button
                                    onClick={handleSubmit}
                                    className="inline-flex items-center gap-2 bg-amber-900 text-amber-50 px-10 py-4 rounded-full font-medium hover:bg-amber-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                                >
                                    Submit Application
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <p className="text-amber-900/50 text-sm mt-4">
                                    We'll review your application and get back to you soon.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default JobApplicationForm;