const displayWinnerDiv = document.querySelector(
	'.displayWinner'
) as HTMLElement;

const diceNum = document.querySelector('.diceNumber') as HTMLElement;
const currScores: any = document.getElementsByClassName('currentScore');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

export const displayWinner = (className: Element) => {
	className.classList.add('winner');
	className.classList.remove('bg-white', 'bg-opacity-30');
	className.classList.add('bg-green-400');
	console.log('display winner');
	displayWinnerDiv.style.display = 'block';
	diceNum.style.display = 'none';

	for (const currScore of currScores) {
		currScore.style.display = 'none';
	}

	if (
		className.classList.contains('left') &&
		className.classList.contains('winner')
	) {
		right.classList.remove('bg-opacity-60', 'bg-white');
		right.classList.add('bg-red-500');
	} else {
		left.classList.remove('bg-opacity-60', 'bg-white');
		left.classList.add('bg-red-500');
	}

	const getPlayer = className.querySelector('h2').textContent;

	displayWinnerDiv.textContent = `congrats ${getPlayer}, you are the winner`;
};
