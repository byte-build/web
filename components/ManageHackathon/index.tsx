import { ReactNode } from 'react'
import cx from 'classnames'

import Pages from './Pages'

import styles from './index.module.scss'

export interface ManageHackathonProps {
	className?: string
	base: string
	restricted?: boolean
	children?: ReactNode
}

const ManageHackathon = ({
	className,
	base,
	restricted,
	children
}: ManageHackathonProps) => (
	<div className={styles.root}>
		<Pages base={base} restricted={restricted} />
		<main className={cx(styles.main, className)}>{children}</main>
	</div>
)

export default ManageHackathon
