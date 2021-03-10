import User from 'models/User'
import firebase from 'lib/firebase'

import 'firebase/auth'

const userFromAuth = (auth: firebase.User | null): User | null => {
	if (!auth?.email) return null

	return {
		id: auth.uid,
		image: auth.photoURL,
		name: auth.displayName ?? 'Anonymous',
		email: auth.email,
		bits: 0
	}
}

export default userFromAuth
