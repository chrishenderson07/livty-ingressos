'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'

import netskope from '@/public/image/partners/Netskope.svg'
import toyota from '@/public/image/partners/Toyota.svg'
import airbnb from '@/public/image/partners/Airbnb.svg'
import capitalOne from '@/public/image/partners/CapitalOne.svg'
import spotify from '@/public/image/partners/Spotify.svg'

import { fadeIn } from '@/app/_animations/variants'
const PartnersBar = () => {
	return (
		<section className="py-12 bg-[#EAEAEA]">
			<div className="container mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
				<motion.div
					variants={fadeIn('top', 1)}
					className="fadeIn">
					<div className="space-y-2 flex-2 text-center md:text-left mb-5 md:mb-0">
						<h2 className="text-2xl font-semibold text-[#1C1C20]">
							Livty Partners
						</h2>
						<p className="text-lg text-[#5F5F5F]">
							Conheça alguns de dezenas de parceiras da Livty.
						</p>
					</div>
				</motion.div>
				<div className="flex-3 flex md:flex-row items-center justify-center flex-wrap gap-7">
					<Image
						src={netskope}
						alt="Partner 1"
					/>
					<Image
						src={toyota}
						alt="Partner 1"
					/>
					<Image
						src={airbnb}
						alt="Partner 1"
					/>
					<Image
						src={capitalOne}
						alt="Partner 1"
					/>
					<Image
						src={spotify}
						alt="Partner 1"
					/>
				</div>
			</div>
		</section>
	)
}

export default PartnersBar
