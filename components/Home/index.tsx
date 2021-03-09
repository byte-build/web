import { NextPage } from 'next'

import Header from './Header'
import PopularHackathons from './PopularHackathons'

const Home: NextPage = () => (
	<>
		<Header />
		<PopularHackathons />
	</>
)

export default Home
