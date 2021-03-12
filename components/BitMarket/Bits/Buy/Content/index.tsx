import { FormEvent, useState, useCallback, useEffect } from 'react'
import Router from 'next/router'
import { useRecoilValue } from 'recoil'
import type { StripeCardElement } from '@stripe/stripe-js'
import { useStripe } from '@stripe/react-stripe-js'
import { Svg } from 'react-optimized-image'

import Bit from 'models/Bit'
import sleep from 'lib/sleep'
import getStorageUrl from 'lib/storage/url'
import logIn from 'lib/auth/logIn'
import getClientSecret from 'lib/bit/secret'
import formatNumber from 'lib/format/number'
import formatCost from 'lib/format/cost'
import handleError from 'lib/error/handle'
import userState from 'state/user'
import Card from '../Card'
import Spinner from 'components/Spinner'

import bitImage from 'images/bit.svg'
import check from 'images/check-circle.svg'

import styles from './index.module.scss'

export interface BuyBitsContentProps {
	bit: Bit | undefined
}

const BuyBitsContent = ({ bit: _bit }: BuyBitsContentProps) => {
	const [bit, setBit] = useState(_bit)

	const stripe = useStripe()
	const user = useRecoilValue(userState)

	const isShowing = Boolean(_bit)
	const [card, setCard] = useState<StripeCardElement | null>(null)

	const [isLoading, setIsLoading] = useState(false)
	const [isDisabled, setIsDisabled] = useState(true)

	const [didSucceed, setDidSucceed] = useState(false)

	const succeed = useCallback(async () => {
		setDidSucceed(true)

		await sleep(700)
		Router.push('/bits', undefined, { shallow: true, scroll: false })

		await sleep(300)
		setDidSucceed(false)
	}, [setDidSucceed])

	const onSubmit = useCallback(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()
			if (!(bit && stripe && card)) return

			try {
				setIsLoading(true)

				const currentUser = user ?? (await logIn())
				if (!currentUser) return setIsLoading(false)

				const { paymentIntent, error } = await stripe.confirmCardPayment(
					await getClientSecret(bit.id),
					{
						payment_method: {
							card,
							billing_details: {
								name: currentUser.name,
								email: currentUser.email
							}
						}
					}
				)

				if (error) throw error

				if (paymentIntent?.status !== 'succeeded')
					throw new Error('Unsuccessful payment')

				setIsLoading(false)
				await succeed()
			} catch (error) {
				setIsLoading(false)
				handleError(error)
			}
		},
		[bit, user, stripe, card, setIsLoading, succeed]
	)

	useEffect(() => {
		if (_bit) setBit(_bit)
	}, [_bit, setBit])

	useEffect(() => {
		card?.[isShowing ? 'focus' : 'blur']()
	}, [isShowing, card])

	useEffect(() => {
		if (!card) return

		card.on('change', event => {
			setIsDisabled(!event.complete)
		})

		return () => {
			card.off('change')
		}
	}, [card, setIsDisabled])

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
				{bit && (
					<img className={styles.image} src={getStorageUrl(`bits/${bit.id}`)} />
				)}
			</header>
			<Card setCard={setCard} />
			<button
				className={styles.buy}
				disabled={isDisabled || !(bit && stripe && card)}
				aria-busy={isLoading}
				data-success={didSucceed}
				data-cost={formatCost(bit?.cost ?? 0)}
			>
				{didSucceed ? (
					<Svg className={styles.success} src={check} />
				) : isLoading ? (
					<Spinner className={styles.spinner} />
				) : (
					'Buy'
				)}
			</button>
		</form>
	)
}

export default BuyBitsContent
