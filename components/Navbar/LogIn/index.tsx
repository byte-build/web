import { useState, useCallback } from 'react'
import { Svg } from 'react-optimized-image'

import _logIn from 'lib/auth/logIn'
import handleError from 'lib/error/handle'
import Spinner from 'components/Spinner'

import github from 'images/icons/github.svg'

import styles from './index.module.scss'

const NavbarLogIn = () => {
	const [isLoading, setIsLoading] = useState(false)

	const logIn = useCallback(async () => {
		try {
			setIsLoading(true)
			if (!(await _logIn())) setIsLoading(false)
		} catch (error) {
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
