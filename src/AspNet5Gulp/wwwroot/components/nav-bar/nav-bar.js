import ko from "knockout";
import template from "./nav-bar.html";

class NavBarViewModel {
	constructor(params) {
		this.route = params.route;
	}
}

export default {
	viewModel: NavBarViewModel,
	template: template
}
