"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-brand-white">
      <div className="container">
        <div className="flex flex-col items-center pb-8">
          <a href="#hero" className="mb-8">
            <img
              src="/logo/web-logo-black.svg"
              alt="HTL Re-Sale Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="h-px w-full bg-brand-gray opacity-20" />
        <div className="font-body text-sm flex flex-col-reverse items-center justify-between pt-6 pb-4 text-center text-brand-black md:flex-row md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© 2024 HTL Re-Sale. All rights reserved.</p>
          <ul className="font-body text-sm grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-brand-black md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline hover:text-brand-red transition-colors">
              <a href="https://hebertthomaslaw.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </li>
            <li className="underline hover:text-brand-red transition-colors">
              <a href="https://hebertthomaslaw.com/terms-of-service/" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}