import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import Router from 'next/router'
import { Svg } from 'react-optimized-image'

import queryState from 'state/query'

import search from 'images/search.svg'

import styles from './index.module.scss'

const NavbarSearch = () => {
	const query = useRecoilValue(queryState)

	const showHackathons = useCallback(() => {
		Router.push('/hackathons')
	}, [])

	return (
		<div className={styles.root} onClick={showHackathons}>
			<input
				className={styles.input}
				placeholder="Hackathons"
				value={query}
				readOnly
			/>
			<Svg className={styles.icon} src={search} />
		</div>
	)
}

export default NavbarSearch
