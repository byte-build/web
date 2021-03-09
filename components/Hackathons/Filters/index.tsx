import { useRecoilValue } from 'recoil'

import queryState from 'state/query'
import Category from './Category'

import styles from './index.module.scss'

const HackathonFilters = () => {
	const state = useRecoilValue(queryState)

	return (
		<aside className={styles.root}>
			<h3 className={styles.title}>Filters</h3>
			{state.filters.map(category => (
				<Category key={category.name} category={category} />
			))}
		</aside>
	)
}

export default HackathonFilters
