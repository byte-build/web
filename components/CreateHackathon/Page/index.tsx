import Id from './Id'
import Name from './Name'
import Subtitle from './Subtitle'

import styles from './index.module.scss'

const CreateHackathonPage = () => (
	<section className={styles.root}>
		<Id />
		<Name />
		<Subtitle />
	</section>
)

export default CreateHackathonPage
