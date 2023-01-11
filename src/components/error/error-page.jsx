import Heading from "../../common/Heading";
import SubHeading from "../../common/subheading";

export default function ErrorPage() {
	return (
		<div id="error-page" className="text-center mt-5">
			<i className="far fa-frown display-1"></i>
			<Heading header={"404"} />
			<SubHeading header={"Page not found"} />
		</div>
	);
}
