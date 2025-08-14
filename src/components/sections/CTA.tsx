"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MailchimpModal } from "@/components/MailchimpModal";
import React, { useState } from "react";

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="cta" className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-black">
        <div className="container mx-auto">
          <Card className="grid grid-cols-1 items-start justify-start gap-6 p-8 md:grid-cols-[1fr_max-content] md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:p-12 bg-brand-black border-brand-black">
            <div className="md:mr-12 lg:mr-0">
              <div className="w-full max-w-lg">
                <h3 className="font-heading text-3xl mb-3 font-bold text-brand-white md:text-4xl md:mb-4">
                  Grab Pre-Sale Access Now for Just $97
                </h3>
                <p className="font-body text-lg text-brand-white">
                  Only available to early subscribers. Once we launch to the public, the price goes up.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end">
              <Button 
                title="Get Early Access Now" 
                size="lg" 
                className="bg-brand-white text-brand-black hover:bg-gray-200"
                onClick={() => setIsModalOpen(true)}
              >
                Get Early Access Now
              </Button>
            </div>
          </Card>
        </div>
      </section>
      
      <MailchimpModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}