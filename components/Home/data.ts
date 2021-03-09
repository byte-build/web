import { GetStaticProps } from 'next'

import { HomeProps } from './models'
import getPrizes from 'lib/prize/all'

export const getStaticProps: GetStaticProps<
	HomeProps,
	Record<string, never>
> = async () => ({
	props: { prizes: await getPrizes() },
	revalidate: 60 * 60 // 1 hour
})
