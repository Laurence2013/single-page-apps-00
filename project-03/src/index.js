import rxjs00 from './setup-tests/test-01.js';
import './main.scss';
import $ from 'jquery';

const test01 = document.getElementById('myButton00');

async function initApp(){
	await import('./components/home.js');
	await import('./components/dashboard.js');
};
$(document).ready(function(){
	rxjs00.subscribe(val => {
		$('#jq00').text(val);
		$('#jq01').html(`RxJs test 01: <b>${val}</b>`);
		initApp();
	});
})

test01.onclick = function(){
	console.log('Hello from Index.js');
		$('#jq022').text('Hello from Index.js');
}
/*test01.addEventListener('click', function(){
	console.log('Hello from Index.js');
});*/
/*window.templatePage00 = function(){
	console.log('Hello from Index.js');
}*/

//2: rxjs00.subscribe(val => console.log(val));
//1: console.log(car());

