import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
	return (
		<div className='w-full min-h-screen flex flex-col'>
			<Header />
			<main className="container mx-auto px-2 py-2">
				<Outlet /> {/* Render the matched child route here */}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
