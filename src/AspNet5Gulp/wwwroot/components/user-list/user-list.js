import ko from "knockout";
import $ from "jquery";
import User from "../../models/User";
import template from "./user-list.html";

class UserList {
	constructor() {
		this.userList = ko.observableArray();
		
		$.ajax({
			url: 'api/users',
			method: 'GET',
			cache: false,
			dataType: 'json',
			contentType: 'application/json'
		}).done((data) => {
			this.userList(ko.utils.arrayMap(data, (item) => {
				return new User(item);
			}));
		});
	}
}

export default {
	viewModel: UserList,
	template: template
}