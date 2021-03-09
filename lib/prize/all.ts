import Prize from '../../models/Prize'
import firebase from '../firebase/admin'

const firestore = firebase.firestore()

const getPrizes = async () => {
	const { docs } = await firestore.collection('prizes').get()

	return docs
		.map(snapshot => ({ id: snapshot.id, ...snapshot.data() } as Prize))
		.sort((a, b) => b.bits - a.bits)
}

export default getPrizes
