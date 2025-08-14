"use client";

import { Button } from "@/components/ui/button";
import { MailchimpModal } from "@/components/MailchimpModal";
import React, { useState } from "react";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="hero" className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-peach mt-16 md:mt-18">
        <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-[0.5fr_1fr] md:gap-16">
          <div className="flex h-full flex-col justify-between">
            <h2 className="font-heading text-4xl mb-5 font-bold text-brand-black md:text-5xl lg:text-6xl md:mb-6">
              Pre-Sale Access Now Open: Protect Your Brand Before It's Too Late
            </h2>
            <div className="ml-[7.5%]">
              <p className="font-body text-lg text-brand-black mb-4 font-medium">
                Be the first to experience my new Legalnar™, gain exclusive legal insights, and help shape what's next.
              </p>
              <p className="font-body text-base text-brand-black/80">
                Your brand is vulnerable—online impersonators, AI content theft, domain hijacking, and unregistered trademarks can cost your business big time.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8 md:flex-wrap">
                <Button 
                  title="Get Early Access Now" 
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Early Access Now
                </Button>
              </div>
            </div>
          </div>
        <div className="grid grid-cols-[1fr_0.75fr] items-start gap-6 sm:gap-8">
          <div className="w-full">
            <img
              src="/images/hero/shutterstock_2328855035.jpg"
              alt="Legal protection for brands"
              className="size-full rounded-xl object-cover aspect-[2/3]"
            />
          </div>
          <div className="w-full">
            <img
              src="/images/hero/shutterstock_2482326697.jpg"
              alt="Brand protection strategy"
              className="size-full rounded-xl object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
    
    <MailchimpModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
    />
  </>
  );
}