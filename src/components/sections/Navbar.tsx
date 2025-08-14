"use client";

import { Button } from "@/components/ui/button";
import { MailchimpModal } from "@/components/MailchimpModal";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";

  return (
    <section className="fixed top-0 z-[999] flex min-h-16 w-full items-center bg-brand-white px-[5%] md:min-h-18">
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img
            src="/logo/web-logo-black.svg"
            alt="HTL Re-Sale Logo"
            className="h-10 w-auto"
          />
        </a>
        <div className="absolute hidden h-screen overflow-auto border-b border-brand-lightGray bg-brand-white px-[5%] pt-4 pb-24 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-end lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex items-center gap-4">
            <Button 
              title="Get Started" 
              size="sm"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </Button>
          </div>
        </div>
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-brand-black"
            animate={animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-brand-black"
            animate={animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-brand-black"
            animate={animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute top-full right-0 left-0 w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute top-0 right-0 left-0 block h-dvh overflow-auto border-b border-brand-gray bg-brand-white px-[5%] pt-4 pb-8"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex flex-col gap-4">
                <Button 
                  title="Get Started" 
                  size="sm"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      <MailchimpModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}