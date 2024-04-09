import { FaRegCircleCheck } from 'react-icons/fa6'
import Section from '../Section'
import FadeInListItems from '@/app/_animations/FadeInListItems'

const FeaturesSections = () => {
	const featuresContent = [
		{
			title: 'Link Comissários',
		},
		{
			title: 'Cupom de Desconto',
		},
		{
			title: 'Link Trackeado',
		},
		{
			title: 'Gestão de Lotes',
		},
		{
			title: 'Gestão de Comissários',
		},
		{
			title: 'Relatórios',
		},
		{
			title: 'Carrinhos Abandonados',
		},
	]
	return (
		<Section className="bg-white">
			<div className="">
				<FadeInListItems
					direction="top"
					className="container mx-auto flex justify-center gap-10 flex-wrap">
					{featuresContent.map((feature, index) => (
						<li
							key={index}
							className="list-style">
							<FaRegCircleCheck
								size={32}
								color="#C02A63"
							/>
							<h4 className="text-[#1D1D21] text-xl font-medium">
								{feature.title}
							</h4>
						</li>
					))}
				</FadeInListItems>
			</div>
		</Section>
	)
}

export default FeaturesSections
