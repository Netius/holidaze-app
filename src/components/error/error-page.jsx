import Heading from "../../common/Heading";

export default function ErrorPage() {
	return (
		<div id="error-page" className="text-center">
			<Heading header={"Oops!"} />
			<p>Sorry, an unexpected error has occurred.</p>
		</div>
	);
}
