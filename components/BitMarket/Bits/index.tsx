import { useRouter } from 'next/router'

import { BitMarketQuery } from '../models'
import Bit from 'models/Bit'
import Cell from './Cell'

import styles from './index.module.scss'

export interface BitsProps {
	bits: Bit[]
}

const Bits = ({ bits }: BitsProps) => {
	const { bit: id } = useRouter().query as Partial<BitMarketQuery>
	const bit = id ? bits.find(bit => bit.id === id) : undefined

	return (
		<main className={styles.root}>
			{bits.map(bit => (
				<Cell key={bit.id} bit={bit} />
			))}
		</main>
	)
}

export default Bits
