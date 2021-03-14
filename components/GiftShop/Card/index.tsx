import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import bit from 'images/bit.svg'
import right from 'images/arrow-right.svg'
import macbook from 'images/macbook.svg'

import styles from './index.module.scss'

const Prizes = () => {
	return (
		<>
			<Link href="https://adityarawat.me">
				<a className={styles.root}>
					<img className={styles.image} src={`${macbook}`} loading="lazy" />
					<span className={styles.content}>
						<span className={styles.main}>
							<span className={styles.name}>The Cure</span>
							<span className={styles.subtitle}>
								This prize allows you to eliminate ED in your body. Your
								welcome.
							</span>
						</span>
						<span className={styles.info}>
							<span className={styles.bits}>
								<Svg className={styles.bit} src={bit} />
								100,000
							</span>

							<span className={styles.tags}>
								<span className={styles.tag}>Health</span>
							</span>
						</span>
						<span className={styles.view}>
							Buy Now
							<Svg className={styles.viewInfo} src={right} />
						</span>
					</span>
				</a>
			</Link>
		</>
	)
}

export default Prizes
