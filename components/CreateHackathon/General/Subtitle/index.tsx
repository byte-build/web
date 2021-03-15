import { ChangeEvent, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import TextArea from 'react-textarea-autosize'

import { SUBTITLE_MAX_LENGTH } from 'models/Hackathon'
import createHackathonState from 'state/create'

import styles from './index.module.scss'

const CreateHackathonSubtitle = () => {
	const [{ subtitle }, setState] = useRecoilState(createHackathonState)

	const onChange = useCallback(
		(event: ChangeEvent<HTMLTextAreaElement>) => {
			setState(state => ({
				...state,
				subtitle: event.target.value.slice(0, SUBTITLE_MAX_LENGTH)
			}))
		},
		[setState]
	)

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<label className={styles.title} htmlFor="create-hackathon-subtitle">
					Subtitle
				</label>
				<span className={styles.count}>
					{SUBTITLE_MAX_LENGTH - subtitle.length}
				</span>
			</div>
			<TextArea
				id="create-hackathon-subtitle"
				className={styles.value}
				minRows={2}
				placeholder="A beginner-friendly hackathon dedicated to introduce underprivileged kids to coding"
				value={subtitle}
				onChange={onChange}
			/>
		</div>
	)
}

export default CreateHackathonSubtitle
