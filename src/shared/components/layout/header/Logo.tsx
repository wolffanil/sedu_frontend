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
			/>
		</Link>
	)
}

export default Logo
