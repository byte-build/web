import User from 'models/User'
import CreateHackathonData from 'models/Hackathon/Create'
import firebase from 'lib/firebase'

import 'firebase/firestore'

const firestore = firebase.firestore()

const createHackathon = async (data: CreateHackathonData, user: User) => {
	if (!(data.time.start && data.time.end)) throw new Error('Invalid time')

	await firestore.doc(`hackathons/${data.id.value}`).set({
		name: data.name,
		subtitle: data.subtitle,
		bits: data.bits,
		participants: 0,
		skill: data.skill,
		tags: data.tags,
		time: {
			start: data.time.start,
			end: data.time.end,
			range: data.time.end.getTime() - data.time.start.getTime()
		},
		admins: {
			[user.id]: {
				image: user.image,
				name: user.name,
				role: 'owner'
			}
		}
	})
}

export default createHackathon
