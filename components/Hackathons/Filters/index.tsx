import { useRecoilState } from 'recoil'

import queryState from 'state/query'
import Filter from './Filter'

import styles from './index.module.scss'

const HackathonFilters = () => {
	const [state, setState] = useRecoilState(queryState)

	return (
		<aside className={styles.root}>
			<h3 className={styles.title}>Filters</h3>
			{state.filters.map(category => (
				<article key={category.name} className={styles.category}>
					<h4 className={styles.categoryName}>{category.name}</h4>
					{category.filters.map(filter => (
						<Filter key={filter.value} category={category} filter={filter} />
					))}
				</article>
			))}
		</aside>
	)
}

export default HackathonFilters
