import Image from 'next/image'

import womanImg from '../../../../../public/images/woman.webp'

function Sedu() {
	return (
		<section
			className={`mt-[10px] flex h-[878px] w-full items-start justify-between rounded-[25px] max-sm:h-[238px] max-sm:rounded-[15px]`}
		>
			<div className='flex h-full w-[876px] items-center justify-center rounded-bl-[25px] rounded-tl-[25px] bg-green-dark max-sm:w-[229px] max-sm:rounded-bl-[15px] max-sm:rounded-tl-[15px]'>
				<div className='mx-auto flex flex-col items-center'>
					<h1 className='text-[40px] font-light text-white max-sm:text-[16px]'>
						СТУДИЯ КРАСОТЫ
					</h1>
					<Image
						src='/images/sedu.svg'
						unoptimized
						width={720}
						height={212}
						alt='sedu'
						className='h-[212px] w-[720px] max-sm:h-[78px] max-sm:w-[200px] max-sm:object-cover'
					/>
					<p className='mt-[20px] text-[32px] font-light text-green-bright max-sm:text-[13px]'>
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
				className='h-full rounded-br-[25px] rounded-tr-[25px] max-sm:h-[238px] max-sm:w-[129px] max-sm:rounded-br-[15px] max-sm:rounded-tr-[15px]'
			/>
		</section>
	)
}

export default Sedu
