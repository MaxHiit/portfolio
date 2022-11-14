const titleReveal = {
	hidden: { width: '0%' },
	show: { width: '100%', transition: { delay: 1, duration: 1.5 } }
};

const imageMotion = {
	rest: {
		opacity: 0,
		scale: 0,
		x: '-50%',
		y: '-50%',
		zIndex: 0,
		ease: 'easeOut',
		duration: 0.2,
		type: 'tween'
	},
	hover: {
		opacity: 1,
		scale: 1,
		x: '-50%',
		y: '-50%',
		zIndex: 15,
		transition: {
			duration: 0.4,
			type: 'tween',
			ease: 'easeIn'
		}
	}
};

const textMotion = {
	rest: { color: '#FFF', opacity: 0.5, ease: 'easeOut', duration: 0.2, type: 'tween' },
	hover: {
		color: '#ffbb0d',
		opacity: 1,
		transition: {
			duration: 0.4,
			type: 'tween',
			ease: 'easeIn'
		}
	}
};

const containerMotion = {
	rest: {
		zIndex: 10,
		transition: {
			duration: 2,
			type: 'tween',
			ease: 'easeIn'
		}
	},
	hover: {
		zIndex: 20,
		transition: {
			duration: 0.4,
			type: 'tween',
			ease: 'easeOut'
		}
	}
};

const titleWorkHover = {
	hidden: {
		opacity: 0,
		x: 0
	},
	show: {
		opacity: 1,
		x: '-199px'
	}
};

export { titleReveal, imageMotion, textMotion, containerMotion, titleWorkHover };
