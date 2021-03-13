import Link from 'next/link'
import Img, { Svg } from 'react-optimized-image'

import stars from 'images/icons/stars.svg'
import shop from 'images/icons/shop.svg'
import right from 'images/icons/arrow-right.svg'
import art from 'images/home/bits-art.png'

import styles from './index.module.scss'

const HomeBits = () => (
	<section className={styles.root}>
		<div className={styles.info}>
			<h3 className={styles.title}>
				Bits
				<Svg className={styles.titleInfo} src={stars} />
			</h3>
			<Img className={styles.art} src={art} webp />
		</div>
		<article className={styles.text}>
			<p className={styles.description}>
				Hackathons award <em>bits</em>, which you can save up and buy{' '}
				<strong>extraordinary</strong> prizes from the gift shop. Or, you can
				exchange bits for <em>money!</em>
			</p>
			<Link href="/shop">
				<a className={styles.link}>
					<Svg className={styles.linkInfo} src={shop} />
					View Gift Shop
					<Svg className={styles.linkArrow} src={right} />
				</a>
			</Link>
		</article>
	</section>
)

export default HomeBits
