import { ChangeEvent, useCallback } from 'react'
import { useRecoilState } from 'recoil'

import createHackathonState from 'state/create'

import styles from './index.module.scss'

const id = (name: string) => `create-hackathon-${name}`

const CreateHackathonPage = () => {
	const [state, setState] = useRecoilState(createHackathonState)

	const onNameChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setState(state => ({ ...state, name: event.target.value }))
		},
		[setState]
	)

	return (
		<section className={styles.root}>
			<label className={styles.label} htmlFor={id('name')}>
				Name
			</label>
			<input
				className={styles.input}
				id={id('name')}
				value={state.name}
				onChange={onNameChange}
			/>
		</section>
	)
}

export default CreateHackathonPage
