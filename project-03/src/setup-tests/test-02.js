import $ from 'jquery';

const button01 = document.getElementById('myButton01');

button01.onclick = function(){
	$('#jq04a').text('Hello from test-02 Again!!!');
};

/*window.test02 = function(){
	$('#jq04a').text('Hello from test-02 Again!!!');
}*/
/*setTimeout(() => {
	button01.onclick = function(){
		$('#jq04a').text('Hello from test-02 Again!!!');
	};
},1000);*/
console.log('Hello from test-02');


