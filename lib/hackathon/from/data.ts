import Hackathon from 'models/Hackathon'
import HackathonData from 'models/Hackathon/Data'

const hackathonFromData = (data: HackathonData): Hackathon => ({
	...data,
	time: {
		start: new Date(data.time.start),
		end: new Date(data.time.end),
		range: data.time.range
	}
})

export default hackathonFromData
