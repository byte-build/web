import { FormEvent, useState, useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'

import Bit from 'models/Bit'
import getClientSecret from 'lib/bit/secret'
import handleError from 'lib/error/handle'
import userState from 'state/user'
import Spinner from 'components/Spinner'

import styles from './index.module.scss'

export interface BuyBitsContentProps {
	bit: Bit
}

const BuyBitsContent = ({ bit }: BuyBitsContentProps) => {
	const user = useRecoilValue(userState)
	const [isLoading, setIsLoading] = useState(false)

	const stripe = useStripe()
	const elements = useElements()

	const onSubmit = useCallback(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()
			if (!(user && stripe && elements)) return

			try {
				setIsLoading(true)

				const card = elements.getElement(CardElement)
				if (!card) throw new Error('Missing card')

				const { paymentIntent, error } = await stripe.confirmCardPayment(
					await getClientSecret(bit.id),
					{
						payment_method: {
							card,
							billing_details: {
								name: user.name,
								email: user.email
							}
						}
					}
				)

				if (error) throw error

				if (paymentIntent?.status !== 'succeeded')
					throw new Error('Unsuccessful payment')
			} catch (error) {
				handleError(error)
			} finally {
				setIsLoading(false)
			}
		},
		[bit.id, user, stripe, elements, setIsLoading]
	)

	return (
		<form onSubmit={onSubmit}>
			<CardElement />
			<button
				className={styles.submit}
				disabled={!(stripe && elements)}
				aria-busy={isLoading}
			>
				{isLoading ? <Spinner className={styles.spinner} /> : 'Buy'}
			</button>
		</form>
	)
}

export default BuyBitsContent
