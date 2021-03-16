import { ChangeEvent, useState, useCallback } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { Svg } from 'react-optimized-image'

import formatNumber from 'lib/format/number'
import userState from 'state/user'
import createHackathonState from 'state/create'

import bit from 'images/icons/bit.svg'

import styles from './index.module.scss'

const PLACEHOLDER_BITS = 100

const CreateHackathonBits = () => {
	const user = useRecoilValue(userState)
	const [{ bits }, setState] = useRecoilState(createHackathonState)

	const [isEmpty, setIsEmpty] = useState(false)
	const [isFocused, setIsFocused] = useState(false)

	const onChange = useCallback(
		({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
			const bits = value ? Number.parseInt(value) : 0
			if (Number.isNaN(bits)) return

			setState(state => ({ ...state, bits }))
			setIsEmpty(!value)
		},
		[setState, setIsEmpty]
	)

	const onFocus = useCallback(() => {
		setIsFocused(true)
	}, [setIsFocused])

	const onBlur = useCallback(() => {
		setIsFocused(false)
	}, [setIsFocused])

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<label className={styles.title} htmlFor="create-hackathon-bits">
					Bits
				</label>
				<span className={styles.balance}>
					Balance:{' '}
					<span className={styles.balanceValue}>
						{formatNumber(user?.bits ?? 0)}
					</span>
				</span>
			</div>
			<div className={styles.value}>
				<Svg className={styles.bit} src={bit} />
				<input
					id="create-hackathon-bits"
					className={styles.input}
					placeholder={formatNumber(PLACEHOLDER_BITS)}
					value={isFocused ? (isEmpty ? '' : bits) : formatNumber(bits)}
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
				/>
			</div>
		</div>
	)
}

export default CreateHackathonBits
