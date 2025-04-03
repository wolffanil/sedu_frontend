'use client'

import { cn } from '@/shared/utils/tw-merge'

interface TabItemProps {
	handleClick: () => void
	isActive: boolean
	title: string
	className?: string
}

function TabItem({ isActive, handleClick, title, className }: TabItemProps) {
	return (
		<li>
			<button
				className={cn(
					'flex w-[295px] items-center justify-center rounded-[25px] bg-[#f3f3f3] py-[13px] font-cormorant_regular text-[28px] text-black',
					{
						'border border-black': isActive
					},
					className
				)}
				onClick={() => handleClick?.()}
			>
				{title}
			</button>
		</li>
	)
}

export default TabItem
