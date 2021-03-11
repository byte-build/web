import { GetStaticPaths, GetStaticProps } from 'next'

import { BitMarketQuery, BitMarketProps } from './models'
import getBits from 'lib/bit/all'

export const getStaticPaths: GetStaticPaths<BitMarketQuery> = async () => ({
	paths: (await getBits()).map(({ id }) => ({
		params: { bit: id }
	})),
	fallback: 'blocking'
})

export const getStaticProps: GetStaticProps<
	BitMarketProps,
	BitMarketQuery
> = async ({ params }) => {
	const id = params?.bit

	const bits = await getBits()
	if (id && !bits.some(bit => bit.id === id)) return { notFound: true }

	return {
		props: { bits },
		revalidate: 60 * 60 // 1 hour
	}
}
