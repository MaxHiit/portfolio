import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { imageMotion, textMotion, containerMotion } from '@/utils/animation';
import { urlFor } from '@/lib/sanity';

const Item = ({ project, index }) => {
	const getProjectIndex = (index) => {
		return ('0' + (index + 1)).slice(-2);
	};

	const getReleaseYear = () => {
		return new Date(project.releaseDate).getFullYear();
	};

	return (
		<Link
			as={`/works/${project.slug}`}
			href={{
				pathname: '/works/[slug]',
				query: { slug: project.slug }
			}}
		>
			<motion.div
				initial='rest'
				whileHover='hover'
				animate='rest'
				className='work-item relative cursor-pointer'
			>
				<motion.div
					variants={containerMotion}
					className='work-item-content blur_effect flex items-baseline gap-x-3 pt-6 relative'
				>
					<p className='work-item_number'>{getProjectIndex(index)}</p>
					<motion.h2 variants={textMotion} className='work-item_title flex-1 text-8xl'>
						{project.title}
					</motion.h2>
					<p className='work-item_date '>{getReleaseYear()}</p>
				</motion.div>
				<motion.div
					variants={imageMotion}
					className='grayscale absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4'
				>
					<Image
						src={urlFor(project.poster).url()}
						alt='Picture of the author'
						width={500}
						height={500}
					/>
				</motion.div>
			</motion.div>
		</Link>
	);
};

export default Item;
