import Hackathon from 'models/Hackathon'

export interface HackathonRowProps {
	hackathon: Hackathon
}

const HackathonRow = ({ hackathon }: HackathonRowProps) => {
	return <p>{hackathon.name}</p>
}

export default HackathonRow
