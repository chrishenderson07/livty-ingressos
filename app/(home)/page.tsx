// 'use client'

import PartnersBar from './_components/PartnersBar'
import Gestao from './_components/Gestao'

import IntegrationSection from './_components/IntegrationSection'
import Testimonials from './_components/Testimonials'
import CallToAction from './_components/CallToAction'
import Events from './_components/Events'
import DownloadApp from './_components/DownloadApp'
import SellSection from './_components/SellSection'
import FeaturesSections from './_components/FeaturesSections'
import PaymentSection from './_components/PaymentSection'
import MarketingSection from './_components/MarketingSection'
import Header from './_components/Header'

const Home = () => {
	const url =
		'https://api.whatsapp.com/send?phone=551640423781&text=Ol%C3%A1%20Livty%20Ingressos,%20eu%20vim%20do%20seu%20site%20e%20gostaria%20de%20falar%20com%20um%20representante!'

	return (
		<>
			<Header url={url} />
			<PartnersBar />
			<Gestao url={url} />
			<SellSection />
			<IntegrationSection url={url} />
			<FeaturesSections />
			<PaymentSection />
			<MarketingSection />
			<Testimonials url={url} />
			<CallToAction />
			<Events url={url} />
			<DownloadApp />
		</>
	)
}

export default Home
