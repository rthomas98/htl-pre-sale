"use client";

import { Button } from "@/components/ui/button";
import { MailchimpModal } from "@/components/MailchimpModal";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { KeyboardArrowDown, RelumeIcon } from "relume-icons";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";

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
        <div className="absolute hidden h-screen overflow-auto border-b border-brand-lightGray bg-brand-white px-[5%] pt-4 pb-24 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            <a
              href="#hero"
              className="font-body text-brand-gray relative block w-auto py-3 lg:inline-block lg:px-4 lg:py-6 hover:text-brand-red transition-colors"
            >
              Home
            </a>
            <div
              onMouseEnter={openOnDesktopDropdownMenu}
              onMouseLeave={closeOnDesktopDropdownMenu}
            >
              <button
                className="font-body text-brand-gray relative flex w-full items-center justify-between py-3 whitespace-nowrap lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 hover:text-brand-red transition-colors"
                onClick={openOnMobileDropdownMenu}
              >
                <span>Trademark Services</span>
                <motion.span
                  animate={animateDropdownMenuIcon}
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <KeyboardArrowDown className="text-brand-gray" />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      opacity: 1,
                      height: "var(--height-open, auto)",
                      display: "block",
                    },
                    close: {
                      opacity: 0,
                      height: "var(--height-close, 0)",
                      display: "none",
                    },
                  }}
                  animate={animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-brand-white lg:absolute lg:w-screen lg:border-b lg:border-brand-gray lg:px-[5%] lg:[--height-close:auto]"
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-2 py-4 md:grid-cols-2 md:gap-y-6 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                        <a
                          href="#contact"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <RelumeIcon className="size-6 shrink-0 text-brand-gray" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-heading font-semibold">Contact Us</h5>
                            <p className="font-body text-sm hidden md:block">
                              Join our community of innovators and protectors.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#testimonials"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <RelumeIcon className="size-6 shrink-0 text-brand-gray" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-heading font-semibold">Testimonials</h5>
                            <p className="font-body text-sm hidden md:block">
                              Hear from those who've protected their brands.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#blog"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <RelumeIcon className="size-6 shrink-0 text-brand-gray" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-heading font-semibold">Blog Posts</h5>
                            <p className="font-body text-sm hidden md:block">
                              Insights and tips for brand protection.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#faq"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <RelumeIcon className="size-6 shrink-0 text-brand-gray" />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-heading font-semibold">FAQs</h5>
                            <p className="font-body text-sm hidden md:block">
                              Find answers to your pressing questions.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-6 flex w-full flex-col items-start justify-between p-6 sm:items-center lg:mb-0 lg:flex-row lg:px-0 lg:py-3">
                    <div className="absolute top-0 -right-[50vw] bottom-0 -left-[50vw] w-[200vw] bg-brand-peach" />
                    <div className="relative z-10 mr-auto flex flex-col gap-y-4 sm:mx-auto sm:grid sm:auto-cols-fr sm:grid-cols-[max-content_max-content] sm:gap-x-1">
                      <p className="font-body">Looking for legal solutions?</p>
                      <a href="#contact" className="font-body underline">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            </div>
            <a
              href="#legal-services"
              className="font-body text-brand-gray relative block w-auto py-3 lg:inline-block lg:px-4 lg:py-6 hover:text-brand-red transition-colors"
            >
              Other Legal Services
            </a>
            <a
              href="#resources"
              className="font-body text-brand-gray relative block w-auto py-3 lg:inline-block lg:px-4 lg:py-6 hover:text-brand-red transition-colors"
            >
              Resources
            </a>
            <a
              href="#about"
              className="font-body text-brand-gray relative block w-auto py-3 lg:inline-block lg:px-4 lg:py-6 hover:text-brand-red transition-colors"
            >
              About Me
            </a>
          </div>
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
            <div className="flex flex-col">
              <a href="#hero" className="font-body text-brand-charcoal block py-3">
                Home
              </a>
              <a href="#features" className="font-body text-brand-charcoal block py-3">
                About Us
              </a>
              <a href="#webinar" className="font-body text-brand-charcoal block py-3">
                Services
              </a>
              <div>
                <button
                  className="font-body text-brand-charcoal relative flex w-full items-center justify-between py-3 whitespace-nowrap"
                  onClick={openOnMobileDropdownMenu}
                >
                  <span>Resources</span>
                  <motion.span
                    animate={animateDropdownMenuIcon}
                    variants={{
                      rotated: { rotate: 180 },
                      initial: { rotate: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <KeyboardArrowDown className="text-brand-gray" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  <motion.nav
                    variants={{
                      open: {
                        opacity: 1,
                        height: "var(--height-open, auto)",
                        display: "block",
                      },
                      close: {
                        opacity: 0,
                        height: "var(--height-close, 0)",
                        display: "none",
                      },
                    }}
                    animate={animateDropdownMenu}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.2 }}
                    className="w-full overflow-hidden bg-brand-white"
                  >
                    <div className="flex w-full flex-col">
                      <div className="grid grid-cols-1 gap-y-2 py-4">
                        <a
                          href="#contact"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <RelumeIcon className="size-6 shrink-0 text-brand-charcoal" />
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-heading font-semibold">Contact Us</h5>
                          </div>
                        </a>
                        <a
                          href="#testimonials"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <RelumeIcon className="size-6 shrink-0 text-brand-charcoal" />
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-heading font-semibold">Testimonials</h5>
                          </div>
                        </a>
                        <a
                          href="#blog"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <RelumeIcon className="size-6 shrink-0 text-brand-charcoal" />
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-heading font-semibold">Blog Posts</h5>
                          </div>
                        </a>
                        <a
                          href="#faq"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                        >
                          <RelumeIcon className="size-6 shrink-0 text-brand-charcoal" />
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-heading font-semibold">FAQs</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                  </motion.nav>
                </AnimatePresence>
              </div>
              <div className="mt-6 flex flex-col gap-4">
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