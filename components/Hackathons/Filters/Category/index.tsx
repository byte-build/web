import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { Svg } from 'react-optimized-image'

import { HackathonFilterCategory } from 'models/Hackathon/Query'
import queryState from 'state/query'
import Filter from '../Filter'

import down from 'images/chevron-down.svg'

import styles from './index.module.scss'

export interface HackathonCategoryRowProps {
	category: HackathonFilterCategory
}

const HackathonCategoryRow = ({ category }: HackathonCategoryRowProps) => {
	const setState = useSetRecoilState(queryState)

	const toggleExpanded = useCallback(() => {
		setState(state => ({
			...state,
			filters: state.filters.map(_category =>
				_category.name === category.name
					? { ..._category, expanded: !_category.expanded }
					: _category
			)
		}))
	}, [category.name, setState])

	return (
		<article className={styles.root} aria-expanded={category.expanded}>
			<header className={styles.header} onClick={toggleExpanded}>
				<h4 className={styles.name}>{category.name}</h4>
				<Svg className={styles.expanded} src={down} />
			</header>
			{category.expanded &&
				category.filters.map(filter => (
					<Filter key={filter.value} category={category} filter={filter} />
				))}
		</article>
	)
}

export default HackathonCategoryRow
