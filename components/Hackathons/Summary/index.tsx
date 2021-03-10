import { useRecoilValue } from 'recoil'

import formatNumber from 'lib/format/number'
import hackathonsState from 'state/hackathons'
import Spinner from 'components/Spinner'
import Order from './Order'

import styles from './index.module.scss'

const HackathonsSummary = () => {
	const { value, isLoading } = useRecoilValue(hackathonsState)
	const count = value?.length ?? 0

	return (
		<header className={styles.root}>
			<h1 className={styles.title}>
				Showing{' '}
				<span className={styles.count}>
					{formatNumber(count)} Hackathon{count === 1 ? '' : 's'}
					{isLoading && <Spinner className={styles.spinner} />}
				</span>
			</h1>
			<Order />
		</header>
	)
}

export default HackathonsSummary
