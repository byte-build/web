import { editor } from '@ckeditor/ckeditor5-core'
import { nanoid } from 'nanoid'

import firebase from 'lib/firebase'
import getStorageUrl from 'lib/storage/url'

import 'firebase/auth'
import 'firebase/storage'

const ID_LENGTH = 10

const auth = firebase.auth()
const storage = firebase.storage().ref()

interface UploadAdapterLoader {
	file: Promise<File>
	uploaded: number
	uploadTotal: number
}

class UploadAdapter {
	private task?: firebase.storage.UploadTask

	constructor(
		public readonly loader: UploadAdapterLoader,
		private readonly base: string
	) {}

	public readonly upload = async () => {
		const user = auth.currentUser
		if (!user) throw new Error('Not signed in')

		const path = `${this.base}/${nanoid(ID_LENGTH)}`
		const file = await this.loader.file

		this.task = storage.child(path).put(file, {
			contentType: file.type,
			contentDisposition: `inline; filename=${JSON.stringify(file.name)}`,
			cacheControl: 'public, max-age=31536000, s-maxage=31536000',
			customMetadata: { name: file.name, user: user.uid }
		})

		this.task.on('state_changed', ({ bytesTransferred, totalBytes }) => {
			this.loader.uploaded = bytesTransferred
			this.loader.uploadTotal = totalBytes
		})

		await this.task
		return { default: getStorageUrl(path) }
	}

	public readonly abort = () => {
		this.task?.cancel()
	}
}

const UploadAdapterPlugin = (editor: editor.Editor) => {
	const repository = (editor.plugins.get('FileRepository') as unknown) as
		| Record<string, unknown>
		| undefined
	if (!repository) throw new Error('Missing file repository')

	const uploadPath = editor.config.get('uploadPath')
	if (typeof uploadPath !== 'string') throw new Error('Missing upload path')

	repository.createUploadAdapter = (loader: UploadAdapterLoader) =>
		new UploadAdapter(loader, uploadPath)
}

export default UploadAdapterPlugin
