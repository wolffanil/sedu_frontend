import Link from 'next/link'

import { HEADER_LINKS } from '@/shared/libs/constants/header.constants'

import AuthButton from './AuthButton'
import BurgerMenu from './BurgerMenu'
import Logo from './Logo'

function Header() {
	return (
		<header className='container relative z-30 flex w-full items-center rounded-[25px] bg-green-bright px-[6.25rem] py-[0.563rem] max-sm:justify-between max-sm:rounded-[15px] max-sm:pl-[14px] max-sm:pr-[22px]'>
			<Logo />
			<ul className='ml-[50px] flex items-center gap-x-[6.25rem] max-sm:hidden'>
				{HEADER_LINKS.map((item, index) => (
					<li className='header__link' key={index}>
						<Link href={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
			<AuthButton />
			<BurgerMenu />
		</header>
	)
}

export default Header
