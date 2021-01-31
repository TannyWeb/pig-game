import '../sass/styles.sass';
import { hold } from './components/hold/hold';

import { roll } from './components/roll/roll';

console.log('typescrit worked??');

const add = (x: number, y: number): number => {
	return x + y;
};

roll();
hold();
console.log(add(3, 3));
