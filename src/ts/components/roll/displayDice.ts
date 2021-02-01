import { switchPlayer } from '../switch/switchPlayer';
import { rollRandom } from './randomDice';

const dicebtn = document.querySelector('.diceNumber') as HTMLElement;

export const displayDice = () => {
	const currentScore = document.querySelector(
		'.active .currentScore .score'
	) as HTMLElement;

	const diceNumber = rollRandom();
	dicebtn.style.display = 'block';
	dicebtn.textContent = diceNumber.toString();

	if (diceNumber == 1) {
		switchPlayer();
		currentScore.textContent = '0';
	} else {
		const currScoreAsNum = Number(currentScore.textContent);
		currentScore.textContent = (currScoreAsNum + diceNumber).toString();
	}
};
