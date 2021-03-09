import HomeLink from 'components/HomeLink'
import FooterCategory, { Category } from './Category'

import styles from './index.module.scss'

const categories: Category[] = [
	{
		name: 'Product',
		links: [
			{ name: 'Hackathons', url: '/hackathons' },
			{ name: 'Gift Shop', url: '/shop' },
			{ name: 'Bit Market', url: '/bits' }
		]
	},
	{
		name: 'Company',
		links: [
			{ name: 'About', url: '/about' },
			{ name: 'Team', url: '/team' },
			{ name: 'Privacy', url: '/privacy' }
		]
	},
	{
		name: 'Social',
		links: [
			{ name: 'Twitter', url: 'https://twitter.com' },
			{ name: 'Facebook', url: 'https://www.facebook.com' },
			{ name: 'GitHub', url: 'https://github.com/byte-build' }
		]
	}
]

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
					<FooterCategory key={category.name} category={category} />
				))}
			</article>
		</div>
		<p className={styles.copyright}>
			Copyright &copy; 2021 byte Inc. All rights reserved.
		</p>
	</footer>
)

export default Footer
