import User from 'models/User'
import firebase from 'lib/firebase'

import 'firebase/firestore'

const userFromSnapshot = (snapshot: firebase.firestore.DocumentSnapshot) =>
	snapshot.exists ? ({ id: snapshot.id, ...snapshot.data() } as User) : null

export default userFromSnapshot
