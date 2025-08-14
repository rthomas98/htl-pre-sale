"use client";

import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { Fragment, useRef } from "react";

const ConditionalRender = ({ condition, children }: { condition: boolean; children: React.ReactNode }) => {
  return condition ? <>{children}</> : null;
};

export function WebinarSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });
  
  const calculateScale = (index: number, totalSections: number) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);
    return useTransform(scrollYProgress, [start, end], [1, 0.8]);
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const MotionCard = motion(Card);

  const sections = [
    {
      tagline: "Protection",
      heading: "Stop Online Impersonators",
      description: "Learn how to identify and shut down fake accounts, domain squatters, and brand impersonators who are stealing your customers and damaging your reputation.",
      image: "/images/layout408/shutterstock_2060935322.jpg",
      imageAlt: "Stop online impersonators",
      order: "first"
    },
    {
      tagline: "Security",
      heading: "Defend Against AI Content Theft",
      description: "Discover strategies to protect your original content from AI scrapers and unauthorized use, plus how to enforce your rights across digital platforms.",
      image: "/images/layout408/shutterstock_2543894923.jpg",
      imageAlt: "Defend against AI theft",
      order: "last"
    },
    {
      tagline: "Strategy",
      heading: "Secure Your Trademarks",
      description: "Get step-by-step guidance on trademark registration, monitoring, and enforcement to ensure your brand names, logos, and slogans are legally protected.",
      image: "/images/layout408/shutterstock_2575711899.jpg",
      imageAlt: "Secure your trademarks",
      order: "first"
    }
  ];

  return (
    <section id="webinar" className="px-[5%] py-16 md:py-24 lg:py-28 bg-brand-lightGray">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="font-body mb-3 font-semibold text-brand-black md:mb-4">First Webinar</p>
          <h1 className="font-heading text-4xl mb-5 font-bold text-brand-gray md:text-5xl md:mb-6">
            Protecting Your Assets in the Digital Age
          </h1>
          <p className="font-body text-lg text-brand-gray">
            We're kicking things off with a 50-minute legal deep dive with bonus tools to safeguard your digital presence. Learn practical strategies to protect your brand from online threats.
          </p>
        </div>
        <div
          className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0"
          ref={containerRef}
        >
          {sections.map((section, index) => (
            <Fragment key={index}>
              <ConditionalRender condition={isMobile}>
                <Card className="static grid grid-cols-1 content-center overflow-hidden bg-brand-white">
                  <div className={`order-${section.order} flex flex-col justify-center p-6 md:p-8 lg:p-12`}>
                    <p className="font-body mb-2 font-semibold text-brand-charcoal">{section.tagline}</p>
                    <h2 className="font-heading text-3xl mb-5 font-bold text-brand-dark md:text-4xl md:mb-6">
                      {section.heading}
                    </h2>
                    <p className="font-body text-brand-charcoal">
                      {section.description}
                    </p>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center">
                    <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </ConditionalRender>
              <ConditionalRender condition={isTablet}>
                <MotionCard
                  className="static grid grid-cols-1 content-center overflow-hidden bg-brand-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
                  style={{ scale: calculateScale(index, sections.length) }}
                >
                  <div className={`order-${section.order} flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-${index % 2 === 0 ? 'first' : 'last'}`}>
                    <p className="font-body mb-2 font-semibold text-brand-charcoal">{section.tagline}</p>
                    <h2 className="font-heading text-3xl mb-5 font-bold text-brand-dark md:text-4xl md:mb-6">
                      {section.heading}
                    </h2>
                    <p className="font-body text-brand-charcoal">
                      {section.description}
                    </p>
                  </div>
                  <div className={`order-last flex flex-col items-center justify-center md:order-${index % 2 === 0 ? 'last' : 'first'}`}>
                    <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </MotionCard>
              </ConditionalRender>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}