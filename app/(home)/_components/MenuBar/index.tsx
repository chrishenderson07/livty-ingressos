import Image from 'next/image'
import ButtonAnimation from '../ButtonAnimation'
import { SiWhatsapp } from 'react-icons/si'
import Link from 'next/link'

const MenuBar = () => {
	const url =
		'https://api.whatsapp.com/send?phone=551640423781&text=Ol%C3%A1%20Livty%20Ingressos,%20eu%20vim%20do%20seu%20site%20e%20gostaria%20de%20falar%20com%20um%20representante!'
	return (
		<nav className="container grid grid-cols-12 mx-auto bg-orange-500 py-2 ">
			<div className="col-span-3 flex items-center">
				<Image
					src={require('../../../../public/image/Logo.webp')}
					alt="Logo"
				/>
			</div>

			<div className="col-span-6 flex items-center ">
				<ul className="w-full flex justify-center gap-6">
					<li className="animateMenu">
						<Link href="/"> Início </Link>
					</li>
					<li className="animateMenu">
						<Link href="/sobre"> Gestão Facilitada </Link>
					</li>
					<li className="animateMenu">
						<Link href="/servicos">Livty Pay</Link>
					</li>
					<li className="animateMenu">
						<Link href="/contato">Feedbacks</Link>
					</li>
					<li className="animateMenu">
						<Link href="/contato">Eventos</Link>
					</li>
				</ul>
			</div>

			<div className="col-span-3 flex items-center">
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
