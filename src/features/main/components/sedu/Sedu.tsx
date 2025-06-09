import Image from 'next/image'

import womanImg from '../../../../../public/images/woman.webp'

function Sedu() {
	return (
		<section
			className={`mt-[10px] flex h-[878px] w-full items-start justify-between rounded-[25px]`}
		>
			<div className='flex h-full w-[876px] items-center justify-center rounded-bl-[25px] rounded-tl-[25px] bg-green-dark'>
				<div className='mx-auto flex flex-col items-center'>
					<h1 className='text-[40px] font-light text-white'>
						СТУДИЯ КРАСОТЫ
					</h1>
					<Image
						src='/images/sedu.svg'
						unoptimized
						width={720}
						height={212}
						alt='sedu'
					/>
					<p className='mt-[20px] text-[32px] font-light text-green-bright'>
						НАША МИССИЯ - ТВОЯ КРАСОТА!
					</p>
				</div>
			</div>
			<Image
				src={womanImg}
				alt='woman'
				priority
				placeholder='blur'
				height={878}
				width={496}
				className='h-full rounded-br-[25px] rounded-tr-[25px]'
			/>
		</section>
	)
}

export default Sedu
