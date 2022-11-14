import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const container = {
	show: {
		transition: {
			staggerChildren: 0.35
		},
		exit: {}
	}
};

const roundedBg = {
	hidden: { r: '10%' },
	show: {
		r: '100%',
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 4
		}
	},
	exit: {
		r: '0%',
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1
		}
	}
};

const textContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 0.5
		}
	},
	exit: {
		opacity: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.5
		}
	}
};

const Loader = ({ setLoading }) => {
	let [percentVal, setPercentVal] = useState(0);

	useEffect(() => {
		let id = setInterval(() => {
			if (percentVal === 100) {
				clearInterval(id);
				return;
			}
			setPercentVal((prev) => prev + 1);
		}, 10);
		return () => clearInterval(id);
	}, [percentVal]);

	return (
		<motion.div
			variants={container}
			initial='hidden'
			animate='show'
			exit='exit'
			onAnimationComplete={() => setLoading(false)}
			className='loader'
		>
			<motion.svg className='loader-rounded' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'>
				<defs>
					<radialGradient id='myGradient'>
						<stop offset='100%' stopColor='white' />
					</radialGradient>
				</defs>

				<motion.circle cx='5' cy='5' r='10%' variants={roundedBg} fill="url('#myGradient')" />
			</motion.svg>

			<motion.div className='loader-text' variants={textContainer}>
				<p className='text-black'>{percentVal}%</p>
			</motion.div>

			{/* </div> */}
		</motion.div>
	);
};

export default Loader;
