import firebase from 'lib/firebase'

import 'firebase/firestore'

const firestore = firebase.firestore()

const isHackathonIdTaken = async (id: string) =>
	(await firestore.doc(`hackathons/${id}`).get()).exists

export default isHackathonIdTaken
