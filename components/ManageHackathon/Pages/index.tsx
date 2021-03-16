import Link from './Link'

import styles from './index.module.scss'

export interface ManageHackathonPagesProps {
	base: string
	restricted?: boolean
}

const ManageHackathonPages = ({
	base,
	restricted = false
}: ManageHackathonPagesProps) => (
	<aside className={styles.root}>
		<Link id="general" href={base} name="General" />
		<Link
			id="description"
			href={`${base}/description`}
			name="Description"
			disabled={restricted}
		/>
		<Link
			id="organizers"
			href={`${base}/organizers`}
			name="Organizers"
			disabled={restricted}
		/>
		<Link
			id="teams"
			href={`${base}/teams`}
			name="Teams"
			disabled={restricted}
		/>
	</aside>
)

export default ManageHackathonPages
