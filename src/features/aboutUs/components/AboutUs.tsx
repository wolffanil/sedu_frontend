import Image from 'next/image'

import AboutUsItem from './AboutUsItem'
import { aboutUs } from './aboutUs.constants'

function AboutUs() {
	return (
		<section className='relative mt-[45px] w-full pb-[170px] max-sm:mt-[16px] max-sm:pb-[25px]'>
			<h1 className='text-center font-raleway_regular text-[64px] text-[#1D281D] max-sm:text-[24px]'>
				О нас
			</h1>
			<div className='mt-[40px] flex flex-col items-start gap-y-[60px] max-sm:mt-[16px] max-sm:gap-y-[16px]'>
				{aboutUs.map((item, i) => (
					<AboutUsItem item={item} index={i} key={i} />
				))}
			</div>
			<Image
				src='/images/sheet.png'
				alt='sheet'
				width={395}
				height={561}
				className='absolute left-[-285px] top-[-109px] h-[561px] w-[395px] max-sm:hidden'
				priority
			/>
			<Image
				src='/images/line.png'
				alt='line'
				className='absolute bottom-[-330px] left-[-273px] z-[-1] h-[1504px] min-w-[1922px] max-sm:hidden'
				width={1900}
				height={1504}
				priority
			/>
		</section>
	)
}

export default AboutUs
