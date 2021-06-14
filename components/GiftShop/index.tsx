import { NextPage } from 'next'

import Header from './Header'
import Filters from '../Hackathons/Filters'
import Summary from '../Hackathons/Summary'
import Results from '../Hackathons/Results'

import styles from './index.module.scss'
import Prizes from './Card'

const GiftShop: NextPage = () => (
	<>
		<Header />
		<div className={styles.root}>
			<Filters />
			<Summary />
			<Prizes />
		</div>
	</>
)

export default GiftShop
