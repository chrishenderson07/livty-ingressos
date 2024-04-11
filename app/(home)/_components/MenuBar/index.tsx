import Image from 'next/image'
import ButtonAnimation from '../ButtonAnimation'
import { SiWhatsapp } from 'react-icons/si'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/use-media-query'
import MobileMenu from '../MobileMenu'

const MenuBar = () => {
	const isDesktop = useMediaQuery('(min-width: 768px)')
	const url =
		'https://api.whatsapp.com/send?phone=551640423781&text=Ol%C3%A1%20Livty%20Ingressos,%20eu%20vim%20do%20seu%20site%20e%20gostaria%20de%20falar%20com%20um%20representante!'
	return (
		<nav className="container grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-12 mx-auto py-4 md:py-2 ">
			<div className="row-span-1 md:col-span-3 flex items-center justify-center">
				<Link href="/">
					<Image
						src={require('../../../../public/image/Logo.webp')}
						alt="Logo"
					/>
				</Link>
			</div>

			{!isDesktop ? (
				<MobileMenu />
			) : (
				<div className="row-span-1 md:col-span-6 flex items-center">
					<ul className="w-full flex justify-center flex-wrap gap-2 md:gap-6">
						<li className="animateMenu">
							<Link href="/"> Início </Link>
						</li>
						<li className="animateMenu">
							<a href="#gestao"> Gestão Facilitada </a>
						</li>
						<li className="animateMenu">
							<Link href="#livty">Livty Pay</Link>
						</li>
						<li className="animateMenu">
							<Link href="#feedback">Feedbacks</Link>
						</li>
						<li className="animateMenu">
							<Link href="#eventos">Eventos</Link>
						</li>
					</ul>
				</div>
			)}

			<div className="row-span-1 md:col-span-3 flex items-center justify-center">
				<Link href={url}>
					<ButtonAnimation
						label="Fale conosco"
						icon={<SiWhatsapp size={24} />}
					/>
				</Link>
			</div>
		</nav>
	)
}

export default MenuBar
