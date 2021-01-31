const playerOne = document.querySelector('.left') as HTMLElement;
const playerTwo = document.querySelector('.right') as HTMLElement;

export const switchPlayer = () => {
	if (playerOne.classList.contains('active')) {
		playerOne.classList.remove('active', 'bg-opacity-60');
		playerOne.classList.add('bg-opacity-30');
		playerTwo.classList.remove('bg-opacity-30');
		playerTwo.classList.add('active', 'bg-opacity-60');
	} else {
		playerTwo.classList.remove('active', 'bg-opacity-60');
		playerTwo.classList.add('bg-opacity-30');
		playerOne.classList.add('active', 'bg-opacity-60');
		playerOne.classList.remove('bg-opacity-30');
	}
};
