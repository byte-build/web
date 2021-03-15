import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { Svg } from 'react-optimized-image'

import HackathonOrder from 'models/Hackathon/Order'
import queryState from 'state/query'

import check from 'images/icons/check.svg'

import styles from './index.module.scss'

export interface HackathonOrderRowProps {
	order: HackathonOrder
	index: string
}

const HackathonOrderRow = ({ order, index }: HackathonOrderRowProps) => {
	const setState = useSetRecoilState(queryState)

	const setIndex = useCallback(() => {
		setState(state => ({ ...state, index: order.index }))
	}, [order.index, setState])

	return (
		<button
			className={styles.root}
			onClick={setIndex}
			aria-selected={order.index === index}
		>
			<span className={styles.check}>
				<Svg className={styles.checkInfo} src={check} />
			</span>
			{order.name}
		</button>
	)
}

export default HackathonOrderRow
