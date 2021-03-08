import { Svg } from 'react-optimized-image'

import github from 'images/github.svg'

import styles from './index.module.scss'

const NavbarAuth = () => (
	<button className={styles.root}>
		<Svg className={styles.icon} src={github} />
		Log in
	</button>
)

export default NavbarAuth
