import { useState, useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useDropzone } from 'react-dropzone'
import { Svg } from 'react-optimized-image'
import cx from 'classnames'

import { MAX_IMAGE_SIZE } from 'lib/constants'
import createHackathonState from 'state/create'

import upload from 'images/icons/upload.svg'

import styles from './index.module.scss'

const CreateHackathonImage = () => {
	const [{ header, icon }, setState] = useRecoilState(createHackathonState)

	const [headerUrl, setHeaderUrl] = useState<string | null>(null)
	const [iconUrl, setIconUrl] = useState<string | null>(null)

	const onHeaderDrop = useCallback(
		([header]: File[]) => {
			if (!header) return
			setState(state => ({ ...state, header }))
		},
		[setState]
	)

	const onIconDrop = useCallback(
		([icon]: File[]) => {
			if (!icon) return
			setState(state => ({ ...state, icon }))
		},
		[setState]
	)

	const headerZone = useDropzone({
		accept: ['image/png', 'image/jpeg', 'image/gif'],
		multiple: false,
		maxSize: MAX_IMAGE_SIZE,
		onDrop: onHeaderDrop
	})

	const iconZone = useDropzone({
		accept: ['image/png', 'image/jpeg', 'image/gif'],
		multiple: false,
		maxSize: MAX_IMAGE_SIZE,
		onDrop: onIconDrop
	})

	useEffect(() => {
		if (!header) return

		const url = URL.createObjectURL(header)
		setHeaderUrl(url)

		return () => {
			setHeaderUrl(null)
			URL.revokeObjectURL(url)
		}
	}, [header, setHeaderUrl])

	useEffect(() => {
		if (!icon) return

		const url = URL.createObjectURL(icon)
		setIconUrl(url)

		return () => {
			setIconUrl(null)
			URL.revokeObjectURL(url)
		}
	}, [icon, setIconUrl])

	return (
		<div>
			<div
				className={cx(styles.header, {
					[styles.dragging]: headerZone.isDragActive
				})}
				{...headerZone.getRootProps()}
			>
				<input {...headerZone.getInputProps()} />
				{headerUrl ? (
					<img className={styles.image} src={headerUrl} />
				) : (
					<div className={styles.upload}>
						<Svg className={styles.uploadIcon} src={upload} />
						<span className={styles.uploadInfo}>Click or drag</span>
					</div>
				)}
			</div>
			<div
				className={cx(styles.icon, {
					[styles.dragging]: iconZone.isDragActive
				})}
				{...iconZone.getRootProps()}
			>
				<input {...iconZone.getInputProps()} />
				{iconUrl ? (
					<img className={styles.image} src={iconUrl} />
				) : (
					<div className={styles.upload}>
						<Svg className={styles.uploadIcon} src={upload} />
					</div>
				)}
			</div>
		</div>
	)
}

export default CreateHackathonImage
