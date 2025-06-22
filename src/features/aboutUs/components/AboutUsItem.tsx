interface AboutUsItemProps {
	item: { title: string; desc: string }
	index: number
}

function AboutUsItem({ item, index }: AboutUsItemProps) {
	return (
		<li className='flex w-full items-center gap-x-[25px] rounded-[25px] bg-white pb-[15px] pl-[25px] pr-[12px] pt-[10px] max-sm:gap-x-[8px] max-sm:rounded-[15px] max-sm:p-[8px]'>
			<div className='flex h-[145px] min-w-[162px] items-center justify-center rounded-[25px] border border-black bg-white max-sm:h-[55px] max-sm:min-w-[62px] max-sm:rounded-[15px]'>
				<p className='mt-[-25px] font-raleway_regular text-[128px] text-green-white max-sm:mt-[-10px] max-sm:text-[48px]'>
					{index + 1}
				</p>
			</div>
			<div className='flex flex-col items-start'>
				<p className='font-cormorant_regular text-[56px] text-black max-sm:text-[20px] max-sm:leading-tight'>
					{item.title}
				</p>
				<p className='mt-[-10px] break-words font-cormorant_regular text-[40px] leading-[45px] text-black max-sm:mt-[6px] max-sm:text-[16px] max-sm:leading-tight'>
					{item.desc}
				</p>
			</div>
		</li>
	)
}

export default AboutUsItem
