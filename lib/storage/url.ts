const getStorageUrl = (path: string) =>
	`https://storage.googleapis.com/${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}/${path}`

export default getStorageUrl
