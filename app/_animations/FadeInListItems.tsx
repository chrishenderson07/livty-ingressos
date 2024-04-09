'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface FadeInListItemsProps {
	direction?: 'top' | 'left' | 'none' // Adicione 'none' como opção para nenhum movimento
	delay?: number
	children: React.ReactNode
	className?: string
}

const FadeInListItems: React.FC<FadeInListItemsProps> = ({
	direction = 'none',
	delay = 0,
	children,
	className,
}) => {
	const containerVariants = {
		hidden: {
			opacity: 0,
			y: direction === 'top' ? -40 : 0,
			x: direction === 'left' ? -60 : 0,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				duration: 1,
				staggerChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1 } },
	}

	return (
		<motion.ul
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			className={className}>
			{React.Children.map(children, (child, index) => (
				<motion.div
					key={index}
					variants={itemVariants}>
					{child}
				</motion.div>
			))}
		</motion.ul>
	)
}

export default FadeInListItems
