import { ChangeEvent, useState, useCallback, useEffect } from 'react'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import Link from 'next/link'
import throttle from 'lodash/throttle'

import CreateHackathonData from 'models/Hackathon/Create'
import toSlug from 'lib/slug/to'
import isHackathonIdTaken from 'lib/hackathon/id/isTaken'
import handleError from 'lib/error/handle'
import createHackathonState from 'state/create'
import Spinner from 'components/Spinner'

import styles from './index.module.scss'

const isTaken = throttle(
	(
		id: string,
		setState: SetterOrUpdater<CreateHackathonData>,
		setIsLoading: SetterOrUpdater<boolean>
	) => {
		let commit = true

		isHackathonIdTaken(id)
			.then(taken => {
				if (!commit) return

				setState(state => ({
					...state,
					id: { ...state.id, taken }
				}))

				setIsLoading(false)
			})
			.catch(error => commit && handleError(error))

		return () => {
			commit = false
			setIsLoading(false)
		}
	},
	1000
)

const CreateHackathonId = () => {
	const [{ id: state }, setState] = useRecoilState(createHackathonState)

	const [isFocused, setIsFocused] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const { value, taken } = state

	const onInput = useCallback((input: HTMLInputElement | null) => {
		input?.focus()
	}, [])

	const onFocus = useCallback(() => {
		setIsFocused(true)
	}, [setIsFocused])

	const onBlur = useCallback(() => {
		setIsFocused(false)
	}, [setIsFocused])

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setState(state => ({
				...state,
				id: { value: toSlug(event.target.value), taken: false }
			}))
		},
		[setState]
	)

	useEffect(() => {
		if (!value) return

		setIsLoading(true)
		return isTaken(value, setState, setIsLoading)
	}, [value, setState, setIsLoading])

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h4 className={styles.title}>Link</h4>
				{value &&
					(isLoading ? (
						<Spinner className={styles.spinner} />
					) : taken ? (
						<Link href={`/${value}`}>
							<a className={styles.taken}>taken</a>
						</Link>
					) : (
						<span className={styles.available}>available</span>
					))}
			</div>
			<div className={styles.value} data-focused={isFocused}>
				<label className={styles.base} htmlFor="create-hackathon-id">
					{process.env.NEXT_PUBLIC_ORIGIN}/
				</label>
				<input
					ref={onInput}
					id="create-hackathon-id"
					className={styles.input}
					placeholder="my-hackathon"
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
				/>
			</div>
		</div>
	)
}

export default CreateHackathonId
