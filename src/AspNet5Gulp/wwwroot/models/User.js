import ko from "knockout";

class User {
	constructor(params) {
		this.id = ko.observable(params.Id);
		this.name = ko.observable(params.Name);
		this.email = ko.observable(params.Email);
		this.phone = ko.observable(params.Phone);
	}
}

export default User;