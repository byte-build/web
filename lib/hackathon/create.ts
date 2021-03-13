import User from 'models/User'
import firebase from 'lib/firebase'
import { CreateHackathonState } from 'state/create'

import 'firebase/firestore'

const firestore = firebase.firestore()

const createHackathon = (state: CreateHackathonState, user: User) =>
	firestore.doc(`hackathons/${state.id}`).set({
		name: state.name,
		subtitle: state.subtitle,
		admins: {
			[user.id]: {
				image: user.image,
				name: user.name,
				role: 'owner'
			}
		}
	})

export default createHackathon
