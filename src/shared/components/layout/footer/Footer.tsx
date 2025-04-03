import Image from 'next/image'
import Link from 'next/link'

import { details, links, social } from './footer.constants'

function Footer() {
	return (
		<footer className='pt min-h-[311px] w-full bg-green-white pb-[108px] pt-[101px]'>
			<div className='container flex items-start justify-between'>
				<ul className='grid w-[433px] grid-cols-2 flex-wrap items-start gap-y-[45px]'>
					{links.map(link => (
						<li key={link.title}>
							<Link
								href={link.link}
								key={link.title}
								className='cursor-pointer font-cormorant_sc_medium text-[24px] uppercase text-black'
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
				<ul className='flex w-[452px] flex-col items-start gap-y-[51px]'>
					{details.map((detail, i) => (
						<li key={i} className='flex items-start gap-x-[10px]'>
							<Image
								src={detail.icon}
								alt={detail.title}
								width={30}
								height={30}
							/>
							<p className='font-cormorant_sc_medium text-[24px] font-medium text-black'>
								{detail.title}
							</p>
						</li>
					))}
				</ul>
				<div className='flex w-[210px] flex-col items-start gap-y-[32px]'>
					<p className='font-cormorant_sc_medium text-[24px] font-medium uppercase text-black'>
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
