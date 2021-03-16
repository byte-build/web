import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { Svg } from 'react-optimized-image'

import { HackathonSkill } from 'models/Hackathon'
import serialize from 'lib/skill/serialize'
import createHackathonState from 'state/create'

import check from 'images/icons/check.svg'

import styles from './index.module.scss'

export interface CreateHackathonSkillOptionProps {
	name: HackathonSkill
}

const CreateHackathonSkillOption = ({
	name
}: CreateHackathonSkillOptionProps) => {
	const [state, setState] = useRecoilState(createHackathonState)

	const toggle = useCallback(() => {
		setState(state => ({
			...state,
			skill: state.skill.includes(name)
				? state.skill.filter(_name => _name !== name)
				: [...state.skill, name].sort((a, b) => serialize(a) - serialize(b))
		}))
	}, [name, setState])

	return (
		<button
			className={styles.root}
			onClick={toggle}
			aria-selected={state.skill.includes(name)}
		>
			<span className={styles.check}>
				<Svg className={styles.checkInfo} src={check} />
			</span>
			{name}
		</button>
	)
}

export default CreateHackathonSkillOption
