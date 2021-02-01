import { switchPlayer } from '../switch/switchPlayer';
import { addScore } from './addScore';
import { checkWinner } from './checkWinner';
import { displayWinner } from './displayWinner';

const holdbtn = document.querySelector('.hold') as HTMLElement;

export const hold = () => {
	holdbtn.addEventListener('click', () => {
		addScore();
	});
};
