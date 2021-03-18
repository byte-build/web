import { useRecoilState } from 'recoil'

import createHackathonState from 'state/create'
import Endpoint from './Endpoint'

import styles from './index.module.scss'

const CreateHackathonTime = () => {
	const [{ time }] = useRecoilState(createHackathonState)

	return (
		<div className={styles.root}>
			<label className={styles.label}>Start</label>
			<Endpoint date={time.start ?? new Date()} />
			<label className={styles.label}>End</label>
			<Endpoint date={time.end ?? new Date()} />
		</div>
	)
}

export default CreateHackathonTime
