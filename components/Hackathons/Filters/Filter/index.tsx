import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

import { HackathonFilterCategory, HackathonFilter } from 'models/HackathonQuery'
import queryState from 'state/query'

import styles from './index.module.scss'

export interface HackathonFilterRowProps {
	category: HackathonFilterCategory
	filter: HackathonFilter
}

const toggleFilter = (
	category: HackathonFilterCategory,
	filter: HackathonFilter
) =>
	category.filters.map(_filter => ({
		..._filter,
		active:
			_filter.value === filter.value
				? !_filter.active
				: category.multiple && _filter.active
	}))

const HackathonFilterRow = ({ category, filter }: HackathonFilterRowProps) => {
	const setState = useSetRecoilState(queryState)

	const toggle = useCallback(() => {
		setState(state => ({
			...state,
			filters: state.filters.map(_category =>
				_category.name === category.name
					? { ..._category, filters: toggleFilter(_category, filter) }
					: _category
			)
		}))
	}, [category.name, filter.value, setState])

	return (
		<button
			className={styles.root}
			onClick={toggle}
			aria-selected={filter.active}
		>
			{filter.name}
		</button>
	)
}

export default HackathonFilterRow
