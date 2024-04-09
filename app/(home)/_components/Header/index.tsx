'use client'

import MenuBar from '../MenuBar'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

import Image from 'next/image'
import Link from 'next/link'

import { IoMdArrowForward } from 'react-icons/io'
import { RxDownload } from 'react-icons/rx'
import { BiDollar } from 'react-icons/bi'
import { Button } from '@/components/ui/button'

import { motion, useScroll } from 'framer-motion'

interface HeaderProps {
	url: string
}

const Header = ({ url }: HeaderProps) => {
	const handleMouseEnter = (event: any) => {
		event.currentTarget.querySelector('svg').style.transition = 'all'
		event.currentTarget.querySelector('svg').style.transitionDuration = '0.3s'
		event.currentTarget.querySelector('svg').style.transform = 'translateX(5px)'
	}

	const handleMouseLeave = (event: any) => {
		event.currentTarget.querySelector('svg').style.transform = 'none'
	}

	const imageModel = require('@/public/image/model1.webp')
	const imageThumb = require('@/public/image/icons/thumbUp.svg')

	const container = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				transition: {
					duration: 3,
				},
				staggerChildren: 0.3,
			},
		},
	}

	const item = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
		},
	}

	const textAnimationContainer = {
		visible: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const textAnimationItem = {
		hidden: { opacity: 0, x: -100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.3,
			},
		},
	}

	return (
		<header className="bg-imagem bg-new-image">
			<MenuBar />

			<motion.ul
				className="textAnimationContainer"
				variants={textAnimationContainer}
				initial="hidden"
				animate="visible">
				<main className="container mx-auto md:flex h-full ">
					<div className="flex flex-col justify-center items-center md:items-start gap-6 md:w-2/5 ">
						<motion.li
							className="textAnimationItem"
							variants={textAnimationItem}>
							<h3 className="p-4 text-lg uppercase bg-[rgba(255,255,255,0.08)] ">
								#VEMPRALIVTY
							</h3>
						</motion.li>
						<motion.li
							className="textAnimationItem"
							variants={textAnimationItem}>
							<h1 className="text-3xl md:text-5xl text-center  md:text-left font-bold leading-[100%]">
								A plataforma perfeita para o seu evento!
							</h1>
						</motion.li>
						<motion.li
							className="textAnimationItem"
							variants={textAnimationItem}>
							<p className="text-lg text-center md:text-left">
								Gestão de eventos facilitada e otimizada pra você produtor,
								poder focar seu tempo no que realmente precisa.
							</p>
						</motion.li>
						<motion.li
							className="textAnimationItem"
							variants={textAnimationItem}>
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
										Conheça nosso site de ingressos
										<RxDownload size={24} />
									</Button>
								</Link>
							</div>
						</motion.li>
						<motion.li
							className="textAnimationItem"
							variants={textAnimationItem}>
							<div className=" flex flex-col items-center md:items-start md:flex-row gap-3 mt-12">
								<motion.div>
									<Image
										src={imageThumb}
										alt="Instagram"
									/>
								</motion.div>
								<h4 className="text-[#D6D6D6] text-xl font-normal text-center md:text-left">
									Mais de 50 Labels já passaram pela Livty!
								</h4>
							</div>
						</motion.li>
					</div>
					<div className="flex flex-col justify-end items-center  relative">
						<Image
							src={imageModel}
							alt="Modelo Livty Ingressos"
							priority
						/>

						<motion.ul
							className="container"
							variants={container}
							initial="hidden"
							animate="visible">
							<motion.li
								className="item"
								variants={item}>
								<Card className="container md:absolute left-4 bottom-4 bg-white rounded-2xl w-60 md:w-72">
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
							</motion.li>

							<motion.li
								className="item"
								variants={item}>
								<Card className="md:absolute  p-0  right-4 top-1/2 bg-white rounded-2xl w-60 md:w-72 mt-4">
									<CardHeader className="py-0">
										<CardTitle className="text-[#1D1D21] text-xl">
											Mais de 20 Mil ingressos vendidos
										</CardTitle>
									</CardHeader>
								</Card>
							</motion.li>
						</motion.ul>
					</div>
				</main>
			</motion.ul>
		</header>
	)
}

export default Header
