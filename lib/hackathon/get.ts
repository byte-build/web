import HackathonData from 'models/Hackathon/Data'
import HackathonQuery from 'models/Hackathon/Query'
import index from 'lib/search'
import hackathonFromData from './from/data'

const getHackathons = async ({ query, order, filters }: HackathonQuery) => {
	const { hits } = await index.search(query)

	return hits.map(hit =>
		hackathonFromData(({
			id: hit.objectID,
			...hit
		} as unknown) as HackathonData)
	)
}

export default getHackathons
