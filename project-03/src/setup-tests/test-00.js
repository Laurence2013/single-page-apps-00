import $ from 'jquery';
import { Observable } from 'rxjs';

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
export default carInfo;
