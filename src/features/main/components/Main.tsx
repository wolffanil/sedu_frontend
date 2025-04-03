import dynamic from 'next/dynamic'

import AboutUs from './aboutus/AboutUs'
import Sedu from './sedu/Sedu'

const OurTeam = dynamic(() => import('./outTeam/OurTeam'))
const Goods = dynamic(() => import('./goods/Goods'))
const Reviews = dynamic(() => import('./reviews/Reviews'))

function Main() {
	return (
		<>
			<Sedu />
			<AboutUs />
			<OurTeam />
			<Goods />
			<Reviews />
		</>
	)
}

export default Main
