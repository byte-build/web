import { NextPage } from 'next'

import { HomeProps } from './models'
import Header from './Header'
import PopularHackathons from './PopularHackathons'
import Bits from './Bits'
import Prizes from './Prizes'

const Home: NextPage<HomeProps> = ({ hackathons, prizes }) => (
	<>
		<Header />
		<PopularHackathons hackathons={hackathons} />
		<Bits />
		<Prizes prizes={prizes} />
	</>
)

export default Home
