import { useRouter } from 'next/router'
import Link from 'next/link'
import { Svg } from 'react-optimized-image'

import styles from './index.module.scss'

export interface ManageHackathonLinkProps {
	id: string
	href: string
	name: string
}

const ManageHackathonLink = ({ id, href, name }: ManageHackathonLinkProps) => {
	const current = href === useRouter().asPath

	return (
		<Link href={href}>
			<a className={styles.root} aria-current={current ? 'page' : undefined}>
				<span
					className={styles.mask}
					aria-label={name}
					data-balloon-pos="right"
				>
					<Svg
						className={styles.image}
						src={require(`images/manage/${id}.svg`)}
					/>
				</span>
			</a>
		</Link>
	)
}

export default ManageHackathonLink
