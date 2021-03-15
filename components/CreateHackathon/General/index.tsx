import { NextPage } from 'next'

import CreateHackathon from '..'
import Header from './Header'
import Id from './Id'
import Name from './Name'
import Subtitle from './Subtitle'

import styles from './index.module.scss'

const CreateHackathonGeneral: NextPage = () => (
	<CreateHackathon className={styles.root}>
		<Header />
		<section className={styles.content}>
			<Id />
			<Name />
			<Subtitle />
		</section>
	</CreateHackathon>
)

export default CreateHackathonGeneral
