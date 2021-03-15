import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import Bit from 'models/Bit'
import getStorageUrl from 'lib/storage/url'
import formatNumber from 'lib/format/number'
import formatCost from 'lib/format/cost'

import bitImage from 'images/icons/bit.svg'
import right from 'images/icons/arrow-right.svg'

import styles from './index.module.scss'

export interface BitCellProps {
	bit: Bit
}

const BitCell = ({ bit }: BitCellProps) => (
	<Link href={`/bits/${bit.id}`} shallow scroll={false}>
		<a className={styles.root}>
			<img
				className={styles.image}
				src={getStorageUrl(`bits/${bit.id}`)}
				loading="lazy"
			/>
			<span className={styles.name}>{bit.name}</span>
			<span className={styles.bits}>
				<Svg className={styles.bit} src={bitImage} />
				{formatNumber(bit.bits)}
			</span>
			<span className={styles.buy}>
				${formatCost(bit.cost)}
				<Svg className={styles.buyInfo} src={right} />
			</span>
		</a>
	</Link>
)

export default BitCell
