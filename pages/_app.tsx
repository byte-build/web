import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'

import useProgress from 'hooks/useProgress'
import Navbar from 'components/Navbar'

import 'components/App/index.scss'
import 'components/Progress/index.scss'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	useProgress()

	return (
		<>
			<Head>
				<link
					key="font-preconnect"
					rel="preconnect"
					href="https://fonts.gstatic.com"
				/>
				<link
					key="font"
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
				/>
			</Head>
			<RecoilRoot>
				<Navbar />
				<Component {...pageProps} />
			</RecoilRoot>
			<ToastContainer />
		</>
	)
}

export default App
