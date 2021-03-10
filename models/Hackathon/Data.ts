import Hackathon from '.'

export default interface HackathonData extends Omit<Hackathon, 'time'> {
	time: HackathonTimeData
}

export interface HackathonTimeData {
	start: number
	end: number
	range: number
}
