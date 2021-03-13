import Link from './Link'

import styles from './index.module.scss'

export interface ManageHackathonPagesProps {
	base: string
}

const ManageHackathonPages = ({ base }: ManageHackathonPagesProps) => (
	<aside className={styles.root}>
		<Link id="general" href={base} name="General" />
		<Link id="organizers" href={`${base}/organizers`} name="Organizers" />
		<Link id="teams" href={`${base}/teams`} name="Teams" />
	</aside>
)

export default ManageHackathonPages
