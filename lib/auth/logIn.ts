import firebase from 'lib/firebase'
import userFromAuth from 'lib/user/from/auth'

import 'firebase/auth'

const provider = new firebase.auth.GithubAuthProvider()
const auth = firebase.auth()

const logIn = async () => {
	try {
		const { user } = await auth.signInWithPopup(provider)
		return userFromAuth(user)
	} catch (error) {
		if (error.code === 'auth/popup-closed-by-user') return null
		throw error
	}
}

export default logIn
