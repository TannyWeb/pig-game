import { switchPlayer } from '../switch/switchPlayer';
import { addScore } from './addScore';

const holdbtn = document.querySelector('.hold') as HTMLElement;

export const hold = () => {
	holdbtn.addEventListener('click', () => {
		addScore();
	});
};
