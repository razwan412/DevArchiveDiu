import React from 'react';
import hero from '../img/hero.gif';

const CallToAction = () => {
	return (
		<section className="px-4 pb-16 mx-auto max-w-7xl">
			<div className="w-full mx-auto text-left md:w-11/12 xl:w-10/12 md:text-center">
				<h1 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-4xl ">
					Daffodil International University's{' '} <br />
					<span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500  lg:inline">
						All Developers
					</span>{' '}
					in one single place.
				</h1>
				<p className="px-0 mb-6 text-lg text-gray-600 lg:px-24" > Here any member can get help from others in any specific technical problem which will be very helpful for new members of Daffodil family or new students of Daffodil International University. Overall this platform is planned to improve the cooperation of the full Daffodil family. </p>

			</div>
			<div className="w-full mx-auto mt-10 text-center md:w-10/12">
				<img src={hero} alt="Hello" className="w-3/4 mx-auto rounded-lg shadow-xl" />
			</div>
		</section>
	);
};

export default CallToAction;
