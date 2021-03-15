import React from "react";
import "./not-found.styles.css";
import CustomButton from "../../components/custom-button/CustomButton";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="not-found-page">
			<h1>Under maintains</h1>
			<Link to="/">
				<CustomButton>Back To Home</CustomButton>
			</Link>
		</div>
	);
};

export default NotFound;
