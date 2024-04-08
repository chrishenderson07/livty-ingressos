import Image from 'next/image'
import Section from '../Section'
import Link from 'next/link'

import arrow from '@/public/image/arrow-down.webp'
import playStore from '@/public/image/play-store.webp'
import appleStore from '@/public/image/app-store.webp'

const DownloadApp = () => {
	const url =
		'https://api.whatsapp.com/send?phone=551640423781&text=Ol%C3%A1%20Livty%20Ingressos,%20eu%20vim%20do%20seu%20site%20e%20gostaria%20de%20falar%20com%20um%20representante!'

	// const arrow = require('@/public/image/arrow-down.webp')

	return (
		<Section className="bg-white">
			<div className="container mx-auto max-w-3xl">
				<Image
					src={arrow}
					alt="Baixe nosso app"
					className="mx-auto mb-4"
				/>

				<h1 className="text-5xl font-semibold text-[#1D1D21] text-center leading-none">
					Baixe nosso app
				</h1>

				<div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8">
					<Link
						href={url}
						target="_blank">
						<Image
							src={appleStore}
							alt="App Store"
							className="upButton"
						/>
					</Link>

					<Link
						href={url}
						target="_blank">
						<Image
							src={playStore}
							alt="Play Store"
							className="upButton"
						/>
					</Link>
				</div>
			</div>
		</Section>
	)
}

export default DownloadApp
