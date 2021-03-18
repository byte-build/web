import { useEffect } from 'react'

import useProgress from 'hooks/useProgress'
import useCurrentUser from 'hooks/useCurrentUser'

const Config = () => {
	useProgress()
	useCurrentUser()

	useEffect(() => {
		console.log(
			'%cIf you were told to paste something here, you are being scammed!',
			'font-size: 30px; font-weight: 700; color: red;'
		)
	}, [])

	return null
}

export default Config
