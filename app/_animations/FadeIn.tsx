'use client'

import { motion } from 'framer-motion'

interface FadeInProps {
	direction?: 'top' | 'left' | 'none' // Adicione 'none' como opção para nenhum movimento
	delay?: number
	children: React.ReactNode
}

const FadeIn: React.FC<FadeInProps> = ({
	direction = 'none',
	delay = 0,
	children,
}) => {
	const containerVariants = {
		hidden: {
			opacity: 0,
			y: direction === 'top' ? -40 : 0,
			x: direction === 'left' ? -40 : 0,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				delay,
				duration: 1,
			},
		},
	}

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible">
			{children}
		</motion.div>
	)
}

export default FadeIn
