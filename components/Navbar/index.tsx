import HomeLink from 'components/HomeLink'
import Search from './Search'
import Links from './Links'
import Auth from './Auth'

import styles from './index.module.scss'

const Navbar = () => (
	<nav className={styles.root}>
		<HomeLink className={styles.home} />
		<Search />
		<Links />
		<Auth />
	</nav>
)

export default Navbar
