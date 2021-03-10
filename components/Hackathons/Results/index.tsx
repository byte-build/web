import { useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'

import getHackathons from 'lib/hackathon/get'
import handleError from 'lib/error/handle'
import queryState from 'state/query'
import hackathonsState from 'state/hackathons'
import Row from './Row'

const HackathonResults = () => {
	const query = useRecoilValue(queryState)
	const [hackathons, setHackathons] = useRecoilState(hackathonsState)

	useEffect(() => {
		let commit = true

		getHackathons(query)
			.then(hackathons => commit && setHackathons(hackathons))
			.catch(error => commit && handleError(error))

		return () => {
			commit = false
		}
	}, [query, setHackathons])

	return (
		<>
			{hackathons?.map(hackathon => (
				<Row key={hackathon.id} hackathon={hackathon} />
			))}
		</>
	)
}

export default HackathonResults
