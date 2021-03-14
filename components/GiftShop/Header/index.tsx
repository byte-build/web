import { useRecoilValue } from 'recoil'
import Img, { Svg } from 'react-optimized-image'

import formatNumber from 'lib/format/number'
import userState from 'state/user'

import bit from 'images/bit.svg'
import macbook from 'images/macbook.svg'
import right from 'images/arrow-right.svg'

import styles from './index.module.scss'

const GiftShopHeader = () => {
	const user = useRecoilValue(userState)

	return (
		<header className={styles.root}>
			<article className={styles.info}>
				<h1 className={styles.title}>Gift Shop</h1>
				<h3 className={styles.subtitle}>
					Spend Your Hard Earned, Or Paid To Win Bits Here!
				</h3>
				<p className={styles.balance}>
					<Svg className={styles.bit} src={bit} />
					Balance: {formatNumber(user?.bits ?? 0)}
				</p>
			</article>
			<div>
				<h3 className={styles.subtitle}>Our Most Popular Prize!</h3>
				<div className={styles.popular}>
					<h3 className={styles.subtitleSmall}>2018 Apple Macbook Pro</h3>
					<Img className={styles.art} src={macbook} webp />
					<span className={styles.buy}>
						Buy!
						<Svg className={styles.buyInfo} src={right} />
					</span>
				</div>
			</div>
		</header>
	)
}

export default GiftShopHeader
