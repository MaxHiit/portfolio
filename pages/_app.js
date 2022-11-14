import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/globals.css';
import Loader from '@/components/Loader';

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loading
			? document.querySelector('body').classList.add('loading')
			: document.querySelector('body').classList.remove('loading');
	}, [loading]);

	return (
		<AnimatePresence>
			{loading ? (
				<motion.div key='loader'>
					<Loader setLoading={setLoading} />
				</motion.div>
			) : (
				!loading && <Component {...pageProps} />
			)}
		</AnimatePresence>
	);
}

export default MyApp;
