import ko from "knockout";
import crossroads from "crossroads";
import hasher from "hasher";

class Router {	
	constructor(config) {
		this.currentRoute = ko.observable({});
		ko.utils.arrayForEach(config.routes, (route) => {
			crossroads.addRoute(route.url, (requestParams) => {
				this.currentRoute(ko.utils.extend(requestParams, route.params));
			});
		});

		this.activateCrossroads();
	}
	
	activateCrossroads() {
		function parseHash(newHash, oldHash) { crossroads.parse(newHash); }
		crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
		hasher.initialized.add(parseHash);
		hasher.changed.add(parseHash);
		hasher.init();
	}
}

export default new Router({
	routes: [
		{ url: '',          params: { page: 'home-page' } },
		{ url: 'user-list', params: { page: 'user-list' } },
		{ url: 'about',  	params: { page: 'about-page' } }
	]
});