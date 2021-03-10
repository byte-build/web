import { atom } from 'recoil'

import Hackathon from 'models/Hackathon'

const hackathonsState = atom<Hackathon[] | null>({
	key: 'hackathons',
	default: null
})

export default hackathonsState
