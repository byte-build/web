import firebase from 'lib/firebase'

import 'firebase/functions'

const functions = firebase.functions()
const buyBits = functions.httpsCallable('buyBits')

const getBitClientSecret = async (id: string) =>
	(await buyBits(id)).data as string

export default getBitClientSecret
