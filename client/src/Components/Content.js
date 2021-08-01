import React from 'react';
import SVG3 from '../img/Online_Presentation_Monochromatic.svg';
import SVG1 from '../img/Ranking_Monochromatic.svg';
import SVG2 from '../img/Web_Developer_Monochromatic.svg';

const Content = () => {
	return (
		<section className="py-4 lg:py-8 max-w-7xl text-gray-800">
			<div className="container mx-auto space-y-12">
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
					<div className="flex items-center justify-center flex-1 bg-indigo-50">
						<img src={SVG1} alt="svg" className="p-8 h-72" />
					</div>
					<div className="flex flex-col justify-center flex-1 px-6 py-12 bg-gray-50">
						<span className="text-xs uppercase text-gray-600">Join, it's free</span>
						<h2 className="text-3xl text-gray-900 font-bold pt-2">Biggest Developer Community</h2>
						<p className="my-5 text-gray-800">
							You can benefited from hare, join with the forum,. You can post here any query, you can get
							any help from here. You can also follow, like, share, comment or give solution of any problem.
						</p>
						<button className="self-start text-deep-purple-accent-400">Learn More</button>
					</div>
				</div>
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
					<div className="flex items-center justify-center flex-1 bg-indigo-50">
						<img src={SVG2} alt="svg" className="p-8 h-72" />
					</div>
					<div className="flex flex-col justify-center flex-1 px-6 py-12 bg-gray-50">
						<span className="text-xs uppercase text-gray-600">Join, it's free</span>
						<h2 className="text-3xl text-gray-900 font-bold pt-2">Largest Dev Job Portal</h2>
						<p className="my-5 text-gray-800">
							Here you can get any job or as a requiter you can hire people. Any one can bid project which
							is match his skills. Start a project and income will be automatically increased.
						</p>
						<button className="self-start text-deep-purple-accent-400">Learn More</button>
					</div>
				</div>
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
					<div className="flex items-center justify-center flex-1 bg-indigo-50">
						<img src={SVG3} alt="svg" className="p-8 h-72" />
					</div>
					<div className="flex flex-col justify-center flex-1 px-6 py-12 bg-gray-50">
						<span className="text-xs uppercase text-gray-600">Join, it's free</span>
						<h2 className="text-3xl text-gray-900 font-bold pt-2"> Trusted Online Outsourcing </h2>
						<p className="my-5 text-gray-800">
							In this platform any one can get help of help each other. They can hire a developer or
							searching projects. Also attend workshops, webinars and expand their experience.
						</p>
						<button className="self-start text-deep-purple-accent-400">Learn More</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Content;
