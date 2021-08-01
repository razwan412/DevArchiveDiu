import React from 'react';

const Statistic = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
				<div className="text-center mb-4 sm:mb-0">
					<h6 className="text-3xl font-bold text-deep-purple-accent-400">7012</h6>
					<p className="font-bold">Posts</p>
				</div>
				<div className="text-center mb-4 sm:mb-0">
					<h6 className="text-3xl font-bold text-deep-purple-accent-400">9827</h6>
					<p className="font-bold">Users</p>
				</div>
				<div className="text-center">
					<h6 className="text-3xl font-bold text-deep-purple-accent-400">2158</h6>
					<p className="font-bold">Jobs</p>
				</div>
				<div className="text-center">
					<h6 className="text-3xl font-bold text-deep-purple-accent-400">5162</h6>
					<p className="font-bold">Projects</p>
				</div>
			</div>
		</div>
	);
};

export default Statistic;
