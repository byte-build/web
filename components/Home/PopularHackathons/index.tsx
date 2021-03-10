import { useMemo } from 'react'
import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import HackathonData from 'models/Hackathon/Data'
import hackathonFromData from 'lib/hackathon/from/data'
import Cell from './Cell'

import right from 'images/arrow-right.svg'

import styles from './index.module.scss'

export interface HomePopularHackathonsProps {
	hackathons: HackathonData[]
}

const HomePopularHackathons = ({
	hackathons: _hackathons
}: HomePopularHackathonsProps) => {
	const hackathons = useMemo(() => _hackathons.map(hackathonFromData), [
		_hackathons
	])

	return (
		<section className={styles.root}>
			<header className={styles.header}>
				<h3 className={styles.title}>Popular Hackathons</h3>
				<Link href="/hackathons">
					<a className={styles.all}>
						View All Hackathons
						<Svg className={styles.allInfo} src={right} />
					</a>
				</Link>
			</header>
			<div className={styles.cells}>
				{hackathons.map(hackathon => (
					<Cell key={hackathon.id} hackathon={hackathon} />
				))}
			</div>
		</section>
	)
}

export default HomePopularHackathons
