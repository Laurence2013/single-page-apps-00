import $ from 'jquery';
import { interval, Observable, of } from 'rxjs';
const {map, take} = require('rxjs/operators');

import rxjs00$ from '../setup-tests/test-01.js';

const Car = {
	make: 'Suzuki',
	model: 'Swift',
	engine_size: 1.2,
	variant: 'Standard Swift',
	mpg: 65,
	market_value: 4000
}
function carInfo(){
	return Car;
}

const make00$ = Observable.create(obs => {
	obs.next(Car.make);
	obs.next(Car.model);
});
const hello00$ = Observable.create(function(observer) {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});
const source00$ = interval(1000).pipe(map(_ => Car.make));
const source01$ = of(1, 2, 3, 4, 5).pipe(map(val => val * 3));

const test = document.getElementById("home00");
test.addEventListener("click", function(){
	setTimeout(() => {
		$(document).ready(function(){
			make00$.subscribe(val => {
				$('#jq02').html(`<b>From jq02: ${val}</b>`)
			});
		});
	},50);
})

/*setTimeout(() => {
	$(document).ready(function(){
		make00$.subscribe(val => {
			$('#jq02').html(`
				<ul>
					<li>${val}</li>
				</ul>
			`)
		});
	});
},4000)*/
/*$(document).ready(function(){
	make00$.subscribe(val => {
		$('#jq02a').html(`<b>From jq02a: ${val}</b>`)
	});
});*/

export default carInfo;
