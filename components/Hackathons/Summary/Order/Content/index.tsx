import { useRecoilValue } from 'recoil'

import { ORDERS } from 'models/Hackathon/Order'
import queryState from 'state/query'
import Row from './Row'

import styles from './index.module.scss'

const OrderHackathonsContent = () => {
	const { index } = useRecoilValue(queryState)

	return (
		<>
			{ORDERS.map(order => (
				<Row key={order.index} order={order} index={index} />
			))}
		</>
	)
}

export default OrderHackathonsContent
export const contentClassName = styles.root
