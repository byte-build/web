import { atom } from 'recoil'

import firebase from 'lib/firebase'

import 'firebase/auth'

const userState = atom<firebase.User | null | undefined>({
	key: 'user',
	default: undefined,
	dangerouslyAllowMutability: true
})

export default userState
