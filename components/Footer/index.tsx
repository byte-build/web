import categories from './categories'
import HomeLink from 'components/HomeLink'
import Category from './Category'

import styles from './index.module.scss'

const Footer = () => (
	<footer className={styles.root}>
		<div className={styles.main}>
			<article className={styles.info}>
				<HomeLink />
				<p className={styles.subtitle}>
					Eric “Jew” Zhu. Funding a cure to ED - Luccock
				</p>
			</article>
			<article className={styles.categories}>
				{categories.map(category => (
					<Category key={category.name} category={category} />
				))}
			</article>
		</div>
		<p className={styles.copyright}>
			Copyright &copy; 2021 byte Inc. All rights reserved.
		</p>
	</footer>
)

export default Footer
