import { useState, useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import Router from 'next/router'

import logIn from 'lib/auth/logIn'
import createHackathon from 'lib/hackathon/create'
import handleError from 'lib/error/handle'
import userState from 'state/user'
import createHackathonState from 'state/create'
import Spinner from 'components/Spinner'

import styles from './index.module.scss'

const CreateHackathonHeader = () => {
	const user = useRecoilValue(userState)
	const state = useRecoilValue(createHackathonState)

	const [isLoading, setIsLoading] = useState(false)

	const save = useCallback(async () => {
		try {
			setIsLoading(true)

			const currentUser = user ?? (await logIn())
			if (!currentUser) return setIsLoading(false)

			await createHackathon(state, currentUser)

			Router.push(`/${state.id}/edit/organizers`)
		} catch (error) {
			setIsLoading(false)
			handleError(error)
		}
	}, [user, state, setIsLoading])

	return (
		<header className={styles.root}>
			<h1 className={styles.title}>Create Hackathon</h1>
			<button className={styles.save} onClick={save} aria-busy={isLoading}>
				{isLoading ? <Spinner className={styles.spinner} /> : 'Save'}
			</button>
		</header>
	)
}

export default CreateHackathonHeader
