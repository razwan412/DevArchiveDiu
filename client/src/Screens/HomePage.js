import React from 'react';
import About from '../Components/About';
import CallToAction from '../Components/CallToAction';
import Content from '../Components/Content';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Statistic from '../Components/Statistic';

const HomePage = () => {
	return (
		<div>
			<Hero />
			<About />
			<Features />
			<Content />
			<Statistic />
			<CallToAction />
			<Footer />
		</div>
	);
};

export default HomePage;
