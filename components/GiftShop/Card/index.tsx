import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import bit from 'images/bit.svg'
import right from 'images/arrow-right.svg'

import styles from './index.module.scss'

const Prizes = () => {
	return (
		<Link href="https://adityarawat.me">
			<a className={styles.root}>
				<img
					className={styles.image}
					src="https://images.unsplash.com/photo-1612831660648-ba96d72bfc5b?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"
					loading="lazy"
				/>
				<span className={styles.content}>
					<span className={styles.main}>
						<span className={styles.name}>Prize Name</span>
						<span className={styles.subtitle}>Prize Descriptiuon</span>
					</span>
					<span className={styles.info}>
						<span className={styles.bits}>
							<Svg className={styles.bit} src={bit} />
							Prize Cost
						</span>

						<span className={styles.tags}>
							<span className={styles.tag}>Prize Tag</span>
						</span>
					</span>
					<span className={styles.view}>
						View Hackathon
						<Svg className={styles.viewInfo} src={right} />
					</span>
				</span>
			</a>
		</Link>
	)
}

export default Prizes
