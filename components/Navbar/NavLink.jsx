import Link from 'next/link';

const NavLink = ({ link }) => {
	const { href, name, blank } = link;
	return (
		<Link href={href}>
			<a target={blank === true ? '_blank' : '_self'} className='nav-link'>
				<span>{name}</span>
			</a>
		</Link>
	);
};

export default NavLink;
