'use client'

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTrigger,
} from '@/components/ui/drawer'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const MobileMenu = () => {
	const [isMenuOpen, setisMenuOpen] = useState(false)
	const links = [
		{ path: '/', label: 'Início' },
		{ path: '#gestao', label: 'Gestão Facilitada' },
		{ path: '#livty', label: 'Livty Pay' },
		{ path: '#feedback', label: 'Feedbacks' },
		{ path: '#eventos', label: 'Eventos' },
	]

	const handleMenu = () => {
		setisMenuOpen(!isMenuOpen)
	}
	return (
		<Drawer
			direction="left"
			open={isMenuOpen}>
			<DrawerTrigger onClick={handleMenu}>icone</DrawerTrigger>
			<DrawerContent className="border-none">
				<Link href="/">
					<Image
						src={require('../../../../public/image/Logo.webp')}
						alt="Logo"
					/>
				</Link>

				<ul className="space-y-4 mt-8">
					{links.map((link) => (
						<li
							className="animateMenu"
							key={link.label}
							onClick={handleMenu}>
							<Link href={link.path}>{link.label}</Link>
						</li>
					))}
				</ul>

				<DrawerClose>
					<Link href={links[2].path}>Testeee</Link>
				</DrawerClose>
			</DrawerContent>
		</Drawer>
	)
}

export default MobileMenu
