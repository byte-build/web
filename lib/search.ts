import algolia from 'algoliasearch'

const search = algolia(
	process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
	process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
)

export default search
