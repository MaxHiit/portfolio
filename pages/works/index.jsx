import { client } from '@/lib/sanity';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import List from '@/components/Works/List';

const Works = ({ projects }) => {
	return (
		<>
			<Head>
				<title>Maxime Baronce | Freelance Front End Developer</title>
				<meta
					name='description'
					content='Maxime Baronce is an freelance front end developer specializing in web development and digital design.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='main'>
				<Navbar position='justify-center' />
				<List projects={projects} />
			</main>
		</>
	);
};

export default Works;

export const getStaticProps = async () => {
	const projects = await client.fetch(`*[_type == "project"] | order(publishedAt desc){
	  _id,
	  title,
	  releaseDate,
	  'slug': slug.current,
		'poster': poster.asset._ref
	}`);

	return {
		props: { projects }
	};
};
