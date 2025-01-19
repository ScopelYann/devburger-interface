import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51QhdRY2LiG2ifgwZxbn7lvrsu694WWRJuDsdjzU62AOVtucmlCHZvwpUr8bcVUm1E2lI2IYzelekiehOU6OXLcgu00K9IxX9kw',
);

export default stripePromise