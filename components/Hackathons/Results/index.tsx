import { useEffect } from 'react'
import { SetterOrUpdater, useRecoilValue, useRecoilState } from 'recoil'
import throttle from 'lodash/throttle'

import HackathonQuery from 'models/Hackathon/Query'
import getHackathons from 'lib/hackathon/get'
import handleError from 'lib/error/handle'
import queryState from 'state/query'
import hackathonsState, { HackathonsState } from 'state/hackathons'
import Row from './Row'

import styles from './index.module.scss'

const search = throttle(
	(query: HackathonQuery, setState: SetterOrUpdater<HackathonsState>) => {
		let commit = true

		getHackathons(query)
			.then(value => commit && setState({ value, isLoading: false }))
			.catch(error => commit && handleError(error))

		return () => {
			commit = false
			setState(state => ({ ...state, isLoading: false }))
		}
	},
	1000
)

const HackathonResults = () => {
	const query = useRecoilValue(queryState)
	const [{ value }, setState] = useRecoilState(hackathonsState)

	useEffect(() => {
		setState(state => ({ ...state, isLoading: true }))
		return search(query, setState)
	}, [query, setState])

	return (
		<main className={styles.root}>
			{value?.map(hackathon => (
				<Row key={hackathon.id} hackathon={hackathon} />
			))}
		</main>
	)
}

export default HackathonResults
