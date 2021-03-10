export default interface HackathonOrder {
	name: string
	index: string
}

export const ORDERS: HackathonOrder[] = [
	{ name: 'Relevance', index: 'hackathons' },
	{ name: 'Most Bits', index: 'hackathons_bits_desc' },
	{ name: 'Least Bits', index: 'hackathons_bits_asc' },
	{ name: 'Most Participants', index: 'hackathons_participants_desc' },
	{ name: 'Least Participants', index: 'hackathons_participants_asc' },
	{ name: 'Soonest', index: 'hackathons_time_start_asc' }
]
