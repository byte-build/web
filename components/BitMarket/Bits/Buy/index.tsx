import { useState, useEffect } from 'react'
import Router from 'next/router'
import type { Stripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import Bit from 'models/Bit'
import loadStripe from 'lib/stripe/load'
import Modal from 'components/Modal'
import Content from './Content'

import styles from './index.module.scss'

export interface BuyBitsProps {
	bit: Bit | undefined
}

const setIsShowing = (isShowing: boolean) => {
	if (isShowing) return
	Router.push('/bits', undefined, { shallow: true, scroll: false })
}

const BuyBits = ({ bit }: BuyBitsProps) => {
	const isShowing = Boolean(bit)
	const [stripe, setStripe] = useState<Promise<Stripe | null> | null>(null)

	useEffect(() => {
		if (isShowing) setStripe(stripe => stripe ?? loadStripe())
	}, [isShowing, setStripe])

	return (
		<Modal
			className={styles.root}
			isShowing={isShowing}
			setIsShowing={setIsShowing}
		>
			<Elements stripe={stripe}>
				<Content bit={bit} />
			</Elements>
		</Modal>
	)
}

export default BuyBits
