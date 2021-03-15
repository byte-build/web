import { useRecoilValue } from 'recoil'
import { Svg } from 'react-optimized-image'

import { ORDERS } from 'models/Hackathon/Order'
import queryState from 'state/query'

import down from 'images/icons/chevron-down.svg'

import styles from './index.module.scss'

const OrderHackathonsTrigger = () => {
	const { index } = useRecoilValue(queryState)
	const order = ORDERS.find(order => order.index === index) ?? ORDERS[0]

	return (
		<>
			Sort by{' '}
			<span className={styles.value}>
				{order.name}
				<Svg className={styles.valueInfo} src={down} />
			</span>
		</>
	)
}

export default OrderHackathonsTrigger
export const triggerClassName = styles.root
