import { loadStripe as load } from '@stripe/stripe-js/pure'

let stripe: import('@stripe/stripe-js').Stripe | null = null

const key = process.env.NEXT_PUBLIC_STRIPE_API_KEY as string
const loadStripe = async () => (stripe ??= await load(key))

export default loadStripe
