import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import Hackathon from 'models/Hackathon'
import Cell from './Cell'

import right from 'images/arrow-right.svg'

import styles from './index.module.scss'

const HACKATHON: Hackathon = {
	id: 'eric-hacks',
	name: 'Eric Hacks',
	subtitle:
		'Eric hacks is dedicated to bringing awareness to ED, a condition Eric suffers from himself',
	bits: 25000,
	participants: 35,
	tags: ['beginner', 'ai'],
	time: {
		start: new Date(Date.now() / 2),
		end: new Date()
	},
	admins: {
		DXOWFkoCoDWWZ9rWA1W4fppQBRv2: {
			image: 'https://avatars.githubusercontent.com/u/41527167?v=4',
			name: 'Ken Mueller',
			role: 'owner'
		}
	}
}

const HomePopularHackathons = () => {
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
				<Cell hackathon={HACKATHON} />
				<Cell hackathon={HACKATHON} />
				<Cell hackathon={HACKATHON} />
			</div>
		</section>
	)
}

export default HomePopularHackathons
