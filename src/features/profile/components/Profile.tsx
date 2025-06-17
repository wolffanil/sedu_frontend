import localFont from 'next/font/local'

import { cn } from '@/shared/utils/tw-merge'

import ProfileActions from './ProfileActions'
import ProfileBonus from './ProfileBonus'
import ProfileEdit from './ProfileEdit'

const CormorantInfantRegular = localFont({
	src: '../../../../public/fonts/cormorant-infant/CormorantInfant-Regular.ttf',
	variable: '--font-cormorant-infant_regular'
})

const CormorantScSemibold = localFont({
	src: '../../../../public/fonts/cormorant-sc/CormorantSC-SemiBold.ttf',
	variable: '--font-cormorant-sc_semibold'
})

function Profile() {
	return (
		<section
			className={cn(
				`mb-[150px] mt-[50px] w-full ${CormorantInfantRegular.variable} ${CormorantScSemibold.variable}`
			)}
		>
			<ProfileEdit />
			<ProfileBonus />
			<ProfileActions />
		</section>
	)
}

export default Profile
