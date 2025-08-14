"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { createStripeCheckout } from "@/lib/stripe";

declare global {
  interface Window {
    fnames: any[];
    ftypes: any[];
    jQuery: any;
    $mcj: any;
  }
}

interface MailchimpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MailchimpModal({ isOpen, onClose }: MailchimpModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Remove Mailchimp script loading to prevent interference with our custom handler
  useEffect(() => {
    // We don't need Mailchimp's validation script since we're handling submission ourselves
  }, [isOpen, mounted]);

  if (!isOpen || !mounted) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('EMAIL') as string;
    const firstName = formData.get('FNAME') as string;
    const lastName = formData.get('LNAME') as string;

    // Validate email
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Mailchimp in the background
      fetch(
        'https://hebertthomaslaw.us19.list-manage.com/subscribe/post?u=e4b0a3faf160e76a19bcdc3c4&id=b2ede287ff&f_id=00c6b9e7f0',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        }
      ).catch(err => console.log('Mailchimp submission error:', err));

      // Immediately redirect to Stripe checkout
      await createStripeCheckout(email, firstName, lastName);
      
    } catch (error) {
      console.error('Error processing payment:', error);
      setIsSubmitting(false);
      alert('There was an error processing your request. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg bg-brand-white rounded-xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-brand-lightGray transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 text-brand-black" />
        </button>

        {/* Form Container */}
        <div className="p-8 md:p-10">
          <div id="mc_embed_signup">
            <form 
              onSubmit={handleSubmit}
            >
              <div id="mc_embed_signup_scroll">
                <h2 className="font-heading text-3xl font-bold text-brand-black mb-2">
                  Join Our Exclusive List
                </h2>
                <p className="font-body text-brand-gray mb-6">
                  Get early access to Legalnar™ and protect your brand
                </p>
                
                <div className="mb-2">
                  <span className="text-brand-red text-sm">* indicates required</span>
                </div>
                
                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="mce-EMAIL" className="block font-body text-sm font-medium text-brand-black mb-2">
                    Email Address <span className="text-brand-red">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="EMAIL" 
                    className="w-full px-4 py-2 border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent font-body" 
                    id="mce-EMAIL" 
                    required 
                    placeholder="your@email.com"
                  />
                </div>
                
                {/* First Name Field */}
                <div className="mb-4">
                  <label htmlFor="mce-FNAME" className="block font-body text-sm font-medium text-brand-black mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    name="FNAME" 
                    className="w-full px-4 py-2 border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent font-body" 
                    id="mce-FNAME" 
                    placeholder="John"
                  />
                </div>
                
                {/* Last Name Field */}
                <div className="mb-6">
                  <label htmlFor="mce-LNAME" className="block font-body text-sm font-medium text-brand-black mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    name="LNAME" 
                    className="w-full px-4 py-2 border border-brand-gray rounded-md focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent font-body" 
                    id="mce-LNAME" 
                    placeholder="Doe"
                  />
                </div>
                
                {/* Response Messages */}
                <div id="mce-responses" className="clear">
                  <div className="response hidden text-red-600 text-sm mb-4" id="mce-error-response"></div>
                  <div className="response hidden text-green-600 text-sm mb-4" id="mce-success-response"></div>
                </div>
                
                {/* Honeypot field for bot protection */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                  <input 
                    type="text" 
                    name="b_e4b0a3faf160e76a19bcdc3c4_b2ede287ff" 
                    tabIndex={-1} 
                    value="" 
                    readOnly
                  />
                </div>
                
                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    disabled={isSubmitting}
                    className="w-full bg-brand-black text-brand-white font-body font-medium py-3 px-6 rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Continue to Payment'}
                  </button>
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-brand-gray text-center mt-4 font-body">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}