const playerOne = document.querySelector('.left') as HTMLElement;
const playerTwo = document.querySelector('.right') as HTMLElement;

export const switchPlayer = () => {
	if (playerOne.classList.contains('active')) {
		playerOne.classList.remove('active');
		playerTwo.classList.add('active');
	} else {
		playerTwo.classList.remove('active');
		playerOne.classList.add('active');
	}
};
