'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { useAuth } from '@/shared/contexts/auth/AuthContext'
import { HEADER_LINKS } from '@/shared/libs/constants/header.constants'
import { cn } from '@/shared/utils/tw-merge'

import AuthButton from './AuthButton'

function BurgerMenu() {
	const [isOpenModal, setIsOpenModal] = useState(false)

	const pathname = usePathname()

	const { isAuth } = useAuth()

	useEffect(() => {
		setIsOpenModal(false)
	}, [pathname])

	const handleCloseModal = useCallback(() => {
		setIsOpenModal(false)
	}, [])

	return (
		<>
			<button
				className='flex w-[30px] flex-col items-center gap-y-[3px] md:hidden'
				onClick={() => setIsOpenModal(o => !o)}
			>
				{isOpenModal ? (
					<>
						<span className='h-[4px] w-full translate-x-[1px] translate-y-1 rotate-45 rounded-[15px] bg-white transition-transform duration-300' />
						<span className='h-[4px] w-full translate-y-[-2px] -rotate-45 rounded-[15px] bg-white transition-transform duration-300' />
					</>
				) : (
					<>
						<span className='h-[4px] w-full rounded-[15px] bg-white transition-transform duration-300' />
						<span className='h-[4px] w-full rounded-[15px] bg-white transition-transform duration-300' />
						<span className='h-[4px] w-full rounded-[15px] bg-white transition-transform duration-300' />
					</>
				)}
			</button>
			<nav
				className={cn(
					'absolute bottom-[-265px] left-0 right-0 z-20 flex min-h-[248px] w-full flex-col items-center rounded-[15px] bg-[#CBDACB] py-[32px] md:hidden',
					{
						hidden: !isOpenModal,
						'bottom-[-300px]': isAuth
					}
				)}
			>
				<ul className='mt-[4px] flex w-full flex-col items-center gap-y-[10px]'>
					{HEADER_LINKS.map((item, index) => (
						<li
							className='header__link min-w-full text-center'
							key={index}
						>
							<Link href={item.link}>{item.title}</Link>
						</li>
					))}
					<li
						className='header__link min-w-full text-center'
						key='outTeam'
						onClick={() => setIsOpenModal(false)}
					>
						<Link href='/#outTeam'>Наша команда</Link>
					</li>
				</ul>
				<AuthButton isModile handleCloseModal={handleCloseModal} />
			</nav>
		</>
	)
}

export default BurgerMenu
