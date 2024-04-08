'use client'

import Section from '../Section'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const PaymentSection = () => {
	const cardContent = [
		{
			title: 'PIX',
			icon: require('@/public/image/icons/pix-branco.webp'),
		},
		{
			title: 'PIX Parcelado',
			icon: require('@/public/image/icons/pix-parcelado.webp'),
		},
		{
			title: 'Cartão de crédito',
			icon: require('@/public/image/icons/cartao-credito2.webp'),
		},
		{
			title: 'Cartão de débito',
			icon: require('@/public/image/icons/cartao-de-debito.webp'),
		},
		{
			title: 'Cashless',
			icon: require('@/public/image/icons/maquininha.webp'),
		},
		{
			title: 'Dinheiro',
			icon: require('@/public/image/icons/dinheiro1.webp'),
		},
	]
	return (
		<Section className="bg-[#B6145D]">
			<div className="container mx-auto">
				<h2 className="text-4xl font-semibold text-[#fff] text-center">
					Formas de Pagamentos
				</h2>
				<p className="text-center text-lg">
					conheça todas as formas de receber pagamentos em seus eventos.
				</p>

				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					navigation
					loop
					modules={[Navigation]}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						640: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
					}}
					className="mt-12">
					{cardContent.map((content, index) => (
						<SwiperSlide
							key={index}
							className="mx-auto ">
							<Card className=" text-center bg-[rgba(255,255,255,0.08)] border-[#fff] rounded-[2px]">
								<CardHeader>
									<Image
										src={content.icon}
										alt="Element"
										className="mx-auto"
									/>
									<CardTitle className="text-white text-xl leading-none">
										{content.title}
									</CardTitle>
								</CardHeader>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Section>
	)
}

export default PaymentSection
