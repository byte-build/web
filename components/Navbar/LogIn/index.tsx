import { useState, useCallback } from 'react'
import { Svg } from 'react-optimized-image'

import firebase from 'lib/firebase'
import handleError from 'lib/error/handle'
import Spinner from 'components/Spinner'

import github from 'images/github.svg'

import styles from './index.module.scss'

import 'firebase/auth'

const provider = new firebase.auth.GithubAuthProvider()
const auth = firebase.auth()

const NavbarLogIn = () => {
	const [isLoading, setIsLoading] = useState(false)

	const logIn = useCallback(async () => {
		try {
			setIsLoading(true)
			await auth.signInWithPopup(provider)
		} catch (error) {
			if (error.code === 'auth/popup-closed-by-user') return

			handleError(error)
			setIsLoading(false)
		}
	}, [setIsLoading])

	return (
		<button className={styles.root} onClick={logIn} aria-busy={isLoading}>
			{isLoading ? (
				<Spinner className={styles.spinner} />
			) : (
				<>
					<Svg className={styles.icon} src={github} />
					Log in
				</>
			)}
		</button>
	)
}

export default NavbarLogIn
