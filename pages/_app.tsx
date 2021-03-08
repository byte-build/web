import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import useProgress from 'hooks/useProgress'

import 'components/App/index.scss'
import 'components/Progress/index.scss'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	useProgress()

	return (
		<>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	)
}

export default App
