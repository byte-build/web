import { loadStripe as load } from '@stripe/stripe-js/pure'

const key = process.env.NEXT_PUBLIC_STRIPE_API_KEY as string
const loadStripe = () => load(key)

export default loadStripe
