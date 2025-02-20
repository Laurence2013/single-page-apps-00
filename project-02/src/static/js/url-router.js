const urlPageTitle = 'JS SPA Routing';

document.addEventListener("click", (e) => {
	const { target } = e;

	if(!target.matches("nav a")) return;

	e.preventDefault();
	urlRoute();
});
const urlRoutes = {
	404: {
		template: "/templates/404.html",
		//template: "/components/404.hbs",
		title: "404 | " + urlPageTitle,
		description: "Page not found!"
	},
	"/": {
		template: "/templates/index.html",
		//template: "/components/index.hbs",
		title: "Home | " + urlPageTitle,
		description: "This is the Home Page"
	},
	"/about": {
		template: "/templates/about.html",
		//template: "/components/about.hbs",
		title: "About Us | " + urlPageTitle,
		description: "This is the About us Page"
	},
	"/contact": {
		template: "/templates/contact.html",
		//template: "/components/contact.hbs",
		title: "Contact Us | " + urlPageTitle,
		description: "This is the Contact us Page"
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
	document.title = route.title;
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();

