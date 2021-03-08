import { useCallback } from 'react'
import { Svg } from 'react-optimized-image'

import firebase from 'lib/firebase'
import handleError from 'lib/handleError'

import github from 'images/github.svg'

import styles from './index.module.scss'

import 'firebase/auth'

const provider = new firebase.auth.GithubAuthProvider()
const auth = firebase.auth()

const NavbarAuth = () => {
	const logIn = useCallback(async () => {
		try {
			const { user, additionalUserInfo } = await auth.signInWithPopup(provider)
			console.log(user, additionalUserInfo)
		} catch (error) {
			if (error.code === 'auth/popup-closed-by-user') return
			handleError(error)
		}
	}, [])

	return (
		<button className={styles.root} onClick={logIn}>
			<Svg className={styles.icon} src={github} />
			Log in
		</button>
	)
}

export default NavbarAuth
