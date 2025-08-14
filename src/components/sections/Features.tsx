"use client";

import React from "react";

export function Features() {
  return (
    <section id="features" className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="font-body mb-3 font-semibold text-brand-peach md:mb-4">Why Legalnar™</p>
              <h2 className="font-heading text-4xl mb-5 font-bold text-brand-white md:text-5xl md:mb-6">
                Built for Entrepreneurs Who Want to Protect and Scale Smarter
              </h2>
              <p className="font-body text-lg text-brand-white">
                That's why I created Legalnar™, a new on-demand webinar series built for entrepreneurs, creators, and business owners who want to protect and scale smarter.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/brand-protection/shutterstock_2329488115.jpg"
                  alt="Downloadable Resources"
                  className="rounded-xl w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 className="font-heading text-2xl mb-5 font-bold text-brand-white md:text-3xl md:mb-6">
                Downloadable Templates & Tools
              </h3>
              <p className="font-body text-brand-white opacity-90">
                Get instant access to trademark monitoring checklists, platform enforcement guides, and legal templates you can use immediately to protect your brand.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/brand-protection/shutterstock_2460003029.jpg"
                  alt="Direct Access"
                  className="rounded-xl w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 className="font-heading text-2xl mb-5 font-bold text-brand-white md:text-3xl md:mb-6">
                Direct Email Access & Feedback
              </h3>
              <p className="font-body text-brand-white opacity-90">
                Submit your questions directly and help choose the next topics. Share a testimonial or review, and you could be featured in our official Legalnar launch!
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="/images/brand-protection/shutterstock_2552581611.jpg"
                  alt="Shape the Future"
                  className="rounded-xl w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 className="font-heading text-2xl mb-5 font-bold text-brand-white md:text-3xl md:mb-6">
                A Front-Row Seat in Building Legalnar™
              </h3>
              <p className="font-body text-brand-white opacity-90">
                You'll help shape what's next and get exclusive early access to future webinars, tools, and resources before they're available to the public.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}