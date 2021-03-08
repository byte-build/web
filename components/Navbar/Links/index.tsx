import Link from 'next/link'
import Img, { Svg } from 'react-optimized-image'

import bit from 'images/bit.png'
import shop from 'images/shop.svg'

import styles from './index.module.scss'

const NavbarLinks = () => (
	<div className={styles.root}>
		<Link href="/shop">
			<a className={styles.link}>
				<Svg className={styles.icon} src={shop} />
				Gift Shop
			</a>
		</Link>
		<Link href="/bits">
			<a className={styles.link}>
				<Img className={styles.icon} src={bit} webp url />
				Bit Market
			</a>
		</Link>
	</div>
)

export default NavbarLinks
