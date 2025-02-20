import { Observable, Subject, interval, of } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import rxjs00 from '../setup-tests/test-01.js';

import $ from 'jquery';

if(window.location.pathname === '/dashboard'){
	import('../setup-tests/test-02.js')
}

//fetch('../setup-tests/test-02.js').then(res => res.text());

/*board00.onclick = function(){
	import('../setup-tests/test-02.js');
	
	rxjs00.subscribe(val => {
		$('#jq04').html(`<b>${val}</b>`);
	});
}*/

function buttonTest00(){
	document.addEventListener('DOMContentLoaded', function(){
		const myButton00 = document.getElementById('myButton00');
		myButton00.addEventListener('click', getTest00);
	});
}
$(document).ready(function(){
	rxjs00.subscribe(val => {
		$('#jq04').html(`<b>${val}</b>`);
	});
});
const newScript = document.createElement('script');
//newScript.src = './test_02d8eb2e8483198d103c59.js';
//document.body.appendChild(newScript);
