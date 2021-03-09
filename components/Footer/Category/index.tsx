import Link from 'next/link'

import styles from './index.module.scss'

export interface Category {
	name: string
	links: CategoryLink[]
}

export interface CategoryLink {
	name: string
	url: string
}

export interface FooterCategoryProps {
	category: Category
}

const FooterCategory = ({ category }: FooterCategoryProps) => (
	<div className={styles.root}>
		<p className={styles.name}>{category.name}</p>
		{category.links.map(link =>
			link.url.startsWith('/') ? (
				<Link key={link.url} href={link.url}>
					<a className={styles.link}>{link.name}</a>
				</Link>
			) : (
				<a
					key={link.url}
					className={styles.link}
					href={link.url}
					target="_blank"
				>
					{link.name}
				</a>
			)
		)}
	</div>
)

export default FooterCategory
