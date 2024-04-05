import Image from 'next/image'
import Section from '../Section'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const SellSection = () => {
	const cardContent = [
		{
			title: 'Segurança',
			description:
				'Utilizamos o melhor da segurança em pagamentos online com autenticação (iToken).',
			icon: require('@/public/image/icons/hft-07.webp'),
		},
		{
			title: 'Vendas Online',
			description:
				'Via site/app ou portal comissário. Receba em nosso pix, evite acertos e inadimplência.',
			icon: require('@/public/image/icons/hft-09.webp'),
		},
		{
			title: 'Gestão Financeira',
			description:
				'Gerencie suas vendas de forma eficiente e tome decisões financeiras estratégicas.',
			icon: require('@/public/image/icons/hft-10.webp'),
		},
		{
			title: 'Validação',
			description:
				'Valide a autenticidade dos ingressos com rapidez e segurança.',
			icon: require('@/public/image/icons/validacao.webp'),
		},
		{
			title: 'Máquinas Bar',
			description:
				'Aumente as vendas de produtos do seu evento com praticidade, segurança e agilidade.',
			icon: require('@/public/image/icons/maquina-bar.webp'),
		},
		{
			title: 'Cashless',
			description:
				'Simplifique suas vendas com o nosso sistema cashless, oferecendo conveniência e segurança em seus eventos.',
			icon: require('@/public/image/icons/cashless.webp'),
		},
		{
			title: 'Máquinas Ingressos',
			description:
				'Venda ingressos físicos de forma fácil e segura para os seus eventos.',
			icon: require('@/public/image/icons/maquina-ingresso.webp'),
		},
		{
			title: 'Totem Autoatendimento',
			description:
				'Acelere suas vendas, proporcionando praticidade e eficiência aos seus clientes.',
			icon: require('@/public/image/icons/totem-auto.webp'),
		},
	]

	return (
		<Section className="bg-white">
			<div className="container mx-auto">
				<h2 className="text-3xl font-semibold text-[#1C1C20] leading-tight md:w-1/2 text-center mx-auto">
					Integração de Vendas com o Bar do seu Evento
				</h2>
				<p className="md:w-1/2 text-center mx-auto text-[#606060] text-base my-2">
					Venda de forma flexível e simples: pix, cartão, débito ou dinheiro.
					Controle seu evento em tempo real, cadastre comissários e gerencie
					participantes com facilidade - tudo na palma da sua mão!
				</p>

				<div className="gridColumn flex justify-center gap-4 flex-wrap mt-10">
					{cardContent.map((content, index) => (
						<Card
							key={index}
							className="w-60 text-center border-[#C02A63] rounded-[10px]">
							<CardHeader>
								<Image
									src={content.icon}
									alt="Element"
									className="mx-auto"
									width={50}
								/>
								<CardTitle className="text-[#151515] text-xl leading-none">
									{content.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="px-8">
								<CardDescription className="text-[#353434] font-medium -mt-2">
									{content.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</Section>
	)
}

export default SellSection
