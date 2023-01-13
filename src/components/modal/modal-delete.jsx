import React, { useState } from "react";
import axios from "axios";
import SpinnerLoading from "../../common/spinner-loading";
import useLocalStorage from "../../hooks/useLocalStorage";
import FormError from "../../common/form-error";
import { HOTELS_URL } from "../../constants/api";

function ModalDelete({ hotelsState, getHotels }) {
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const [saved, setSaved] = useState(null);
	const [auth, setAuth] = useLocalStorage("auth", null);

	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setSaved(null);

		try {
			setSubmitting(true);
			const response = await axios.delete(`${HOTELS_URL}${hotelsState.id}`, {
				headers: {
					Authorization: `Bearer ${auth.jwt}`,
				},
			});
			if (response.statusText === "OK") {
				setSaved(true);
			}
		} catch (error) {
			console.log(error);
			setError(error.message.toString());
		} finally {
			setSubmitting(false);
			getHotels();
		}
	}

	return (
		<div className="modal" id="deleteModal" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="modal-header">
							<h5 className="fs-5 modal-title">Delete hotel</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<p>
								Are you sure you want to delete <b>{hotelsState.title}</b>?
							</p>
						</div>

						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
								Close
							</button>
							<button type="submit" className="btn btn-danger">
								{submitting ? "Deleting..." : "Delete"} {submitting && <SpinnerLoading />}
							</button>
						</div>
						{saved && <div className=" alert alert-success m-3">Deleted</div>}
						{error && <FormError>{error}</FormError>}
					</form>
				</div>
			</div>
		</div>
	);
}

export default ModalDelete;
