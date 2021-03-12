import type {
	StripeCardElement,
	StripeCardElementOptions
} from '@stripe/stripe-js'
import { CardElement } from '@stripe/react-stripe-js'

import styles from './index.module.scss'

const OPTIONS: StripeCardElementOptions = {
	classes: { base: styles.root },
	style: {
		base: {
			fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
			fontSmoothing: 'antialiased',
			fontSize: '16px',
			color: 'black',
			'::placeholder': {
				color: '#aab7c4'
			}
		},
		invalid: {
			color: '#fa755a',
			iconColor: '#fa755a'
		}
	}
}

export interface CardProps {
	setCard(card: StripeCardElement): void
}

const Card = ({ setCard }: CardProps) => (
	<CardElement options={OPTIONS} onReady={setCard} />
)

export default Card
