import { NextPage } from 'next'

import { BitMarketProps } from './models'
import Header from './Header'
import Bits from './Bits'

const BitMarket: NextPage<BitMarketProps> = ({ bits }) => (
	<>
		<Header />
		<Bits bits={bits} />
	</>
)

export default BitMarket
