import { resetScores } from './resetScores';
import { resetStyles } from './resetStyles';

const resetbtn = document.querySelector('.newGame') as HTMLElement;

const displayWinnerDiv = document.querySelector(
	'.displayWinner'
) as HTMLElement;

export const reset = () => {
	resetbtn.addEventListener('click', () => {
		console.log('reset the game');
		resetScores();
		resetStyles();
		displayWinnerDiv.style.display = 'none';
	});
};
