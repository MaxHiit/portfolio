import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import NavLink from '@/components/Navbar/NavLink';

const Navbar = ({ position = 'justify-start', fixed = false }) => {
	const router = useRouter();
	const refNavbar = useRef(null);
	let linkLists = [
		{
			href: '/',
			name: 'home',
			blank: false
		},
		{
			href: '/works',
			name: 'works',
			blank: false
		},
		{
			href: 'https://github.com/MaxHiit',
			name: 'github',
			blank: true
		},
		{
			href: 'https://calendly.com/maxb-pro/15-minutes-meeting',
			name: 'contact',
			blank: true
		}
	];

	if (router.pathname === '/') {
		linkLists = linkLists.slice(1);
	} else {
		linkLists = linkLists.slice(0);
	}

	useEffect(() => {
		const handleScroll = (event) => {
			if (window.scrollY > 0) {
				refNavbar.current.style.backgroundColor = '#262525';
			} else {
				refNavbar.current.style.backgroundColor = 'transparent';
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav ref={refNavbar} className={`w-full flex-none z-10  ${fixed ? 'sticky top-0' : 'relative'}`}>
			<ul className={`flex py-5 ${position}`}>
				{linkLists.map((link, index) => {
					return (
						<li key={index} className='w-[100px]'>
							<NavLink link={link} />
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
