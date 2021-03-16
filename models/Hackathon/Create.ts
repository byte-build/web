import { HackathonSkill } from '.'

export default interface CreateHackathonData {
	header: File | null
	icon: File | null
	id: CreateHackathonId
	name: string
	subtitle: string
	description: string
	bits: number
	skill: HackathonSkill[]
	tags: string[]
	time: CreateHackathonTime
}

export interface CreateHackathonId {
	value: string
	taken: boolean
}

export interface CreateHackathonTime {
	start: Date | null
	end: Date | null
}
