export const STRIPE_PRODUCT_ID = 'prod_SroMvPIOS0cVDA';

export async function createStripeCheckout(email: string, firstName?: string, lastName?: string) {
  try {
    // Call our API to create a checkout session
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        productId: STRIPE_PRODUCT_ID
      }),
    });

    const data = await response.json();

    if (data.checkoutUrl) {
      // Redirect to Stripe checkout
      window.location.href = data.checkoutUrl;
    } else {
      console.error('No checkout URL received');
      // Fallback to a direct payment link if available
      const fallbackUrl = `https://buy.stripe.com/9B6eVd94dfdv1ldbzn3Je00?prefilled_email=${encodeURIComponent(email)}`;
      window.location.href = fallbackUrl;
    }
  } catch (error) {
    console.error('Error creating Stripe checkout:', error);
    // Fallback to a direct payment link
    alert('There was an error processing your request. Please try again.');
  }
}