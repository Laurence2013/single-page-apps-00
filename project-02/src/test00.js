import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const interval00$  = interval(1000);
const source00$ = interval00$.pipe(
	map(num => num * 2),
	take(10)
);
export default source00$;

