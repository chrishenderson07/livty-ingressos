'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import { IoMdArrowForward } from 'react-icons/io'
import { RxDownload } from 'react-icons/rx'
import MenuBar from './_components/MenuBar'

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
		<header className="bg-imagem ">
			<MenuBar />
			<main className="container mx-auto flex h-full ">
				<div className=" flex flex-col justify-center items-start gap-6 w-2/5 ">
					<h3 className="p-4 text-lg uppercase bg-[rgba(255,255,255,0.08)] ">
						#VEMPRALIVTY
					</h3>
					<h1 className="text-5xl font-bold leading-[100%]">
						A plataforma perfeita para o seu evento!
					</h1>
					<p className="text-lg">
						Gestão de eventos facilitada e otimizada pra você produtor, poder
						focar seu tempo no que realmente precisa.
					</p>
					<div className="flex flex-col gap-4">
						<Link href={url}>
							<Button
								className="bg-white px-8 py-7 rounded-[6px] font-bold text-base text-[#1C1C20] flex gap-2 hover:bg-[#1C1C20] hover:text-white "
								onMouseEnter={handleMouseEnter}
								onMouseOut={handleMouseLeave}>
								Fale com um de nossos representantes
								<IoMdArrowForward size={24} />
							</Button>
						</Link>
						<Link href={url}>
							<Button
								variant="outline"
								className="px-8 py-7 rounded-[6px] font-bold text-base flex gap-2 hover:bg-white hover:text-[#1C1C20]"
								onMouseEnter={handleMouseEnter}
								onMouseOut={handleMouseLeave}>
								Conheça nosso site de ingrressos
								<RxDownload size={24} />
							</Button>
						</Link>
					</div>
					<div className="info flex gap-3 mt-12">
						<Image
							src={require('../../public/image/icons/thumbUp.svg')}
							alt="Instagram"
						/>
						<h4 className="text-[#D6D6D6] text-xl font-medium">
							Mais de 50 Labels já passaram pela Livty!
						</h4>
					</div>
				</div>
				<div className="flex flex-col justify-end bg-green-300">
					<Image
						src={require('../../public/image/model1.webp')}
						alt="Modelo Livty Ingressos"
					/>
				</div>
			</main>
		</header>
	)
}

export default Home
