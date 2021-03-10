import { atom } from 'recoil'

import Hackathon from 'models/Hackathon'

export interface HackathonsState {
	value: Hackathon[] | null
	isLoading: boolean
}

const hackathonsState = atom<HackathonsState>({
	key: 'hackathons',
	default: { value: null, isLoading: false }
})

export default hackathonsState
