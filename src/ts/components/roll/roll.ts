import { rollRandom } from './randomDice';

const rollBtn = document.querySelector('.rollDice');

export const roll = () => {
	rollBtn.addEventListener('click', () => {
		rollRandom();
	});
};
