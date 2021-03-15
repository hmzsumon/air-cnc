import React from "react";
import "./home-page.styles.css";
import HeroArea from "../../components/hero-area/HeroArea";

const HomePage = () => {
	return (
		<div className="home-page">
			<div className="container">
				<HeroArea />
			</div>
		</div>
	);
};

export default HomePage;
