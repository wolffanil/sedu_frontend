import {
	Dispatch,
	SetStateAction,
	cloneElement,
	createContext,
	useContext,
	useEffect,
	useState
} from 'react'
import { createPortal } from 'react-dom'

import { cn } from '@/shared/utils/tw-merge'

interface IModalContext {
	openName: string
	close: () => void
	open: Dispatch<SetStateAction<string>>
}

const ModalContext = createContext({} as IModalContext)

const Modal = ({
	handleClose,
	children
}: {
	handleClose?: () => void
	children: React.ReactNode
}) => {
	const [openName, setOpenName] = useState('')

	const close = () => {
		setOpenName('')
		handleClose?.()
		document.body.style.overflowX = 'scroll'
	}
	const open = setOpenName

	return (
		<ModalContext.Provider
			value={{
				openName,
				close,
				open
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

const Open = ({
	children,
	opens: opensWindowName,
	disabled = false,
	className
}: {
	children: React.ReactNode
	opens: string
	disabled?: boolean
	className?: string
}) => {
	const { open } = useContext(ModalContext)

	// return cloneElement(children, { onOpenModal: () => open(opensWindowName) });

	useEffect(() => {
		if (open?.length > 1) {
			document.body.style.overflowX = 'hidden'
		} else {
			document.body.style.overflowX = 'scroll'
		}

		return () => {
			document.body.style.overflowX = 'scroll'
		}
	}, [open])

	return (
		<div
			role='button'
			tabIndex={0}
			onClick={() => {
				if (disabled) return
				open(opensWindowName)
			}}
			className={cn(className, '')}
		>
			{children}
		</div>
	)
}

const Window = ({
	children,
	name
}: {
	children: JSX.Element
	name: string
}) => {
	const { openName, close } = useContext(ModalContext)

	if (name !== openName) return null

	return createPortal(
		<div className='fixed left-0 top-0 z-[1000] h-screen w-full bg-black/50 transition-all duration-500 backdrop:blur-[10px]'>
			<div
				className='fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500'
				onClick={e => e.stopPropagation()}
			>
				{cloneElement(children, { onCloseModal: close })}
			</div>
		</div>,
		document.body
	)
}

Modal.Open = Open
Modal.Window = Window

export default Modal
