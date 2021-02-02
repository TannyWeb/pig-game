const dice = document.querySelector('.diceNumber') as HTMLElement;
const roll = document.querySelector('.rollDice') as HTMLElement;
const hold = document.querySelector('.hold') as HTMLElement;

const player1 = document.querySelector('.left') as HTMLElement;
const player2 = document.querySelector('.right') as HTMLElement;

const currScores: any = document.getElementsByClassName('currentScore');

export const resetStyles = () => {
	for (const currScore of currScores) {
		currScore.style.display = 'flex';
	}

	dice.style.display = 'none';
	roll.style.display = 'block';
	hold.style.display = 'block';

	player1.classList.remove('bg-opacity-30', 'bg-red-500');
	player2.classList.remove('active', 'bg-opacity-60', 'bg-red-500');
	player1.classList.add('active', 'bg-white', 'bg-opacity-60');
	player2.classList.add('bg-white', 'bg-opacity-30');

	if (player1.classList.contains('bg-green-400') === true) {
		player1.classList.remove('bg-green-400');
	}

	if (player2.classList.contains('bg-green-400') === true) {
		player2.classList.remove('bg-green-400');
	}
};
