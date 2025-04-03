import Image from 'next/image'
import { type PropsWithChildren } from 'react'

import { cn } from '@/shared/utils/tw-merge'

interface ModelWrapperProps {
	onCloseModal?: () => void
	className?: string
	classNameClose?: string
}

function ModelWrapper({
	classNameClose,
	className,
	onCloseModal,
	children
}: PropsWithChildren<ModelWrapperProps>) {
	return (
		<div
			className={cn(
				'flex max-h-[950px] min-h-[551px] w-[600px] flex-col items-center rounded-[25px] bg-white px-[32px] pb-[60px] pt-[30px] max-2xl:w-[500px] max-2xl:pt-[15px]',
				className
			)}
		>
			<button
				className={cn('ml-auto', classNameClose)}
				onClick={() => onCloseModal?.()}
			>
				<Image
					src='/images/close-model.svg'
					alt='close-model'
					width={18}
					height={18}
					unoptimized
				/>
			</button>
			{children}
		</div>
	)
}

export default ModelWrapper
