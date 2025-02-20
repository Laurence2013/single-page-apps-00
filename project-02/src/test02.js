const indexTemplate = require('./static/handlebars/about.hbs');

const Car = {
	make: "Suzuki",
	model: "Swift",
	engine_size: 1.2,
	fuel_type: "Petrol"
}
async function hbsLoad(){
	const carMake = {car: [Car.make, Car.model, Car.engine_size, Car.fuel_type]}
	const compileIndexTemplate = await indexTemplate(carMake);
	document.getElementById('content').innerHTML = compileIndexTemplate;
}
hbsLoad();

/*
document.addEventListener("click", (e) => {
	if(e.target){
		console.log(e);
		hbsLoad();
	}
});
document.getElementById("click00", (e) => {
	if(e.target){
		console.log(e);
		hbsLoad();
	}
});
*/
