import { NextPage } from 'next'

import { BitMarketProps } from './models'
import Header from './Header'

const BitMarket: NextPage<BitMarketProps> = ({ bits }) => <Header />

export default BitMarket
