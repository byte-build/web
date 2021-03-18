import { NextPage } from 'next'

import CreateHackathon from '..'
import Header from './Header'
import Image from './Image'
import Id from './Id'
import Name from './Name'
import Subtitle from './Subtitle'
import Skill from './Skill'
import Tags from './Tags'
import Time from './Time'

import styles from './index.module.scss'

const CreateHackathonGeneral: NextPage = () => (
	<CreateHackathon className={styles.root}>
		<Header />
		<section className={styles.content}>
			<Image />
			<h2 className={styles.section}>Info</h2>
			<Id />
			<Name />
			<Subtitle />
			<h2 className={styles.section}>Skill</h2>
			<Skill />
			<h2 className={styles.section}>Tags</h2>
			<Tags />
			<h2 className={styles.section}>Planning</h2>
			<Time />
		</section>
	</CreateHackathon>
)

export default CreateHackathonGeneral
