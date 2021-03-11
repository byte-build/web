import Router from 'next/router'
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
	if (!isShowing) Router.push('/bits')
}

const BuyBits = ({ bit }: BuyBitsProps) => (
	<Modal
		className={styles.root}
		isShowing={Boolean(bit)}
		setIsShowing={setIsShowing}
	>
		<Elements stripe={bit ? loadStripe() : null}>
			{bit && <Content bit={bit} />}
		</Elements>
	</Modal>
)

export default BuyBits
