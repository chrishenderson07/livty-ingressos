export const fadeIn = (direction: string, delay: number) => {
	return {
		hidden: {
			opacity: 0,
			y: direction === 'top' ? 40 : direction === 'bottom' ? -40 : 0,
			x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
		},

		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				type: 'tween',
				duration: 1,
				delay: delay,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
	}
}
