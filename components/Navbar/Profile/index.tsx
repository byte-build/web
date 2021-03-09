import { Svg } from 'react-optimized-image'

import firebase from 'lib/firebase'

import bell from 'images/bell.svg'
import down from 'images/chevron-down.svg'

import styles from './index.module.scss'

import 'firebase/auth'

export interface NavbarProfileProps {
	user: firebase.User
}

const NavbarProfile = ({ user }: NavbarProfileProps) => (
	<div className={styles.root}>
		<button className={styles.notifications}>
			<Svg className={styles.notificationsIcon} src={bell} />
		</button>
		<hr className={styles.divider} />
		<button className={styles.user}>
			{user.photoURL && (
				<img className={styles.userImage} src={user.photoURL} />
			)}
			{user.displayName ?? 'Anonymous'}
			<Svg className={styles.userInfo} src={down} />
		</button>
	</div>
)

export default NavbarProfile
