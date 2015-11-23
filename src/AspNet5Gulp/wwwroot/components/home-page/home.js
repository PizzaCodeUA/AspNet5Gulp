import ko from "knockout";
import template from "./home.html";

class HomeViewModel {
	constructor(params) {
		this.message = ko.observable('Welcome to ko-browserify!');
	}
	
	doSomething() {
		this.message('You invoked doSomething() on the viewmodel.');
	}
}

export default {
	viewModel: HomeViewModel,
	template: template
}
