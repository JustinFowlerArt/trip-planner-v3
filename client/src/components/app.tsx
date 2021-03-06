import React from 'react';
import Footer from './footer';
import Header from './header';
import TripManager from './tripManager';

export default function App() {
	return (
		<div className='flex flex-col h-screen max-h-screen font-serif text-white'>
			<Header title='Trip Planner' />
			<TripManager />
			<Footer />
		</div>
	);
}
