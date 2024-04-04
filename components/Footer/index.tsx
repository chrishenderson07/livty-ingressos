import Image from 'next/image'
import Link from 'next/link'
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaRegHeart,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
	const facebook = 'https://www.facebook.com/livtyingressos'
	const twitter = 'https://twitter.com/livtyingressos'
	const youtube = 'https://www.youtube.com/livtyingressos'
	const linkedin = 'https://www.linkedin.com/livtyingressos'
	const instagram = 'https://www.instagram.com/livtyingressos'

	return (
		<footer className="bg-[#C02A63] py-12">
			<div className="container mx-auto max-w-xl flex justify-center flex-col items-center gap-7">
				<Image
					src={require('@/public/image/Logo.webp')}
					alt="Logo Livty Ingressos"
				/>
				<p className="text-[#EDEDED] text-lg font-normal text-center">
					Gestão de eventos facilitada e otimizada pra você produtor, poder
					focar seu tempo no que realmente precisa.
				</p>

				<div className="flex gap-4">
					<Link
						href={facebook}
						target="_blank">
						<FaFacebookF size={24} />
					</Link>
					<Link
						href={twitter}
						target="_blank">
						<FaTwitter size={24} />
					</Link>
					<Link
						href={youtube}
						target="_blank">
						<FaYoutube size={24} />
					</Link>
					<Link
						href={linkedin}
						target="_blank">
						<FaLinkedinIn size={24} />
					</Link>
					<Link
						href={instagram}
						target="_blank">
						<FaInstagram size={24} />
					</Link>
				</div>
			</div>

			<div className="container mx-auto mt-10 p-4 px-8 bg-[rgba(255,255,255,0.04)] flex justify-between text-base">
				<p>2024 © Livty Ingressos Todos os direitos reservados.</p>
				<p className="flex items-center gap-1">
					Desenvolvido com <FaRegHeart /> pela
					<a
						href="https://nerodesign.com.br/"
						target="_blank"
						className="font-semibold transition-transform hover:-translate-y-1">
						Nero Design
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
