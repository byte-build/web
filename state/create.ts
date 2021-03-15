import { atom } from 'recoil'

import CreateHackathonData from 'models/Hackathon/Create'

const createHackathonState = atom<CreateHackathonData>({
	key: 'create',
	default: {
		id: { value: '', taken: false },
		name: '',
		subtitle: '',
		bits: 0,
		skill: [],
		tags: [],
		time: { start: null, end: null }
	}
})

export default createHackathonState
