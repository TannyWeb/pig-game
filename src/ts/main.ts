import '../sass/styles.sass';
import { hold } from './components/hold/hold';
import { roll } from './components/roll/roll';
import { reset } from './components/reset/reset';

console.log('typescrit worked??');

const add = (x: number, y: number): number => {
	return x + y;
};

roll();
hold();
reset();
console.log(add(3, 3));
