import { FaFacebookF, FaGoogle, FaMailchimp, FaTiktok } from 'react-icons/fa'
import Section from '../Section'

const MarketingSection = () => {
	return (
		<Section className="bg-white">
			<div className="container mx-auto">
				<h2 className="text-3xl font-semibold text-[#1C1C20] leading-tight md:w-1/2 text-center mx-auto">
					Marketing & CRM
				</h2>
				<p className="md:w-1/2 text-center mx-auto text-[#151515] text-base font-semibold my-2">
					Nossa plataforma conta com trakeamento de vendas e relação direta com
					seus clientes e participantes de seus eventos.
				</p>

				<div className="md:w-1/2 mx-auto flex justify-between gap-8 mt-12">
					<FaFacebookF
						size={40}
						color="#555555"
					/>

					<FaGoogle
						size={40}
						color="#555555"
					/>

					<FaTiktok
						size={40}
						color="#555555"
					/>

					<FaMailchimp
						size={40}
						color="#555555"
					/>
				</div>
			</div>
		</Section>
	)
}

export default MarketingSection
