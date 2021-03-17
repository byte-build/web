import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { Svg } from 'react-optimized-image'

import createHackathonState from 'state/create'

import times from 'images/icons/times.svg'

import styles from './index.module.scss'

export interface CreateHackathonTagProps {
	name: string
}

const CreateHackathonTag = ({ name }: CreateHackathonTagProps) => {
	const setState = useSetRecoilState(createHackathonState)

	const remove = useCallback(() => {
		setState(state => ({
			...state,
			tags: state.tags.filter(_name => _name !== name)
		}))
	}, [name, setState])

	return (
		<button className={styles.root} onClick={remove}>
			{name}
			<Svg className={styles.remove} src={times} />
		</button>
	)
}

export default CreateHackathonTag
