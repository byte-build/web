import firebase from 'lib/firebase'

import styles from './index.module.scss'

import 'firebase/auth'

export interface NavbarProfileProps {
	user: firebase.User
}

const NavbarProfile = ({ user }: NavbarProfileProps) => {
	return <>{user.displayName}</>
}

export default NavbarProfile
