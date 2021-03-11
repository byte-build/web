import Link from 'next/link'

import Bit from 'models/Bit'
import getStorageUrl from 'lib/storage/url'

import styles from './index.module.scss'

export interface BitCellProps {
	bit: Bit
}

const BitCell = ({ bit }: BitCellProps) => {
	return (
		<Link href={`/bits/${bit.id}`} shallow scroll={false}>
			<a className={styles.root}>
				<img
					className={styles.image}
					src={getStorageUrl(`bits/${bit.id}`)}
					loading="lazy"
				/>
				<span className={styles.name}>{bit.name}</span>
			</a>
		</Link>
	)
}

export default BitCell
