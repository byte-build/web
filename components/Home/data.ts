import { GetStaticProps } from 'next'

import { HomeProps } from './models'
import getPopularHackathons from 'lib/hackathon/popular'
import getPrizes from 'lib/prize/all'

export const getStaticProps: GetStaticProps<
	HomeProps,
	Record<string, never>
> = async () => {
	const [hackathons, prizes] = await Promise.all([
		getPopularHackathons(),
		getPrizes()
	])

	return {
		props: { hackathons, prizes },
		revalidate: 60 * 60 // 1 hour
	}
}
