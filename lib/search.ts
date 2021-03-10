import algolia from 'algoliasearch'

const index = algolia(
	process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
	process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
).initIndex('hackathons')

export default index
