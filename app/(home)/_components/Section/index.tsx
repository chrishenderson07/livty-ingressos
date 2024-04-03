interface SectionProps {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}

const Section = ({ children, className, style }: SectionProps) => {
	return (
		<section
			className={`py-14 ${className}`}
			style={style}>
			{children}
		</section>
	)
}

export default Section
