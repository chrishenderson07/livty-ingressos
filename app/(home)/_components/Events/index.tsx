import { Button } from '@/components/ui/button'
import Section from '../Section'

import { FaCheck } from 'react-icons/fa'
import { IoMdArrowForward } from 'react-icons/io'
import Image from 'next/image'
import { Link } from 'lucide-react'

interface EventsProps {
	url: string
}

const Events = ({ url }: EventsProps) => {
	const handleMouseEnter = (event: any) => {
		event.currentTarget.querySelector('svg').style.transition = 'all'
		event.currentTarget.querySelector('svg').style.transitionDuration = '0.3s'
		event.currentTarget.querySelector('svg').style.transform = 'translateX(5px)'
	}

	const handleMouseLeave = (event: any) => {
		event.currentTarget.querySelector('svg').style.transform = 'none'
	}

	return (
		<Section className="bg-[#EB0171] pt-0 pb-0">
			<div className="flex">
				<div className="pl-8 w-2/5 max-w-3/5 py-12 relative">
					<h4 className="text-2xl font-semibold">Seja ele:</h4>
					<ul className="space-y-4 mt-4">
						<li className="list-style">
							<FaCheck
								size={30}
								color="#6B0033"
							/>
							Teste
						</li>
						<li className="list-style">
							<FaCheck
								size={30}
								color="#6B0033"
							/>
							Festa Univerrsitária
						</li>
						<li className="list-style">
							<FaCheck
								size={30}
								color="#6B0033"
							/>
							Rodeio
						</li>
						<li className="list-style">
							<FaCheck
								size={30}
								color="#6B0033"
							/>
							Palestras
						</li>
						<li className="list-style">
							<FaCheck
								size={30}
								color="#6B0033"
							/>
							Conferências
						</li>
						<li className="list-style">
							<FaCheck
								size={30}
								color="#6B0033"
							/>
							Formaturas
						</li>
					</ul>

					<Image
						src={require('../../../../public/image/stars.webp')}
						alt="Stars"
						className="absolute -translate-y-1/2 top-1/2 -right-16"
						width={130}
					/>

					<Link
						href={url}
						target="_blank">
						<Button
							className="mt-10 bg-white px-3 md:px-8 py-7 rounded-[6px] font-bold text-sm md:text-base text-[#1C1C20] flex gap-2 hover:bg-[#1C1C20] hover:text-white "
							onMouseEnter={handleMouseEnter}
							onMouseOut={handleMouseLeave}>
							Vem pra Livty <IoMdArrowForward size={24} />
						</Button>
					</Link>
				</div>

				<div className="flex-1 bg-events"></div>
			</div>
		</Section>
	)
}

export default Events
