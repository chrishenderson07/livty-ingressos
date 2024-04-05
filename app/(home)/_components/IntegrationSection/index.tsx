import Section from '../Section'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

import Element from '../../../../public/image/element.webp'
import Image from 'next/image'

interface IntegrationSectionProps {
	url: string
}

const IntegrationSection = ({ url }: IntegrationSectionProps) => {
	return (
		<Section className="bg-white bg-maquininha">
			<div className=" container mx-auto flex justify-end ">
				<div className="md:w-1/3 flex flex-col gap-4 items-end text-right">
					<h2 className="text-3xl font-semibold text-[#1C1C20] leading-tight">
						Integração de Vendas com o Bar do seu Evento
					</h2>
					<p className="text-lg text-[#5F5F5F]">
						Obtenha em tempo real todas as vendas de ingressos e faturamento de
						bar do seu evento diretamenta pela plataforma da Livty!
					</p>
					<Button className="ghost-button hover:bg-[#C02A63]">
						<Link href={url}>Saiba mais aqui!</Link>
					</Button>
					<Image
						src={Element}
						alt="Element"
						className="mt-7"
					/>
				</div>
			</div>
		</Section>
	)
}

export default IntegrationSection
