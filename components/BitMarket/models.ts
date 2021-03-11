import { ParsedUrlQuery } from 'querystring'

import Bit from 'models/Bit'

export interface BitMarketQuery extends ParsedUrlQuery {
	bit: string
}

export interface BitMarketProps {
	bits: Bit[]
}
