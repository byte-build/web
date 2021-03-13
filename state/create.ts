import { atom } from 'recoil'

export interface CreateHackathonState {
	id: string
	name: string
	subtitle: string
}

const createHackathonState = atom<CreateHackathonState>({
	key: 'create',
	default: {
		id: '',
		name: '',
		subtitle: ''
	}
})

export default createHackathonState
