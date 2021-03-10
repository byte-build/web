import { useState } from 'react'

import Dropdown from 'components/Dropdown'
import Trigger, { triggerClassName } from './Trigger'
import Content, { contentClassName } from './Content'

const OrderHackathons = () => {
	const [isShowing, setIsShowing] = useState(false)

	return (
		<Dropdown
			triggerClassName={triggerClassName}
			contentClassName={contentClassName}
			trigger={<Trigger />}
			isShowing={isShowing}
			setIsShowing={setIsShowing}
		>
			<Content />
		</Dropdown>
	)
}

export default OrderHackathons
