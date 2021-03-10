export default interface HackathonQuery {
	query: string
	index: string
	filters: HackathonFilterCategory[]
}

export interface HackathonFilterCategory {
	name: string
	multiple: boolean
	expanded: boolean
	filters: HackathonFilter[]
}

export interface HackathonFilter {
	name: string
	value: string
	active: boolean
}
