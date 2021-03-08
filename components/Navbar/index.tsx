import HomeLink from 'components/HomeLink'
import Links from './Links'

import styles from './index.module.scss'

const Navbar = () => (
	<nav className={styles.root}>
		<HomeLink />
		<Links />
	</nav>
)

export default Navbar
