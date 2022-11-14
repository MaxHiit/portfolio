import Head from 'next/head';
import Image from 'next/image';
import { client, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { titleWorkHover } from '@/utils/animation';
import Navbar from '@/components/Navbar/Navbar';
import TitleDetail from '@/components/Works/TitleDetail';
import StackItem from '@/components/Stacks/Item';
import GoBackButton from '@/components/GoBackButton';

const Project = ({ project }) => {
	const { title, description, techStack, jobStatus, url, poster } = project;
	const [isHover, setIsHover] = useState(false);

	const components = {
		block: {
			p: ({ children }) => <p>{children}</p>
		}
	};
	return (
		<>
			<Head>
				<title>{title} | Freelance Front End Developer</title>
				<meta
					name='description'
					content='Maxime Baronce is an freelance front end developer specializing in web development and digital design.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='flex flex-row justify-end min-h-screen'>
				<div className='md:w-[50vw] w-screen h-screen opacity-10 md:opacity-100 fixed top-0 left-0'>
					<Image
						src={urlFor(poster).url()}
						alt='Picture of the author'
						className='img-project'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='md:w-[50vw] w-screen'>
					<Navbar position='justify-center' fixed='true' />
					<div className='px-10 sm:px-20 '>
						<motion.div
							initial='hidden'
							animate={isHover ? 'show' : 'hidden'}
							transition={{
								duration: 1,
								ease: 'easeInOut'
							}}
							className='break-all md:fixed md:bottom-10 md:left-0 w-full md:w-3/6 max-w-3/6 py-16 md:py-0'
							onMouseEnter={() => setIsHover(true)}
							onMouseLeave={() => setIsHover(false)}
						>
							<TitleDetail title={title} url={url} />
							<motion.div
								variants={titleWorkHover}
								className='hidden md:block absolute -bottom-10 -right-[199px] w-max bg-primary p-2'
							>
								<p className='uppercase font-bold'>click to visit the site</p>
							</motion.div>
						</motion.div>
						<div className='md:pt-20'>
							<h2 className='stack-title'>tech stack</h2>
							{techStack &&
								techStack.map((stack, index) => {
									return <StackItem key={index} value={stack} />;
								})}
						</div>
						<div className='pt-20'>
							<h2 className='stack-title'>jobs status time</h2>
							{jobStatus &&
								jobStatus.map((stack, index) => {
									return <StackItem key={index} value={stack} />;
								})}
						</div>
						<div className='pt-20 pb-10'>
							<h2 className='stack-title'>About the project </h2>
							<PortableText value={description} components={components} />
						</div>
						<GoBackButton />
					</div>
				</div>
			</main>
		</>
	);
};

export async function getStaticProps({ params }) {
	const projects = await client.fetch(
		`*[_type == "project" && slug.current == $slug] {
    _id,
		title,
    description,
		techStack,
		jobStatus,
		url,
    'slug': slug.current,
		'poster': poster.asset._ref
  }`,
		{ slug: params.slug }
	);

	return {
		props: { project: projects[0] }
	};
}

export async function getStaticPaths() {
	const projects = await client.fetch(`*[_type == "project"]{ 'slug': slug.current }`);
	return {
		paths:
			projects?.map((project) => ({
				params: {
					slug: project.slug
				}
			})) || [],
		fallback: false
	};
}

export default Project;
