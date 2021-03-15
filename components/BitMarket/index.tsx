import { NextPage } from 'next'

import { BitMarketProps } from './models'
import Header from './Header'
import Bits from './Bits'
import Footer from 'components/Footer'

const BitMarket: NextPage<BitMarketProps> = ({ bits }) => (
	<>
		<Header />
		<Bits bits={bits} />
		<Footer />
	</>
)

export default BitMarket
