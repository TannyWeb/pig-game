import { switchPlayer } from '../switch/switchPlayer';
import { displayWinner } from './displayWinner';

export const addScore = () => {
	const active = document.querySelector('.active');

	const currScore = document.querySelector('.active .score');
	let overallScore = document.querySelector('.active .overallScore');

	const oScoreNum = Number(overallScore.textContent);
	const cScoreNum = Number(currScore.textContent);

	overallScore.textContent = (oScoreNum + cScoreNum).toString();

	if (cScoreNum > 0) {
		switchPlayer();

		if (oScoreNum + cScoreNum >= 100) {
			console.log('show winner');

			displayWinner(active);
		}
	}

	currScore.textContent = '0';
};
