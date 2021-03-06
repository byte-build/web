import HackathonData from 'models/Hackathon/Data'
import HackathonQuery from 'models/Hackathon/Query'
import search from 'lib/search'
import hackathonFromData from './from/data'

const getHackathons = async ({ query, index, filters }: HackathonQuery) => {
	const { hits } = await search.initIndex(index).search(query, {
		filters: filters
			.map(({ filters }) => filters.filter(({ active }) => active))
			.filter(({ length }) => length)
			.map(filters => `(${filters.map(({ value }) => value).join(' OR ')})`)
			.join(' AND ')
	})

	return hits.map(hit =>
		hackathonFromData(({
			id: hit.objectID,
			...hit
		} as unknown) as HackathonData)
	)
}

export default getHackathons
