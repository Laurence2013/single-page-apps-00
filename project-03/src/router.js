const urlPageTitle = 'JS SPA Routing';

document.addEventListener("click", (e) => {
	const { target } = e;

	if(!target.matches("nav a")) return;

	e.preventDefault();
	urlRoute();
});
const urlRoutes = {
	"/": {
		template: "/index.html",
		title: "Home | " + urlPageTitle,
		description: "This is the Index Page"
	},
	"/home": {
		template: "/templates/home.html",
		title: "About Us | " + urlPageTitle,
		description: "This is the About us Page"
	},
	"/dashboard": {
		template: "/templates/dashboard.html",
		title: "Contact Us | " + urlPageTitle,
		description: "This is the Contact us Page"
	},
	"/posts": {
		template: "/templates/posts.html",
		title: "Posts | " + urlPageTitle,
		description: "This is the Posts Page"
	},
};
const urlRoute = event => {
	event = event || window.event;
	event.preventDefault();

	window.history.pushState({}, "", event.target.href);
	urlLocationHandler();
};
const urlLocationHandler = async() => {
	const location = window.location.pathname;
	if(location.length === 0) location ="/";

	const route = urlRoutes[location] || urlRoutes[404];
	const html = await fetch(route.template).then(response => response.text());

	document.getElementById("content").innerHTML = html;
	//document.title = route.title;
	//document.querySelector('meta[name="description"]').setAttribute("content", route.description);
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();

