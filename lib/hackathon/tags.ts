import Hackathon from 'models/Hackathon'

const getTags = (hackathon: Hackathon) => [
	...hackathon.skill,
	...hackathon.tags
]

export default getTags
