import Link from 'next/link'
import Img from 'react-optimized-image'
import cx from 'classnames'

import logo from 'images/logo.png'

import styles from './index.module.scss'

export interface HomeLinkProps {
	className?: string
}

const HomeLink = ({ className }: HomeLinkProps) => (
	<Link href="/">
		<a className={cx(styles.root, className)}>
			<Img className={styles.logo} src={logo} webp />
			byte
		</a>
	</Link>
)

export default HomeLink
