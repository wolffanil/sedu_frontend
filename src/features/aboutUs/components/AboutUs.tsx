import Image from 'next/image'

import AboutUsItem from './AboutUsItem'
import { aboutUs } from './aboutUs.constants'

function AboutUs() {
	return (
		<section className='relative mt-[45px] w-full pb-[150px]'>
			<h1 className='text-center font-raleway_regular text-[64px] text-[#1D281D]'>
				О нас
			</h1>
			<div className='mt-[40px] flex flex-col items-start gap-y-[60px]'>
				{aboutUs.map((item, i) => (
					<AboutUsItem item={item} index={i} key={i} />
				))}
			</div>
			<Image
				src='/images/sheet.png'
				alt='sheet'
				width={395}
				height={561}
				className='absolute left-[-285px] top-[-109px] h-[561px] w-[395px]'
				priority
			/>
			<Image
				src='/images/line.png'
				alt='line'
				className='absolute bottom-[-350px] left-[-273px] z-[-1] h-[1504px] min-w-[1922px]'
				width={1900}
				height={1504}
				priority
			/>
		</section>
	)
}

export default AboutUs
