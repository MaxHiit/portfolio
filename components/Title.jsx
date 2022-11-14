import { motion } from 'framer-motion';
import { titleReveal } from '@/utils/animation';

const Title = ({ text }) => {
	return (
		<motion.div
			className='title-container flex-1'
			initial='hidden'
			animate='show'
			variants={titleReveal}
		>
			<svg viewBox='0 0 500 100' preserveAspectRatio='xMinYMin meet'>
				<defs>
					<clipPath id='svgTextPath'>
						<text x='0' y='200' lengthAdjust='spacing'>
							{text}
						</text>
					</clipPath>
				</defs>
			</svg>
		</motion.div>
	);
};

export default Title;
