import React from "react";
import "./service-showcase-block.css";
import ExperiencesShowcase from "../expericnce-showcase/ExperiencesShowcase";
import HomesSlider from "../homes-slider/HomesSlider";

const ServiceShowCase = () => {
	return (
		<div className="service-showcase-block">
			<ExperiencesShowcase />
			<HomesSlider />
		</div>
	);
};

export default ServiceShowCase;
