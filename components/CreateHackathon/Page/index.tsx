import Id from './Id'
import Name from './Name'
import Subtitle from './Subtitle'
import Description from './Description'

import styles from './index.module.scss'

const CreateHackathonPage = () => (
	<section className={styles.root}>
		<Id />
		<Name />
		<Subtitle />
		<Description />
	</section>
)

export default CreateHackathonPage
