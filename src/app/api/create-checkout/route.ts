import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName } = await request.json();

    // For production, you'll need to:
    // 1. Install Stripe SDK: npm install stripe
    // 2. Set up your Stripe secret key in environment variables
    // 3. Create a proper checkout session with the Stripe API
    
    // Example implementation (uncomment and configure when ready):
    /*
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_YOUR_PRICE_ID', // Replace with your actual price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/`,
      customer_email: email,
      metadata: {
        firstName,
        lastName,
        product: 'Legalnar Pre-Sale Access'
      }
    });

    return NextResponse.json({ checkoutUrl: session.url });
    */

    // Return the Stripe payment link with prefilled email
    const checkoutUrl = `https://buy.stripe.com/9B6eVd94dfdv1ldbzn3Je00?prefilled_email=${encodeURIComponent(email)}`;
    
    return NextResponse.json({ checkoutUrl });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}