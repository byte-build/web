import { NextPage } from 'next'

import Pages from 'components/ManageHackathon/Pages'
import Header from './Header'
import Page from './Page'

import styles from './index.module.scss'

const CreateHackathon: NextPage = () => (
	<div className={styles.root}>
		<Pages base="/new" restricted />
		<main className={styles.main}>
			<Header />
			<Page />
		</main>
	</div>
)

export default CreateHackathon
