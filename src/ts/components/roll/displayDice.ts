import { showDice } from '../dice/dice';
import { switchPlayer } from '../switch/switchPlayer';
import { rollRandom } from './randomDice';

export const displayDice = () => {
	const currentScore = document.querySelector(
		'.active .currentScore .score'
	) as HTMLElement;

	const diceNumber = rollRandom();
	showDice(diceNumber);

	if (diceNumber == 1) {
		switchPlayer();
		currentScore.textContent = '0';
	} else {
		const currScoreAsNum = Number(currentScore.textContent);
		currentScore.textContent = (currScoreAsNum + diceNumber).toString();
	}
};
