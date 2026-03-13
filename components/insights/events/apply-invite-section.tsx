'use client';
import React from 'react';
import Typography from '@/components/shared/typography';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import FloatingInput from '@/components/reusable/floating-input';

export default function ApplyInviteSection() {
    return (
        <div id="apply-invite" className="w-full pb-32 bg-white text-gray-900 relative overflow-hidden">
            {/* Background Decorative Elements (Softer for Light Theme) */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[140px] transition-all duration-1000 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-[120px] transition-all duration-1000 animate-pulse delay-700" />

            <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <Typography typo="body-medium-semibold" className="uppercase tracking-[0.3em] text-app-primary-deep">
                                Exclusive Access
                            </Typography>
                        </div>

                        <Typography className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] text-app-primary-deep">
                            JOIN THE<br />INNER CIRCLE
                        </Typography>

                        <Typography typo="body-large-regular" className="text-gray-500 max-w-lg leading-relaxed">
                            Our events are curated for industry leaders and innovators. Apply for an invite to secure your spot among the best in the field.
                        </Typography>

                        <div className="flex flex-col gap-6 mt-4">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
                                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-black" />
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-widest text-gray-400">Codersclutch Events</p>
                                    <p className="text-lg font-bold text-gray-900 tracking-tight">codersclutch@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Minimalist Form (Light) */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 relative">
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-app-primary/5 rounded-full blur-3xl" />

                        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-6">
                                <FloatingInput
                                    label="Full Name*"
                                    placeholder="John Doe"
                                    className="bg-[#F3F4F6] border-none focus:ring-2 focus:ring-app-primary-light/20"
                                />

                                <FloatingInput
                                    label="Email Address*"
                                    type="email"
                                    placeholder="johndoe@gmail.com"
                                    className="bg-[#F3F4F6] border-none focus:ring-2 focus:ring-app-primary-light/20"
                                />

                                <FloatingInput
                                    label="Professional Role*"
                                    placeholder="Lead Developer / CEO"
                                    className="bg-[#F3F4F6] border-none focus:ring-2 focus:ring-app-primary-light/20"
                                />
                            </div>

                            <button className="w-full py-6 bg-app-primary-deep text-white font-bold text-xl rounded-2xl hover:bg-app-secondary hover:shadow-[0_10px_20px_rgba(255,105,0,0.3)] transition-all duration-500 transform flex items-center justify-center gap-4 active:scale-[0.98] group">
                                Submit Application
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-center text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">
                                Limited spots available. Applications reviewed weekly.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
