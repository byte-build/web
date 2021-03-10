import HackathonData from 'models/Hackathon/Data'
import Prize from 'models/Prize'

export interface HomeProps {
	hackathons: HackathonData[]
	prizes: Prize[]
}
