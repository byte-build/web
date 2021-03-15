import { useRecoilValue } from 'recoil'
import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import formatNumber from 'lib/format/number'
import userState from 'state/user'

import shop from 'images/icons/shop.svg'
import bit from 'images/icons/bit.svg'
import plus from 'images/icons/plus.svg'

import styles from './index.module.scss'

const NavbarLinks = () => {
	const user = useRecoilValue(userState)

	return (
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
					{formatNumber(user?.bits ?? 0)}
					<Svg className={styles.addBits} src={plus} />
				</a>
			</Link>
		</div>
	)
}

export default NavbarLinks
