import React from "react";
import "./hero-area-styles.css";
import BookingFormBlock from "../booking-form-block/BookingFormBlock";
import ServiceShowCase from "../service-showcase-block/ServiceShowCase";

const HeroArea = () => {
	return (
		<div className="booking-area">
			<div className="row">
				<div className="col-md-4">
					<BookingFormBlock />
				</div>
				<div className="col-md-8">
					<ServiceShowCase />
				</div>
			</div>
		</div>
	);
};

export default HeroArea;
