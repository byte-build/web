import { useState } from 'react'

import Dropdown from 'components/Dropdown'
import Trigger, { triggerClassName } from './Trigger'
import Content from './Content'

const OrderHackathons = () => {
	const [isShowing, setIsShowing] = useState(false)

	return (
		<Dropdown
			triggerClassName={triggerClassName}
			trigger={<Trigger />}
			isShowing={isShowing}
			setIsShowing={setIsShowing}
		>
			<Content />
		</Dropdown>
	)
}

export default OrderHackathons
