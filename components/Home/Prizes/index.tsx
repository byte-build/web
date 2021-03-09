import Prize from 'models/Prize'
import Cell from './Cell'

import styles from './index.module.scss'

export interface HomePrizesProps {
	prizes: Prize[]
}

const HomePrizes = ({ prizes }: HomePrizesProps) => (
	<section className={styles.root}>
		{prizes.map(prize => (
			<Cell key={prize.id} prize={prize} />
		))}
	</section>
)

export default HomePrizes
