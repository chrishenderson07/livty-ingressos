import Section from '../Section'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import People from '../../../../public/image/People.webp'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface TestimonialProps {
	url: string
}

const Testimonials = ({ url }: TestimonialProps) => {
	return (
		<Section
			id="feedback"
			className="bg-[#B6145D]">
			<div className="container mx-auto">
				<h2 className="text-4xl font-semibold text-[#fff] text-center">
					Feedbacks de Clientes
				</h2>

				<div className="mt-7 flex flex-col md:flex-row flex-wrap justify-center gap-6 ">
					<Card className="max-w-80  border-none rounded-[8px] text-center">
						<CardHeader>
							<Image
								src={People}
								alt="People"
							/>
						</CardHeader>
						<CardContent>
							<CardTitle className="mt-2 mb-4">
								Davi Lucas Produtor de Evento
							</CardTitle>
							<CardDescription>
								É incrível a forma como é fácil e intuitiva a plataforma Livty,
								com ela consegui aumentar minhas vendas e otimizar todo processo
								dos meus eventos!
							</CardDescription>
						</CardContent>
					</Card>
					<Card className="max-w-80 bg-[rgba(255,255,255,0.08)] border-none rounded-[8px] text-center">
						<CardHeader>
							<Image
								src={People}
								alt="People"
							/>
						</CardHeader>
						<CardContent>
							<CardTitle className="mt-2 mb-4">
								Davi Lucas Produtor de Evento
							</CardTitle>
							<CardDescription>
								É incrível a forma como é fácil e intuitiva a plataforma Livty,
								com ela consegui aumentar minhas vendas e otimizar todo processo
								dos meus eventos!
							</CardDescription>
						</CardContent>
					</Card>
					<Card className="max-w-80  border-none rounded-[8px] text-center">
						<CardHeader>
							<Image
								src={People}
								alt="People"
							/>
						</CardHeader>
						<CardContent>
							<CardTitle className="mt-2 mb-4">
								Davi Lucas Produtor de Evento
							</CardTitle>
							<CardDescription>
								É incrível a forma como é fácil e intuitiva a plataforma Livty,
								com ela consegui aumentar minhas vendas e otimizar todo processo
								dos meus eventos!
							</CardDescription>
						</CardContent>
					</Card>
				</div>

				<Link
					href={url}
					target="_blank">
					<Button className="bg-[rgba(255,255,255,0.08)] px-3 md:px-8 py-7 mt-10 rounded-[6px] font-bold mx-auto text-sm md:text-base text-[#fff] flex gap-2 hover:bg-[#1C1C20] hover:text-white ">
						Fale com um de nossos representantes
					</Button>
				</Link>
			</div>
		</Section>
	)
}

export default Testimonials
