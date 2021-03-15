import { ReactNode } from 'react'

import ManageHackathon from 'components/ManageHackathon'

export interface CreateHackathonProps {
	className?: string
	children?: ReactNode
}

const CreateHackathon = ({ className, children }: CreateHackathonProps) => (
	<ManageHackathon className={className} base="/new" restricted>
		{children}
	</ManageHackathon>
)

export default CreateHackathon
