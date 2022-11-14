import { useRouter } from 'next/router';

const GoBackButton = () => {
	const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		router.back();
	};

	return (
		<p onClick={handleClick} className='nav-link cursor-pointer mt-20 ml-auto w-max'>
			Back To projects
		</p>
	);
};

export default GoBackButton;
