import { ChangeEvent, useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { NAME_MAX_LENGTH } from 'models/Hackathon'
import createHackathonState from 'state/create'

import styles from './index.module.scss'

const CreateHackathonName = () => {
	const [{ name }, setState] = useRecoilState(createHackathonState)

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setState(state => ({
				...state,
				name: event.target.value.slice(0, NAME_MAX_LENGTH)
			}))
		},
		[setState]
	)

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<label className={styles.title} htmlFor="create-hackathon-name">
					Name
				</label>
				<span className={styles.count}>{NAME_MAX_LENGTH - name.length}</span>
			</div>
			<input
				id="create-hackathon-name"
				className={styles.value}
				placeholder="My Hackathon"
				value={name}
				onChange={onChange}
			/>
		</div>
	)
}

export default CreateHackathonName
