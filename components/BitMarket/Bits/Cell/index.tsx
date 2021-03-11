import Bit from 'models/Bit'
import getStorageUrl from 'lib/storage/url'

import styles from './index.module.scss'

export interface BitCellProps {
	bit: Bit
}

const BitCell = ({ bit }: BitCellProps) => {
	return (
		<a id={bit.id} className={styles.root} href={`#${bit.id}`}>
			<img
				className={styles.image}
				src={getStorageUrl(`bits/${bit.id}`)}
				loading="lazy"
			/>
			<span className={styles.name}>{bit.name}</span>
		</a>
	)
}

export default BitCell
