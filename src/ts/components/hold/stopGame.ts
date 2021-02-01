const roll = document.querySelector('.rollDice') as HTMLElement;
const hold = document.querySelector('.hold') as HTMLElement;

export const stopGame = () => {
	roll.style.display = 'none';
	hold.style.display = 'none';
};
