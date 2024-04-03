'use client'
import { Button } from '@/components/ui/button'
import MenuBar from './_components/MenuBar'
import PartnersBar from './_components/PartnersBar'
import Gestao from './_components/Gestao'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

import Image from 'next/image'
import Link from 'next/link'

import { IoMdArrowForward } from 'react-icons/io'
import { RxDownload } from 'react-icons/rx'
import { BiDollar } from 'react-icons/bi'
import IntegrationSection from './_components/IntegrationSection'
import Testimonials from './_components/Testimonials'

const Home = () => {
	const handleMouseEnter = (event: any) => {
		event.currentTarget.querySelector('svg').style.transition = 'all'
		event.currentTarget.querySelector('svg').style.transitionDuration = '0.3s'
		event.currentTarget.querySelector('svg').style.transform = 'translateX(5px)'
	}

	const handleMouseLeave = (event: any) => {
		event.currentTarget.querySelector('svg').style.transform = 'none'
	}

	const url =
		'https://api.whatsapp.com/send?phone=551640423781&text=Ol%C3%A1%20Livty%20Ingressos,%20eu%20vim%20do%20seu%20site%20e%20gostaria%20de%20falar%20com%20um%20representante!'

	return (
		<>
			<header className="bg-imagem ">
				<MenuBar />
				<main className="container mx-auto md:flex h-full ">
					<div className="flex flex-col justify-center items-center md:items-start gap-6 md:w-2/5 ">
						<h3 className="p-4 text-lg uppercase bg-[rgba(255,255,255,0.08)] ">
							#VEMPRALIVTY
						</h3>
						<h1 className="text-3xl md:text-5xl text-center  md:text-left font-bold leading-[100%]">
							A plataforma perfeita para o seu evento!
						</h1>
						<p className="text-lg text-center md:text-left">
							Gestão de eventos facilitada e otimizada pra você produtor, poder
							focar seu tempo no que realmente precisa.
						</p>
						<div className="flex flex-col items-center md:items-start gap-4">
							<Link href={url}>
								<Button
									className="bg-white px-3 md:px-8 py-7 rounded-[6px] font-bold mx-auto text-sm md:text-base text-[#1C1C20] flex gap-2 hover:bg-[#1C1C20] hover:text-white "
									onMouseEnter={handleMouseEnter}
									onMouseOut={handleMouseLeave}>
									Fale com um de nossos representantes
									<IoMdArrowForward size={24} />
								</Button>
							</Link>
							<Link href={url}>
								<Button
									variant="outline"
									className="px-3 md:px-8 py-7 rounded-[6px] font-bold text-sm  md:text-base flex gap-2 hover:bg-white hover:text-[#1C1C20]"
									onMouseEnter={handleMouseEnter}
									onMouseOut={handleMouseLeave}>
									Conheça nosso site de ingrressos
									<RxDownload size={24} />
								</Button>
							</Link>
						</div>
						<div className=" flex flex-col items-center md:items-start md:flex-row gap-3 mt-12">
							<Image
								src={require('../../public/image/icons/thumbUp.svg')}
								alt="Instagram"
							/>
							<h4 className="text-[#D6D6D6] text-xl font-normal text-center md:text-left">
								Mais de 50 Labels já passaram pela Livty!
							</h4>
						</div>
					</div>
					<div className="flex flex-col justify-end relative">
						<Image
							src={require('../../public/image/model1.webp')}
							alt="Modelo Livty Ingressos"
						/>

						<Card className="lg:absolute left-4 bottom-4 bg-white rounded-2xl w-60 md:w-72">
							<CardHeader className="space-y-3">
								<BiDollar
									size={32}
									className="p-1 bg-[#C02A63] rounded-[8px]"
								/>
								<CardTitle className="text-[#1D1D21] text-lg md:text-xl">
									Fature mais no seu evento com a Livty
								</CardTitle>
							</CardHeader>
						</Card>
						<Card className="lg:absolute  p-0  right-4 top-1/2 bg-white rounded-2xl w-60 md:w-72 mt-4">
							<CardHeader className="py-0">
								<CardTitle className="text-[#1D1D21] text-xl">
									Mais de 20 Mil ingressos vendidos
								</CardTitle>
							</CardHeader>
						</Card>
					</div>
				</main>
			</header>
			<PartnersBar />
			<Gestao />
			<IntegrationSection />
			<Testimonials />
		</>
	)
}

export default Home
