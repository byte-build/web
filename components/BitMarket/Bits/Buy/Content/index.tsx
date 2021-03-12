import { FormEvent, useState, useCallback, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Svg } from 'react-optimized-image'

import Bit from 'models/Bit'
import getStorageUrl from 'lib/storage/url'
import getClientSecret from 'lib/bit/secret'
import formatNumber from 'lib/format/number'
import formatCost from 'lib/format/cost'
import handleError from 'lib/error/handle'
import userState from 'state/user'
import Card from '../Card'
import Spinner from 'components/Spinner'

import bitImage from 'images/bit.svg'

import styles from './index.module.scss'

export interface BuyBitsContentProps {
	bit: Bit | undefined
}

const BuyBitsContent = ({ bit }: BuyBitsContentProps) => {
	const isShowing = Boolean(bit)

	const id = bit?.id
	const user = useRecoilValue(userState)

	const [isLoading, setIsLoading] = useState(false)
	const [isDisabled, setIsDisabled] = useState(true)

	const stripe = useStripe()
	const elements = useElements()

	const onSubmit = useCallback(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()
			if (!(id && user && stripe && elements)) return

			try {
				setIsLoading(true)

				const card = elements.getElement(CardElement)
				if (!card) throw new Error('Missing card')

				const { paymentIntent, error } = await stripe.confirmCardPayment(
					await getClientSecret(id),
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
		[id, user, stripe, elements, setIsLoading]
	)

	useEffect(() => {
		elements?.getElement(CardElement)?.[isShowing ? 'focus' : 'blur']()
	}, [isShowing, elements])

	useEffect(() => {
		const card = elements?.getElement(CardElement)
		if (!card) return

		card.on('change', event => {
			setIsDisabled(!event.complete)
		})

		return () => {
			card.off('change')
		}
	}, [elements, setIsDisabled])

	return (
		<form className={styles.root} onSubmit={onSubmit}>
			<header className={styles.header}>
				<article className={styles.info}>
					<h3 className={styles.title}>{bit?.name}</h3>
					<p className={styles.bits}>
						<Svg className={styles.bit} src={bitImage} />
						{formatNumber(bit?.bits ?? 0)}
					</p>
				</article>
				{id && (
					<img className={styles.image} src={getStorageUrl(`bits/${id}`)} />
				)}
			</header>
			<Card />
			<button
				className={styles.buy}
				disabled={isDisabled || !(id && stripe && elements)}
				aria-busy={isLoading}
				data-cost={formatCost(bit?.cost ?? 0)}
			>
				{isLoading ? <Spinner className={styles.spinner} /> : 'Buy'}
			</button>
		</form>
	)
}

export default BuyBitsContent
