import { atom } from 'recoil'

import HackathonQuery from 'models/Hackathon/Query'

const now = new Date()

const fixed = (days: number) => days * 1000 * 60 * 60 * 24
const advance = (days: number) => now.getTime() + fixed(days)

const queryState = atom<HackathonQuery>({
	key: 'query',
	default: {
		query: '',
		order: '',
		filters: [
			{
				name: 'Skill Level',
				multiple: true,
				expanded: true,
				filters: [
					{
						name: 'Beginner',
						value: 'tags:beginner',
						active: false
					},
					{
						name: 'Intermediate',
						value: 'tags:intermediate',
						active: false
					},
					{
						name: 'Advanced',
						value: 'tags:advanced',
						active: false
					}
				]
			},
			{
				name: 'Starts in',
				multiple: false,
				expanded: true,
				filters: [
					{
						name: 'a day',
						value: `time.start <= ${advance(1)}`,
						active: false
					},
					{
						name: '3 days',
						value: `time.start <= ${advance(3)}`,
						active: false
					},
					{
						name: 'a week',
						value: `time.start <= ${advance(7)}`,
						active: false
					},
					{
						name: 'a month',
						value: `time.start <= ${advance(30)}`,
						active: false
					}
				]
			},
			{
				name: 'Time',
				multiple: true,
				expanded: true,
				filters: [
					{
						name: '1 day',
						value: `time.range <= ${fixed(1)}`,
						active: false
					},
					{
						name: '1 - 3 days',
						value: `time.range:${fixed(1)} TO ${fixed(3)}`,
						active: false
					},
					{
						name: '3 - 7 days',
						value: `time.range:${fixed(3)} TO ${fixed(7)}`,
						active: false
					},
					{
						name: '7+ days',
						value: `time.range >= ${fixed(7)}`,
						active: false
					}
				]
			},
			{
				name: 'Participants',
				multiple: true,
				expanded: true,
				filters: [
					{
						name: '0 - 20',
						value: 'participants <= 20',
						active: false
					},
					{
						name: '20 - 50',
						value: 'participants:20 TO 50',
						active: false
					},
					{
						name: '50 - 100',
						value: 'participants:50 TO 100',
						active: false
					},
					{
						name: '100 - 200',
						value: 'participants:100 TO 200',
						active: false
					},
					{
						name: '200 - 500',
						value: 'participants:200 TO 500',
						active: false
					},
					{
						name: '500 - 1K',
						value: 'participants:500 TO 1000',
						active: false
					},
					{
						name: '1K+',
						value: 'participants >= 1000',
						active: false
					}
				]
			},
			{
				name: 'Bits',
				multiple: true,
				expanded: true,
				filters: [
					{
						name: '100 - 1K',
						value: 'bits:100 TO 1000',
						active: false
					},
					{
						name: '1K - 2K',
						value: 'bits:1000 TO 2000',
						active: false
					},
					{
						name: '2K - 5K',
						value: 'bits:2000 TO 5000',
						active: false
					},
					{
						name: '5K - 8K',
						value: 'bits:5000 TO 8000',
						active: false
					},
					{
						name: '8K - 12K',
						value: 'bits:8000 TO 12000',
						active: false
					},
					{
						name: '12K - 20K',
						value: 'bits:12000 TO 20000',
						active: false
					},
					{
						name: '20K - 50K',
						value: 'bits:20000 TO 50000',
						active: false
					},
					{
						name: '50K - 100K',
						value: 'bits:50000 TO 100000',
						active: false
					},
					{
						name: '100K - 200K',
						value: 'bits:100000 TO 200000',
						active: false
					},
					{
						name: '200K - 500K',
						value: 'bits:200000 TO 500000',
						active: false
					},
					{
						name: '500K - 1M',
						value: 'bits:500000 TO 1000000',
						active: false
					},
					{
						name: '1M+',
						value: 'bits >= 1000000',
						active: false
					}
				]
			}
		]
	}
})

export default queryState
