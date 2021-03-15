export const NAME_MAX_LENGTH = 100
export const SUBTITLE_MAX_LENGTH = 350

export default interface Hackathon {
	id: string
	name: string
	subtitle: string
	bits: number
	participants: number
	skill: HackathonSkill[]
	tags: string[]
	time: HackathonTime
	admins: Record<string, HackathonAdmin>
}

export type HackathonSkill = 'beginner' | 'intermediate' | 'advanced'

export interface HackathonTime {
	start: Date
	end: Date
	range: number
}

export interface HackathonAdmin {
	image: string | null
	name: string
	role: HackathonAdminRole
}

export type HackathonAdminRole = 'owner' | 'organizer'
