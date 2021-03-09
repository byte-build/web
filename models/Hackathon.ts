export default interface Hackathon {
	id: string
	name: string
	subtitle: string
	bits: number
	participants: number
	tags: string[]
	time: HackathonTime
}

export interface HackathonTime {
	start: Date
	end: Date
}
