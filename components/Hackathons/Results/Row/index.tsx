import Hackathon from 'models/Hackathon'

export interface HackathonRowProps {
	hackathon: Hackathon
}

const HackathonRow = ({ hackathon }: HackathonRowProps) => {
	return <>{hackathon.name}</>
}

export default HackathonRow
