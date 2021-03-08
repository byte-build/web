import HomeLink from 'components/HomeLink'
import Search from './Search'
import Links from './Links'

import styles from './index.module.scss'

const Navbar = () => (
	<nav className={styles.root}>
		<HomeLink className={styles.home} />
		<Search />
		<Links />
	</nav>
)

export default Navbar
