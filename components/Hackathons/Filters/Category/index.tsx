import { useState, useCallback } from 'react'
import { Svg } from 'react-optimized-image'

import { HackathonFilterCategory } from 'models/Hackathon/Query'
import Filter from '../Filter'

import down from 'images/icons/chevron-down.svg'

import styles from './index.module.scss'

export interface HackathonCategoryRowProps {
	category: HackathonFilterCategory
}

const HackathonCategoryRow = ({ category }: HackathonCategoryRowProps) => {
	const [isExpanded, setIsExpanded] = useState(true)

	const toggleIsExpanded = useCallback(() => {
		setIsExpanded(isExpanded => !isExpanded)
	}, [setIsExpanded])

	return (
		<article className={styles.root} aria-expanded={isExpanded}>
			<header className={styles.header} onClick={toggleIsExpanded}>
				<h4 className={styles.name}>{category.name}</h4>
				<Svg className={styles.expanded} src={down} />
			</header>
			{isExpanded &&
				category.filters.map(filter => (
					<Filter key={filter.value} category={category} filter={filter} />
				))}
		</article>
	)
}

export default HackathonCategoryRow
