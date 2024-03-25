'use client'
import { Button } from '@/components/ui/button'

interface ButtonAnimationProps {
	label: string
	icon: any
}

const ButtonAnimation = ({ label, icon }: ButtonAnimationProps) => {
	const handleMouseEnter = (event: any) => {
		event.currentTarget.querySelector('svg').style.transition = 'all'
		event.currentTarget.querySelector('svg').style.transitionDuration = '0.3s'
		event.currentTarget.querySelector('svg').style.transform = 'translateX(5px)'
	}

	const handleMouseLeave = (event: any) => {
		event.currentTarget.querySelector('svg').style.transform = 'none'
	}

	return (
		<Button
			className="bg-[#c02a63] px-8 py-7 rounded-[6px] font-bold text-base text-white flex gap-2 hover:bg-[#1C1C20] hover:text-white "
			onMouseEnter={handleMouseEnter}
			onMouseOut={handleMouseLeave}>
			{label}
			{icon}
		</Button>
	)
}

export default ButtonAnimation
