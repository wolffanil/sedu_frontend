import Image from 'next/image'

import TeamSlider from './TeamSlider'

function OurTeam() {
	return (
		<section className='relative mt-[281px]' id='outTeam'>
			<Image
				src='/images/line.png'
				alt='line'
				width={1920}
				height={1400}
				className='absolute left-[-274px] top-[-600px] z-[-2] min-w-[1920px]'
			/>
			<h2 className='title mb-[55px] uppercase'>Наша команда</h2>
			<TeamSlider />
		</section>
	)
}

export default OurTeam
