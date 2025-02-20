const {interval, Observable} = require('rxjs');
const {map, take} = require('rxjs/operators');

const inteval00$ = interval(1000);
const source00$ = inteval00$.pipe(
	map(num => num * 2),
	take(5)
);

export default source00$;
