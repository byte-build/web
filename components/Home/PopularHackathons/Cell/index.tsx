import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import Hackathon from 'models/Hackathon'
import formatNumber from 'lib/format/number'
import formatDate from 'lib/format/date'

import bit from 'images/bit.svg'
import date from 'images/date.svg'
import user from 'images/user.svg'
import right from 'images/arrow-right.svg'

import styles from './index.module.scss'

export interface HackathonCellProps {
	hackathon: Hackathon
}

const HackathonCell = ({ hackathon }: HackathonCellProps) => (
	<Link href={`/${hackathon.id}`}>
		<a className={styles.root}>
			<img className={styles.image} src="/hackathon.png" loading="lazy" />
			<span className={styles.name}>{hackathon.name}</span>
			<span className={styles.subtitle}>{hackathon.subtitle}</span>
			<span className={styles.info}>
				<span className={styles.bits}>
					<Svg className={styles.bit} src={bit} />
					{formatNumber(hackathon.bits)}
				</span>
				<span className={styles.time}>
					<Svg className={styles.timeInfo} src={date} />
					{formatDate(hackathon.time.start)} - {formatDate(hackathon.time.end)}
				</span>
				<span className={styles.participants}>
					<Svg className={styles.participant} src={user} />
					{formatNumber(hackathon.participants)}
				</span>
			</span>
			<span className={styles.tags}>
				{hackathon.tags.map(tag => (
					<span key={tag} className={styles.tag}>
						{tag}
					</span>
				))}
			</span>
			<span className={styles.view}>
				View Hackathon
				<Svg className={styles.viewInfo} src={right} />
			</span>
		</a>
	</Link>
)

export default HackathonCell
