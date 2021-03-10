import Hackathon from '.'

export default interface HackathonRawData extends Omit<Hackathon, 'time'> {
	time: HackathonRawTime
}

export interface HackathonRawTime {
	start: FirebaseFirestore.Timestamp
	end: FirebaseFirestore.Timestamp
	range: number
}
