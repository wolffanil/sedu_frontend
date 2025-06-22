import Image from 'next/image'
import Link from 'next/link'

import { PUBLIC_URL } from '@/shared/config/url.config'

function Logo() {
	return (
		<Link href={PUBLIC_URL.main()}>
			<Image
				src='/images/logo.svg'
				alt='logo'
				unoptimized
				priority
				width={53}
				height={54}
				className='h-[54px] w-[53px] object-cover max-sm:h-[46px] max-sm:w-[48px]'
			/>
		</Link>
	)
}

export default Logo
