export interface IProfileUploader {
	fieldChange: (files: File[]) => void
	mediaUrl: string
	disabled?: boolean
	isEdit: boolean
}
