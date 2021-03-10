import { Svg } from 'react-optimized-image'

import User from 'models/User'

import bell from 'images/bell.svg'
import down from 'images/chevron-down.svg'

import styles from './index.module.scss'

export interface NavbarProfileProps {
	user: User
}

const NavbarProfile = ({ user }: NavbarProfileProps) => (
	<div className={styles.root}>
		<button className={styles.notifications}>
			<Svg className={styles.notificationsIcon} src={bell} />
		</button>
		<hr className={styles.divider} />
		<button className={styles.user}>
			{user.image && <img className={styles.userImage} src={user.image} />}
			{user.name}
			<Svg className={styles.userInfo} src={down} />
		</button>
	</div>
)

export default NavbarProfile
