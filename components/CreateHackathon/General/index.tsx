import { NextPage } from 'next'

import CreateHackathon from '..'
import Header from './Header'
import Image from './Image'
import Id from './Id'
import Name from './Name'
import Subtitle from './Subtitle'
import Bits from './Bits'

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
			<Bits />
		</section>
	</CreateHackathon>
)

export default CreateHackathonGeneral