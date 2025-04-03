import { lazy } from 'react'

const ConfirmRecordModel = lazy(() => import('./ConfirmRecordModel'))

const CancelBookModal = lazy(() => import('./CancelBookModel'))

export { CancelBookModal, ConfirmRecordModel }
