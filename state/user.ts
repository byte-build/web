import { atom } from 'recoil'

import User from 'models/User'

const userState = atom<User | null | undefined>({
	key: 'user',
	default: undefined
})

export default userState
