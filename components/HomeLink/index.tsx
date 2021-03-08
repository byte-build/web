import Link from 'next/link'
import { Svg } from 'react-optimized-image'
import cx from 'classnames'

import bit from 'images/bit.svg'

import styles from './index.module.scss'

export interface HomeLinkProps {
	className?: string
}

const HomeLink = ({ className }: HomeLinkProps) => (
	<Link href="/">
		<a className={cx(styles.root, className)}>
			<Svg className={styles.icon} src={bit} />
			byte
		</a>
	</Link>
)

export default HomeLink
