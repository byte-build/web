import { useMemo, useCallback } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import build from 'byte-ckeditor'

import UploadAdapterPlugin from 'models/UploadAdapter'

interface EditorModel {
	focus(): void
	getData(): string
}

export interface EditorProps {
	placeholder?: string
	uploadPath: string
	autoFocus?: boolean
	value: string
	setValue(value: string): void
}

const Editor = ({
	placeholder,
	uploadPath,
	autoFocus = false,
	value,
	setValue
}: EditorProps) => {
	const config = useMemo(
		() => ({
			placeholder,
			uploadPath,
			extraPlugins: [UploadAdapterPlugin]
		}),
		[placeholder, uploadPath]
	)

	const onReady = useCallback(
		(editor: EditorModel) => {
			if (autoFocus) editor.focus()
		},
		[autoFocus]
	)

	const onChange = useCallback(
		(_event: unknown, editor: EditorModel) => {
			setValue(editor.getData())
		},
		[setValue]
	)

	return (
		<CKEditor
			editor={build}
			config={config}
			onReady={onReady}
			data={value}
			onChange={onChange}
		/>
	)
}

export default Editor
