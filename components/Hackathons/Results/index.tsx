import { useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import throttle from 'lodash/throttle'

import Hackathon from 'models/Hackathon'
import HackathonQuery from 'models/Hackathon/Query'
import getHackathons from 'lib/hackathon/get'
import handleError from 'lib/error/handle'
import queryState from 'state/query'
import hackathonsState from 'state/hackathons'
import Row from './Row'

import styles from './index.module.scss'

const search = throttle(
	(query: HackathonQuery, setHackathons: (hackathons: Hackathon[]) => void) => {
		let commit = true

		getHackathons(query)
			.then(hackathons => commit && setHackathons(hackathons))
			.catch(error => commit && handleError(error))

		return () => {
			commit = false
		}
	},
	500
)

const HackathonResults = () => {
	const query = useRecoilValue(queryState)
	const [hackathons, setHackathons] = useRecoilState(hackathonsState)

	useEffect(() => search(query, setHackathons), [query, setHackathons])

	return (
		<main className={styles.root}>
			{hackathons?.map(hackathon => (
				<Row key={hackathon.id} hackathon={hackathon} />
			))}
		</main>
	)
}

export default HackathonResults
