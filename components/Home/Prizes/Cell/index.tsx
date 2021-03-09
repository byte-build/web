import Link from 'next/link'

import Prize from 'models/Prize'
import formatNumber from 'lib/format/number'
import getStorageUrl from 'lib/storage/url'

import styles from './index.module.scss'

export interface PrizeCellProps {
	prize: Prize
}

const PrizeCell = ({ prize }: PrizeCellProps) => (
	<Link href={`/shop/${prize.id}`}>
		<a className={styles.root} data-bits={formatNumber(prize.bits)}>
			<img
				className={styles.image}
				src={getStorageUrl(`prizes/${prize.id}`)}
				loading="lazy"
			/>
		</a>
	</Link>
)

export default PrizeCell
