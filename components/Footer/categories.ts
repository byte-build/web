import { Category } from './Category'

const categories: Category[] = [
	{
		name: 'Product',
		links: [
			{ name: 'Hackathons', url: '/all' },
			{ name: 'Gift Shop', url: '/shop' },
			{ name: 'Bit Market', url: '/bits' }
		]
	},
	{
		name: 'Company',
		links: [
			{ name: 'About', url: '/about' },
			{ name: 'Team', url: '/team' },
			{ name: 'Privacy', url: '/privacy' }
		]
	},
	{
		name: 'Social',
		links: [
			{ name: 'Twitter', url: 'https://twitter.com' },
			{ name: 'Facebook', url: 'https://www.facebook.com' },
			{ name: 'GitHub', url: 'https://github.com/byte-build' }
		]
	}
]

export default categories
