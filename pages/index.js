import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Title from '@/components/Title';

export default function Home() {
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
				<Title text='MAX"CODE' />
				<h1 className='subtitle blur_effect flex-none'>
					Front-End Developer <br /> portfolio 2022
				</h1>
				<Navbar />
			</main>
		</>
	);
}
