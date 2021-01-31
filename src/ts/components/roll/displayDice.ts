import { rollRandom } from './randomDice';

const dicebtn = document.querySelector('.diceNumber') as HTMLElement;

export const displayDice = () => {
	const diceNumber = rollRandom();
	dicebtn.style.display = 'block';
	dicebtn.textContent = diceNumber.toString();

	if (diceNumber == 1) {
		console.log(diceNumber);
		console.log('switch player');
	} else {
		console.log(diceNumber);
		console.log('do not switch player');
	}
};
