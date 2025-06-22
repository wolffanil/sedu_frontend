import Image from 'next/image'
import Link from 'next/link'

import Button from '@/shared/components/ui/Button'
import { PUBLIC_URL } from '@/shared/config/url.config'

function AboutUs() {
	return (
		<section className='relative mt-[150px] flex w-full items-start justify-between max-sm:mt-[25px]'>
			<Image
				src='/images/sheet.png'
				alt='sheet'
				className='absolute left-[-344px] top-[-106px] max-sm:hidden'
				width={689}
				height={977}
			/>
			<div className='mt-[98px] flex w-[533px] flex-col items-center max-sm:mt-[57px] max-sm:w-[221px]'>
				<h2 className='title'>О НАС</h2>
				<p className='mt-[55px] text-start font-cormorant_regular text-[40px] text-black max-sm:mt-[14px] max-sm:text-[21px] max-sm:leading-tight'>
					Sedu уверен в красоте и уникальности каждого человека,
					поэтому мы стремимся подчеркнуть индивидуальность наших
					клиентов. <br />
					Команда Sedu предлагает высококачественные услуги от опытных
					специалистов.
				</p>
				<Link
					href={PUBLIC_URL.aboutUs()}
					className='z-2 relative inline-block'
				>
					<Button className='mx-auto mt-[67px] max-sm:mt-[16px] max-sm:h-[35px] max-sm:min-w-[129px]'>
						Подробнее
					</Button>
				</Link>
			</div>
			<div className='grid w-[741px] grid-cols-2 gap-[15px] max-sm:w-[129px] max-sm:grid-cols-1 max-sm:gap-y-[8px]'>
				<div className='h-[461px] overflow-hidden rounded-[25px] max-sm:h-[123px] max-sm:rounded-[15px]'>
					<Image
						src='/images/aboutUs/first.webp'
						alt='photo'
						width={369}
						height={461}
						priority
						className='aboutus__image max-sm:h-[123px] max-sm:w-[128px]'
					/>
				</div>
				<div className='h-[541px] overflow-hidden rounded-[25px] max-sm:h-[179px] max-sm:rounded-[15px]'>
					<Image
						src='/images/aboutUs/second.webp'
						alt='photo'
						width={357}
						priority
						height={541}
						className='aboutus__image max-sm:h-[179px] max-sm:w-[129px]'
					/>
				</div>
				<div className='mt-[-80px] h-[426px] overflow-hidden rounded-[25px] max-sm:mt-0 max-sm:h-[136px] max-sm:rounded-[15px]'>
					<Image
						src='/images/aboutUs/thired.webp'
						alt='photo'
						width={369}
						priority
						height={430}
						className='aboutus__image max-sm:h-[136px] max-sm:w-[129px]'
					/>
				</div>
				<div className='h-[343px] overflow-hidden rounded-[25px] max-sm:hidden'>
					<Image
						src='/images/aboutUs/four.webp'
						alt='photo'
						width={357}
						height={343}
						priority
						className='aboutus__image'
					/>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
