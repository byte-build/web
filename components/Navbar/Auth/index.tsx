import { useRecoilValue } from 'recoil'

import userState from 'state/user'
import Spinner from 'components/Spinner'
import LogIn from '../LogIn'
import Profile from '../Profile'

import styles from './index.module.scss'

import 'firebase/auth'

const NavbarAuth = () => {
	const user = useRecoilValue(userState)

	switch (user) {
		case undefined:
			return (
				<div className={styles.root}>
					<Spinner className={styles.spinner} />
				</div>
			)
		case null:
			return <LogIn />
		default:
			return <Profile user={user} />
	}
}

export default NavbarAuth
