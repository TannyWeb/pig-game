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
		console.log(diceNumber);
		console.log('switch player');
		switchPlayer();
		currentScore.textContent = '0';
	} else {
		console.log(diceNumber);
		console.log('do not switch player');
		const currScoreAsNum = Number(currentScore.textContent);
		currentScore.textContent = (currScoreAsNum + diceNumber).toString();
	}
};
