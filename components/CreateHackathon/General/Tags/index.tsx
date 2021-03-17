import { FormEvent, ChangeEvent, useState, useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { TAGS_MAX_LENGTH, TAG_MAX_LENGTH } from 'models/Hackathon'
import createHackathonState from 'state/create'
import Tag from './Tag'

import styles from './index.module.scss'

const CreateHackathonTags = () => {
	const [{ tags }, setState] = useRecoilState(createHackathonState)

	const [name, setName] = useState('')

	const onSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()
			if (!name || tags.includes(name)) return

			setState(state => ({
				...state,
				tags: [...state.tags, name]
			}))

			setName('')
		},
		[tags, name, setState, setName]
	)

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setName(
				event.target.value
					.replace(/\s+/g, ' ')
					.slice(0, TAG_MAX_LENGTH)
					.toLowerCase()
			)
		},
		[setName]
	)

	return (
		<div className={styles.root}>
			{tags.map(name => (
				<Tag key={name} name={name} />
			))}
			{tags.length < TAGS_MAX_LENGTH && (
				<form className={styles.form} onSubmit={onSubmit}>
					<input
						className={styles.input}
						placeholder="amazing hackathon"
						value={name}
						onChange={onChange}
					/>
				</form>
			)}
		</div>
	)
}

export default CreateHackathonTags
