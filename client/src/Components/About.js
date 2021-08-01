import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../img/video-preview.jpg';

const About = () => {
	return (
		<div className="w-full bg-center bg-cover h-128 mt-12 sm:mt-20" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.85)), url(${banner})` }}>
			<div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-25">
				<div className="text-center max-w-4xl">
					<h1 className="text-2xl font-sans font-semibold pb-8 text-white uppercase lg:text-3xl tracking-wide">
						Developer Community of <span className="text-deep-purple-accent-400">DIU</span>
					</h1>
					<p className="mb-8 font-sans text-base text-gray-100 md:text-lg md:leading-relaxed tracking-wider">
						Only the current students of Daffodil International University and Alumni from the university
						can join the community. This web application will serve as an archive of different events like
						seminars, workshops etc. Moreover members of the community can share any article in the website
						and others can comment their views about it. Here any member can get help from others in any
						specific technical problem which will be very helpful for new members of Daffodil family or new
						students of Daffodil International University.
					</p>
					<Link
						to="/regfirststep"
						className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
					>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
};

export default About;
