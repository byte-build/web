import HackathonRawData from 'models/Hackathon/Raw'
import hackathonFromRawData from './from/raw'
import firebase from 'lib/firebase/admin'

const firestore = firebase.firestore()

const getPopularHackathons = async (limit = 3) => {
	const { docs } = await firestore
		.collection('hackathons')
		.orderBy('participants', 'desc')
		.limit(limit)
		.get()

	return docs.map(snapshot =>
		hackathonFromRawData({
			id: snapshot.id,
			...snapshot.data()
		} as HackathonRawData)
	)
}

export default getPopularHackathons
