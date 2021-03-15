import React from "react";
import "./contact-with-host.styles.css";
import { connect } from "react-redux";
import { getBookingData } from "../../redux/booking/booking.actions";

const ContactWithHost = ({ getBookingData, booking }) => {
	const {
		room: {
			user: { avatar },
		},
	} = booking;
	return (
		<div className="contact-with-host">
			<div className="contact-with-host-heading">
				<div>
					<h4>Travelling for work ?</h4>
					<p>Say hello to your host</p>
					<p>Let Rowdra know a little about yourself and why you're coming.</p>
				</div>
				<div>
					<img src={avatar} alt="" />
				</div>
			</div>
			<textarea
				name="contactHost"
				cols="30"
				rows="10"
				placeholder="Hello Rowdrai Can't wait to spend 4 night is your home"
				onChange={(e) =>
					getBookingData({ ...booking, clientMsg: e.target.value })
				}></textarea>
		</div>
	);
};

const mapStateToProps = (state) => ({
	booking: state.booking.bookingData,
});

export default connect(mapStateToProps, { getBookingData })(ContactWithHost);
