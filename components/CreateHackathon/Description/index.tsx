import { useCallback } from 'react'
import { NextPage } from 'next'
import { useRecoilState } from 'recoil'

import createHackathonState from 'state/create'
import CreateHackathon from '..'
import Editor from 'components/Editor'

import styles from './index.module.scss'

const CreateHackathonDescription: NextPage = () => {
	const [{ description }, setState] = useRecoilState(createHackathonState)

	const setDescription = useCallback(
		(description: string) => {
			setState(state => ({ ...state, description }))
		},
		[setState]
	)

	return (
		<CreateHackathon className={styles.root}>
			<Editor
				placeholder="Description"
				autoFocus
				value={description}
				setValue={setDescription}
			/>
		</CreateHackathon>
	)
}

export default CreateHackathonDescription
