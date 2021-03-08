import useProgress from 'hooks/useProgress'
import useCurrentUser from 'hooks/useCurrentUser'

const Config = () => {
	useProgress()
	useCurrentUser()

	return null
}

export default Config
