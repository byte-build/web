import { NextPage } from 'next'

import { HomeProps } from './models'
import Header from './Header'
import PopularHackathons from './PopularHackathons'
import Bits from './Bits'
import Prizes from './Prizes'

const Home: NextPage<HomeProps> = ({ prizes }) => (
	<>
		<Header />
		<PopularHackathons />
		<Bits />
		<Prizes prizes={prizes} />
	</>
)

export default Home
