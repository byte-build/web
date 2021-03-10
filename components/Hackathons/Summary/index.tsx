import { useRecoilValue } from 'recoil'

import formatNumber from 'lib/format/number'
import queryState from 'state/query'
import hackathonsState from 'state/hackathons'

import styles from './index.module.scss'

const HackathonsSummary = () => {
	const query = useRecoilValue(queryState)
	const hackathons = useRecoilValue(hackathonsState)

	return (
		<header className={styles.root}>
			<h1 className={styles.title}>
				Showing:{' '}
				<span className={styles.count}>
					{formatNumber(hackathons?.length ?? 0)} Hackathon
					{hackathons?.length === 1 ? '' : 's'}
				</span>
			</h1>
		</header>
	)
}

export default HackathonsSummary
