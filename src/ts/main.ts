import '../sass/styles.sass';

import { roll } from './components/roll/roll';

console.log('typescrit worked??');

const add = (x: number, y: number): number => {
	return x + y;
};

roll();

console.log(add(3, 3));
