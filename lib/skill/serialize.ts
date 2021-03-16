import { HackathonSkill } from 'models/Hackathon'

const serializeSkill = (skill: HackathonSkill) => {
	switch (skill) {
		case 'beginner':
			return 0
		case 'intermediate':
			return 1
		case 'advanced':
			return 2
	}
}

export default serializeSkill
