import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import gestao from '@/public/image/gestao.webp'

interface GestaoProps {
	url: string
}

const Gestao = ({ url }: GestaoProps) => {
	return (
		<section
			id="gestao"
			className="py-12 bg-white">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
				<div className="space-y-5 flex-2">
					<h2 className="text-3xl font-semibold text-[#1C1C20]">
						Gestão com facilidade do seu evento!
					</h2>

					<ul className="text-[#5F5F5F] space-y-4 ">
						<li>✅ Segurança para seu público</li>
						<li>✅ Praticidade para sua equipe</li>
						<li>✅ Suporte Eficiente</li>
						<li>✅ As melhores taxas</li>
					</ul>

					<Button
						asChild
						className="text-[#C02A63] text-base font-semibold border-2 py-6 px-8 rounded-[6px] border-[#C02A63] transition-all duration-300 hover:bg-[#C02A63] hover:text-white"
						style={{ marginTop: 32 }}>
						<Link href={url}>Fale com um de nossos representantes</Link>
					</Button>
				</div>

				<div className="flex-3">
					<Image
						src={gestao}
						alt="Gestão"
					/>
				</div>
			</div>
		</section>
	)
}

export default Gestao
