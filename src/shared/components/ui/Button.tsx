import { type ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/shared/utils/tw-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	className?: string
}

function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={cn(
				'flex h-[59px] min-w-[280px] items-center justify-center rounded-[25px] bg-green-dark px-4 font-cormorant_regular text-[25px] text-white',
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
