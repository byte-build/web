import { atom } from 'recoil'

import CreateHackathonData from 'models/Hackathon/Create'

const createHackathonState = atom<CreateHackathonData>({
	key: 'create',
	default: {
		header: null,
		icon: null,
		id: { value: '', taken: true },
		name: '',
		subtitle: '',
		skill: [],
		tags: [],
		time: { start: null, end: null }
	}
})

export default createHackathonState
