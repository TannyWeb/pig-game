import { LoaderOptionsPlugin } from 'webpack';

const displayWinnerDiv = document.querySelector('.displayWinner');
export const displayWinner = (className: Element) => {
	className.classList.add('winner');
	className.classList.remove('bg-white', 'bg-opacity-30');
	className.classList.add('bg-green-400');
	console.log('display winner');

	const getPlayer = className.querySelector('h2').textContent;

	displayWinnerDiv.textContent = `congrats ${getPlayer}, you are the winner`;
};
