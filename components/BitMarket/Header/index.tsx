import { useRecoilValue } from 'recoil'
import { Svg } from 'react-optimized-image'

import formatNumber from 'lib/format/number'
import userState from 'state/user'

import bit from 'images/bit.svg'

import styles from './index.module.scss'

const BitMarketHeader = () => {
	const user = useRecoilValue(userState)

	return (
		<header className={styles.root}>
			<article className={styles.info}>
				<h1 className={styles.title}>Bit Market</h1>
				<h3 className={styles.subtitle}>Fund your hackathon, or buy prizes!</h3>
				<p className={styles.balance}>
					<Svg className={styles.bit} src={bit} />
					{formatNumber(user?.bits ?? 0)}
				</p>
			</article>
			<Svg className={styles.art} src={bit} />
		</header>
	)
}

export default BitMarketHeader
