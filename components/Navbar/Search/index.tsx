import { ChangeEvent, useRef, useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { Svg } from 'react-optimized-image'

import queryState from 'state/query'

import search from 'images/search.svg'

import styles from './index.module.scss'

const NavbarSearch = () => {
	const input = useRef<HTMLInputElement | null>(null)

	const router = useRouter()
	const [state, setState] = useRecoilState(queryState)

	const active = router.pathname === '/hackathons'

	const push = useCallback(() => {
		router.push('/hackathons')
	}, [router])

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setState(state => ({ ...state, query: event.target.value }))
		},
		[setState]
	)

	useEffect(() => {
		if (active) input.current?.focus()
	}, [active, input])

	return (
		<div className={styles.root} onClick={active ? undefined : push}>
			<input
				ref={input}
				className={styles.input}
				placeholder="Hackathons"
				value={state.query}
				onChange={active ? onChange : undefined}
				readOnly={!active}
			/>
			<Svg className={styles.icon} src={search} />
		</div>
	)
}

export default NavbarSearch
