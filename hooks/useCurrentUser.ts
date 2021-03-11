import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import firebase from 'lib/firebase'
import userFromAuth from 'lib/user/from/auth'
import userFromSnapshot from 'lib/user/from/snapshot'
import handleError from 'lib/error/handle'
import userState from 'state/user'

import 'firebase/auth'
import 'firebase/firestore'

const auth = firebase.auth()
const firestore = firebase.firestore()

const useCurrentUser = () => {
	const [user, setUser] = useRecoilState(userState)
	const id = user?.id

	useEffect(() => {
		return auth.onAuthStateChanged(
			user => setUser(userFromAuth(user)),
			handleError
		)
	}, [setUser])

	useEffect(() => {
		if (!id) return

		return firestore.doc(`users/${id}`).onSnapshot(snapshot => {
			const user = userFromSnapshot(snapshot)
			if (user) setUser(user)
		}, handleError)
	}, [id, setUser])
}

export default useCurrentUser
