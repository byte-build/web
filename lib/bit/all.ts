import Bit from 'models/Bit'
import firebase from 'lib/firebase/admin'

const firestore = firebase.firestore()

const getBits = async () => {
	const { docs } = await firestore.collection('bits').get()

	return docs
		.map(snapshot => ({ id: snapshot.id, ...snapshot.data() } as Bit))
		.sort((a, b) => a.bits - b.bits)
}

export default getBits
