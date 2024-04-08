import React from 'react'

interface SectionProps {
	children: React.ReactNode
	className?: string
	id?: string
	style?: React.CSSProperties
}

const Section = ({ children, className, style, id }: SectionProps) => {
	return (
		<section
			id={id}
			className={`py-14 ${className}`}
			style={style}>
			{children}
		</section>
	)
}

export default Section
