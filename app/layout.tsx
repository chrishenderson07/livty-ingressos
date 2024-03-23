import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

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
		<html lang="pt-bt">
			<body className={archivo.className}>{children}</body>
		</html>
	)
}
