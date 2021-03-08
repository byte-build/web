import Link from 'next/link'
import Img from 'react-optimized-image'
import cx from 'classnames'

import bit from 'images/bit.png'

import styles from './index.module.scss'

export interface HomeLinkProps {
	className?: string
}

const HomeLink = ({ className }: HomeLinkProps) => (
	<Link href="/">
		<a className={cx(styles.root, className)}>
			<Img className={styles.bit} src={bit} webp url />
			byte
		</a>
	</Link>
)

export default HomeLink
