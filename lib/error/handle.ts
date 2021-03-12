import { toast } from 'react-toastify'

type UnknownError = Record<string, unknown> | null | undefined
type ValidError = { message: string }

const handleError = (error: unknown) => {
	toast.dark(
		typeof (error as UnknownError)?.message === 'string'
			? (error as ValidError).message
			: 'An unknown error occurred'
	)
	console.error(error)
}

export default handleError
