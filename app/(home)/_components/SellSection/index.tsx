import Image from 'next/image'
import Section from '../Section'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import seguranca from '@/public/image/icons/hft-07.webp'
import vendas from '@/public/image/icons/hft-09.webp'
import gestao from '@/public/image/icons/hft-10.webp'
import validacao from '@/public/image/icons/validacao.webp'
import maquinas from '@/public/image/icons/maquina-bar.webp'
import cashless from '@/public/image/icons/cashless.webp'
import maquinaIngresso from '@/public/image/icons/maquina-ingresso.webp'
import totem from '@/public/image/icons/totem-auto.webp'
import FadeIn from '@/app/_animations/FadeIn'
import FadeInListItems from '@/app/_animations/FadeInListItems'

const SellSection = () => {
	const cardContent = [
		{
			title: 'Segurança',
			description:
				'Utilizamos o melhor da segurança em pagamentos online com autenticação (iToken).',
			icon: seguranca,
		},
		{
			title: 'Vendas Online',
			description:
				'Via site/app ou portal comissário. Receba em nosso pix, evite acertos e inadimplência.',
			icon: vendas,
		},
		{
			title: 'Gestão Financeira',
			description:
				'Gerencie suas vendas de forma eficiente e tome decisões financeiras estratégicas.',
			icon: gestao,
		},
		{
			title: 'Validação',
			description:
				'Valide a autenticidade dos ingressos com rapidez e segurança.',
			icon: validacao,
		},
		{
			title: 'Máquinas Bar',
			description:
				'Aumente as vendas de produtos do seu evento com praticidade, segurança e agilidade.',
			icon: maquinas,
		},
		{
			title: 'Cashless',
			description:
				'Simplifique suas vendas com o nosso sistema cashless, oferecendo conveniência e segurança em seus eventos.',
			icon: cashless,
		},
		{
			title: 'Máquinas Ingressos',
			description:
				'Venda ingressos físicos de forma fácil e segura para os seus eventos.',
			icon: maquinaIngresso,
		},
		{
			title: 'Totem Autoatendimento',
			description:
				'Acelere suas vendas, proporcionando praticidade e eficiência aos seus clientes.',
			icon: totem,
		},
	]

	return (
		<Section className="bg-white">
			<div className="container mx-auto">
				<FadeIn direction="top">
					<h2 className="text-3xl font-semibold text-[#1C1C20] leading-tight md:w-1/2 text-center mx-auto">
						Facilitando suas Vendas como Nunca Antes!
					</h2>
				</FadeIn>
				<FadeIn delay={0.5}>
					<p className="md:w-1/2 text-center mx-auto text-[#606060] text-base my-2">
						Venda de forma flexível e simples: pix, cartão, débito ou dinheiro.
						Controle seu evento em tempo real, cadastre comissários e gerencie
						participantes com facilidade - tudo na palma da sua mão!
					</p>
				</FadeIn>
				<FadeInListItems
					direction="top"
					className="gridColumn flex justify-center items-stretch gap-4 flex-wrap mt-10">
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
				</FadeInListItems>
			</div>
		</Section>
	)
}

export default SellSection
