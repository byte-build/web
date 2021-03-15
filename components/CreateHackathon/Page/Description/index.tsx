import { ChangeEvent, useCallback } from 'react'
import { useRecoilState } from 'recoil'

import createHackathonState from 'state/create'
import Editor from 'components/Editor'

import styles from './index.module.scss'

const CreateHackathonDescription = () => {
	const [{ description }, setState] = useRecoilState(createHackathonState)

	const onChange = useCallback(
		(event: ChangeEvent<HTMLTextAreaElement>) => {
			setState(state => ({ ...state, description: event.target.value }))
		},
		[setState]
	)

	return <Editor />
}

export default CreateHackathonDescription
