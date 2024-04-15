import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'

const MobileMenu = () => {
	const [isMenuOpen, setisMenuOpen] = useState(false)
	const links = [
		{ path: '/', label: 'Início' },
		{ path: '#gestao', label: 'Gestão Facilitada' },
		{ path: '#livty', label: 'Livty Pay' },
		{ path: '#feedback', label: 'Feedbacks' },
		{ path: '#eventos', label: 'Eventos' },
	]

	const handleMenu = (path: string) => {
		const element = document.querySelector(path)
		setisMenuOpen(false)
		setTimeout(() => {
			element?.scrollIntoView({ behavior: 'smooth' })
		}, 300)
	}

	const handleMenuOpen = () => {
		setisMenuOpen(true)
	}

	useEffect(() => {
		document.addEventListener('scroll', () => {
			setisMenuOpen(false)
		})

		return () => {
			document.removeEventListener('scroll', () => {
				setisMenuOpen(false)
			})
		}
	}, [])

	return (
		<Drawer
			direction="left"
			open={isMenuOpen}
			modal={false}>
			<DrawerTrigger onClick={handleMenuOpen}>
				<IoMenu size={38} />
			</DrawerTrigger>

			<DrawerContent className="border-none bg-[rgba(0,0,0,0.8)] rounded-none inset-y-0">
				<div className="flex items-center justify-between">
					<Link href="/">
						<Image
							src={require('../../../../public/image/Logo.webp')}
							alt="Logo"
						/>
					</Link>

					<IoClose
						size={38}
						onClick={() => setisMenuOpen(false)}
					/>
				</div>

				<ul className="space-y-4 mt-8">
					{links.map((link) => (
						<li
							className="animateMenu"
							key={link.label}
							onClick={() => {
								handleMenu(link.path)
							}}>
							{link.label}
						</li>
					))}
				</ul>
				{/* <button onClick={handleMenu}>Novo btn</button> */}
			</DrawerContent>
		</Drawer>
	)
}

export default MobileMenu
