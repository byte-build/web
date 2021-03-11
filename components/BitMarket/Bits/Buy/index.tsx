import Router from 'next/router'

import Modal from 'components/Modal'
import Bit from 'models/Bit'

export interface BuyBitsProps {
	bit: Bit | undefined
}

const setIsShowing = (isShowing: boolean) => {
	if (!isShowing) Router.push('/bits')
}

const BuyBits = ({ bit }: BuyBitsProps) => {
	return (
		<Modal isShowing={Boolean(bit)} setIsShowing={setIsShowing}>
			{bit?.name}
		</Modal>
	)
}

export default BuyBits
