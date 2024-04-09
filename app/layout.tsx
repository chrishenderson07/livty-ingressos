import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Livty',
	description: 'Livty Ingressos',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="pt-bt"
			className="scroll-smooth overflow-x-hidden">
			<body className={archivo.className}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
