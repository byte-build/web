import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import formatNumber from 'lib/formatNumber'

import shop from 'images/shop.svg'
import bit from 'images/bit.svg'
import plus from 'images/plus.svg'

import styles from './index.module.scss'

const NavbarLinks = () => (
	<div className={styles.root}>
		<Link href="/shop">
			<a className={styles.shop}>
				<Svg className={styles.shopIcon} src={shop} />
				Gift Shop
			</a>
		</Link>
		<Link href="/bits">
			<a className={styles.bits}>
				<Svg className={styles.bitsIcon} src={bit} />
				{formatNumber(1420)}
				<Svg className={styles.addBits} src={plus} />
			</a>
		</Link>
	</div>
)

export default NavbarLinks
