import { GetStaticProps } from 'next'

import { BitMarketProps } from './models'
import getBits from 'lib/bit/all'

export const getStaticProps: GetStaticProps<BitMarketProps> = async () => ({
	props: { bits: await getBits() },
	revalidate: 60 * 60 // 1 hour
})
