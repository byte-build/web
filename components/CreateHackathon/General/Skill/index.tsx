import Option from './Option'

import styles from './index.module.scss'

const CreateHackathonSkill = () => (
	<div className={styles.root}>
		<Option name="beginner" />
		<Option name="intermediate" />
		<Option name="advanced" />
	</div>
)

export default CreateHackathonSkill
