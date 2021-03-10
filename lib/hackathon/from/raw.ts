import HackathonData from 'models/Hackathon/Data'
import HackathonRawData from 'models/Hackathon/Raw'

const hackathonFromRawData = (data: HackathonRawData): HackathonData => ({
	...data,
	time: {
		start: data.time.start.toMillis(),
		end: data.time.end.toMillis(),
		range: data.time.range
	}
})

export default hackathonFromRawData
