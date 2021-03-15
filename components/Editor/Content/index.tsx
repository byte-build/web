import { CKEditor } from '@ckeditor/ckeditor5-react'
import build from 'byte-ckeditor'
import { useCallback, useMemo } from 'react'

interface EditorModel {
	focus(): void
	getData(): string
}

export interface EditorProps {
	placeholder?: string
	autoFocus?: boolean
	value: string
	setValue(value: string): void
}

const Editor = ({
	placeholder,
	autoFocus = false,
	value,
	setValue
}: EditorProps) => {
	const config = useMemo(() => ({ placeholder }), [placeholder])

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
