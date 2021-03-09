import { NextPage } from 'next'

import Header from './Header'
import PopularHackathons from './PopularHackathons'
import Bits from './Bits'

const Home: NextPage = () => (
	<>
		<Header />
		<PopularHackathons />
		<Bits />
	</>
)

export default Home
