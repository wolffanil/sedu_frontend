import Image from 'next/image'
import Link from 'next/link'

import { details, links, social } from './footer.constants'

function Footer() {
	return (
		<footer className='min-h-[311px] w-full bg-green-white pb-[108px] pt-[101px] max-sm:pb-[22px] max-sm:pt-[33px]'>
			<div className='container flex flex-row items-start justify-between max-sm:flex-col max-sm:items-center'>
				<ul className='grid w-[433px] grid-cols-2 flex-wrap items-start gap-y-[45px] max-sm:w-[140px] max-sm:grid-cols-1 max-sm:items-center max-sm:gap-y-[8px]'>
					{links.map(link => (
						<li key={link.title} className='max-sm:text-center'>
							<Link
								href={link.link}
								key={link.title}
								className='cursor-pointer font-cormorant_sc_medium text-[24px] uppercase text-black max-sm:text-center max-sm:text-[16px]'
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
				<ul className='flex w-[452px] flex-col items-start gap-y-[51px] max-sm:mt-[25px] max-sm:w-full max-sm:items-center max-sm:gap-y-[8px]'>
					{details.map((detail, i) => (
						<li
							key={i}
							className='flex items-start gap-x-[10px] max-sm:items-center max-sm:gap-x-[4px]'
						>
							<Image
								src={detail.icon}
								alt={detail.title}
								width={30}
								height={30}
								className='max-sm:h-[12px] max-sm:w-[12px]'
							/>
							<p className='font-cormorant_sc_medium text-[24px] font-medium text-black max-sm:text-[16px]'>
								{detail.title}
							</p>
						</li>
					))}
				</ul>
				<div className='flex w-[210px] flex-col items-start gap-y-[32px] max-sm:mt-[25px] max-sm:w-[140px] max-sm:items-center max-sm:gap-y-[8px]'>
					<p className='font-cormorant_sc_medium text-[24px] font-medium uppercase text-black max-sm:text-[16px]'>
						наши соц. сети
					</p>
					<ul className='flex w-full items-start justify-between'>
						{social.map((s, i) => (
							<li key={i}>
								<Link href={s.href} target='_blank'>
									<Image
										src={s.icon}
										alt='media'
										width={45}
										height={45}
										className='max-sm:h-[30px] max-sm:w-[30px]'
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
