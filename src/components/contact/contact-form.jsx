import React, { useState } from "react";
import ContactImage from "../../images/contact-image.jpg";
import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";

function ContactForm() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [saved, setSaved] = useState(null);

	function handleSubmit(e) {
		e.preventDefault();
		setSaved(true);
		setFullName("");
		setEmail("");
		setMessage("");
	}

	return (
		<div className="container">
			<div className="row ">
				<div className="col-md-6">
					<Heading header={"Contact us"} />
					<SubHeading header={"Any questions or sugestions just let us know"} />
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="mb-3 mt-4">
							<label htmlFor="contact-name" className="form-label">
								Fullname
							</label>
							<input
								id="contact-name"
								name="contact-name"
								type="text"
								value={fullName}
								className="form-control"
								onChange={(e) => setFullName(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="contact-email" className="form-label">
								Email
							</label>
							<input
								id="contact-email"
								name="contact-email"
								type="email"
								value={email}
								className="form-control"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="contact-message" className="form-label">
								Message
							</label>
							<textarea
								id="contact-message"
								name="contact-message"
								className="form-control"
								value={message}
								rows={6}
								cols={50}
								minLength={20}
								onChange={(e) => setMessage(e.target.value)}
								required
							/>
						</div>
						<button type="submit" className="btn btn-success">
							Send
						</button>
						{saved && <div className=" alert alert-success my-3">Thank you! Message sendt.</div>}
					</form>
				</div>

				<div className="col-md-6 py-5">
					<div className="contact__image" style={{ backgroundImage: `url(${ContactImage})` }}></div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
