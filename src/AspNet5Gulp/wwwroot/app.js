import ko from "knockout";
import router from "./Router";
import NavBar from "./components/nav-bar/nav-bar";
import HomePage from "./components/home-page/home";
import UserList from "./components/user-list/user-list";
import AboutPage from "./components/about-page/about.html";

ko.components.register("nav-bar", NavBar);
ko.components.register("home-page", HomePage);
ko.components.register("user-list", UserList);
ko.components.register("about-page", {template: AboutPage});

ko.applyBindings({ route: router.currentRoute });