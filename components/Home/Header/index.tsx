import Img, { Svg } from 'react-optimized-image'

import person from 'images/home-header-person.svg'
import art from 'images/home-header-art.png'

import styles from './index.module.scss'

const HomeHeader = () => (
	<header className={styles.root}>
		<article className={styles.text}>
			<h1 className={styles.title}>
				abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc
			</h1>
			<p className={styles.subtitle}>
				abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc
				abc abc abc abc abc abc abc
			</p>
			<ol className={styles.list}>
				<li className={styles.item}>
					abc abc abc abc abc abc abc abc abc abc abc abc abc abc
				</li>
				<li className={styles.item}>
					abc abc abc abc abc abc abc abc abc abc abc abc abc abc
				</li>
				<li className={styles.item}>
					abc abc abc abc abc abc abc abc abc abc abc abc abc abc
				</li>
			</ol>
		</article>
		<div className={styles.images}>
			<Svg className={styles.person} src={person} />
			<Img className={styles.art} src={art} webp />
		</div>
	</header>
)

export default HomeHeader
