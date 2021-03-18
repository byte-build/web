import { Svg } from 'react-optimized-image'

import dateInfo from 'images/icons/date.svg'
import plus from 'images/icons/plus.svg'
import minus from 'images/icons/minus.svg'

import styles from './index.module.scss'

export interface CreateHackathonTimeEndpointProps {
	date: Date
}

const CreateHackathonTimeEndpoint = ({
	date
}: CreateHackathonTimeEndpointProps) => {
	return (
		<div className={styles.root}>
			<div className={styles.date}>
				<p className={styles.dateValue}>abc</p>
				<button className={styles.dateInfo}>
					<Svg className={styles.dateInfoIcon} src={dateInfo} />
				</button>
			</div>
			<div className={styles.time}>
				<p className={styles.timeValue}>def</p>
				<div className={styles.timeInfo}>
					<button className={styles.incrementTime}>
						<Svg className={styles.incrementTimeIcon} src={plus} />
					</button>
					<button className={styles.decrementTime}>
						<Svg className={styles.decrementTimeIcon} src={minus} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CreateHackathonTimeEndpoint
