import Link from 'next/link'

import { HEADER_LINKS } from '@/shared/libs/constants/header.constants'

import AuthButton from './AuthButton'
import Logo from './Logo'

function Header() {
	return (
		<header className='container relative flex w-full items-center rounded-[25px] bg-green-bright px-[6.25rem] py-[0.563rem]'>
			<Logo />
			<ul className='ml-[50px] flex items-center gap-x-[6.25rem]'>
				{HEADER_LINKS.map((item, index) => (
					<li className='header__link' key={index}>
						<Link href={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
			<AuthButton />
		</header>
	)
}

export default Header
