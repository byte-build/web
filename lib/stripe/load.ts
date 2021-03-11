import type { Stripe } from '@stripe/stripe-js'
import { loadStripe as load } from '@stripe/stripe-js/pure'

let stripe: Stripe | null = null

const key = process.env.NEXT_PUBLIC_STRIPE_API_KEY as string
const loadStripe = async () => (stripe ??= await load(key))

export default loadStripe
