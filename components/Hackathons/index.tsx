import { NextPage } from 'next'

import Filters from './Filters'
import Summary from './Summary'
import Results from './Results'
import Footer from 'components/Footer'

import styles from './index.module.scss'

const Hackathons: NextPage = () => (
	<>
		<div className={styles.root}>
			<Filters />
			<Summary />
			<Results />
		</div>
		<Footer />
	</>
)

export default Hackathons
