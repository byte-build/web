import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import firebase from 'lib/firebase'
import handleError from 'lib/error/handle'
import userState from 'state/user'

import 'firebase/auth'

const auth = firebase.auth()

const useCurrentUser = () => {
	const setUser = useSetRecoilState(userState)

	useEffect(() => auth.onAuthStateChanged(setUser, handleError), [setUser])
}

export default useCurrentUser
