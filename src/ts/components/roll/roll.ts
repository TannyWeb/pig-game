import { displayDice } from './displayDice';

const rollBtn = document.querySelector('.rollDice');

export const roll = () => {
	rollBtn.addEventListener('click', () => {
		displayDice();
	});
};
