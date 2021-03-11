import Bit from 'models/Bit'
import Cell from './Cell'

import styles from './index.module.scss'

export interface BitsProps {
	bits: Bit[]
}

const Bits = ({ bits }: BitsProps) => (
	<main className={styles.root}>
		{bits.map(bit => (
			<Cell key={bit.id} bit={bit} />
		))}
	</main>
)

export default Bits
