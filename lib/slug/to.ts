const toSlug = (name: string) =>
	name.replace(/[^a-z0-9.]+/gi, '-').toLowerCase()

export default toSlug
