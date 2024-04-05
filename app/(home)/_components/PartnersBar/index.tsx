import Image from 'next/image'

const PartnersBar = () => {
	return (
		<section className="py-12 bg-[#EAEAEA]">
			<div className="container mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
				<div className="space-y-2 flex-2 text-center md:text-left mb-5 md:mb-0">
					<h2 className="text-2xl font-semibold text-[#1C1C20]">
						Livty Partners
					</h2>
					<p className="text-lg text-[#5F5F5F]">
						Conheça alguns de dezenas de parceiras da Livty.
					</p>
				</div>
				<div className="flex-3 flex md:flex-row items-center justify-center flex-wrap gap-7">
					<Image
						src={require('../../../../public/image/partners/Netskope.svg')}
						alt="Partner 1"
					/>
					<Image
						src={require('../../../../public/image/partners/Toyota.svg')}
						alt="Partner 1"
					/>
					<Image
						src={require('../../../../public/image/partners/Airbnb.svg')}
						alt="Partner 1"
					/>
					<Image
						src={require('../../../../public/image/partners/CapitalOne.svg')}
						alt="Partner 1"
					/>
					<Image
						src={require('../../../../public/image/partners/Spotify.svg')}
						alt="Partner 1"
					/>
				</div>
			</div>
		</section>
	)
}

export default PartnersBar
