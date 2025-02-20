const indexTemplate = require('./static/handlebars/index.hbs');

import $ from 'jquery';
import test00 from './test00';

const Car = {
	make: "Suzuki",
	model: "Swift",
	engine_size: 1.2,
	fuel_type: "Petrol"
}

const display00 = document.getElementById('test');

async function hbsLoad(){
	const carMake = {car: [Car.make, Car.model, Car.engine_size, Car.fuel_type]}
	//const compileIndexTemplate = await indexTemplate(carMake);
	//document.getElementById('content').innerHTML = `<h1>${Car.model}</h1>`;
	$('#content').html(`<h1>${Car.model}</h1>`);

	//test00.subscribe(val => display00.innerHTML = `<h3>${val}</h3>`);
	//test00.subscribe(val => $('#test').text('this is a test!'));	
	//test00.subscribe(val => $('#test').text(val));	
	//test00.subscribe(val => $('#test00').html(`<h2>${val}</h2>`));	

	$(document).ready(function(){
		test00.subscribe(val => $('#test').text(val));	
	});
}
hbsLoad();

/*
document.addEventListener("click", (e) => {
	if(e.target){
		console.log(e);
		hbsLoad();
	}
});
*/
/*
const indexClick00 = document.getElementById("click00");
indexClick00.addEventListener("click", (e) => {
	if(e.target){
		console.log(e);
		window.location.reload();
	}
});
*/
/*
indexClick00.addEventListener("click", (e) => {
	if(e.target){
		console.log(e);

		const carMake = {car: [Car.make, Car.model, Car.engine_size, Car.fuel_type]}
		const compileIndexTemplate = indexTemplate(carMake);
		document.getElementById('content').innerHTML = compileIndexTemplate;
	}
});
*/
/*
document.querySelectorAll("a", (e) => {
	if(e.target){
		console.log(e);
		hbsLoad();
	}
});
*/
