import React from "react";
import PageTitle from "../../common/pageTitle";
import ContactForm from "./contact-form";

function ContactPage() {
	return (
		<div className="container">
			<PageTitle header={"Contact us"} />
			<ContactForm />
		</div>
	);
}

export default ContactPage;
