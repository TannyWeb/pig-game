import { diceImgs } from './diceImgs';
diceImgs;

const diceNum = diceImgs;

const dicebtn = document.querySelector('.diceNumber') as HTMLImageElement;

export const showDice = (diceNumber: number) => {
	dicebtn.style.display = 'block';
	switch (true) {
		case diceNumber === 1:
			dicebtn.src = diceNum.one;
			break;
		case diceNumber === 2:
			dicebtn.src = diceNum.two;
			break;
		case diceNumber === 3:
			dicebtn.src = diceNum.three;
			break;
		case diceNumber === 4:
			dicebtn.src = diceNum.four;
			break;
		case diceNumber === 5:
			dicebtn.src = diceNum.five;
			break;
		case diceNumber === 6:
			dicebtn.src = diceNum.six;
			break;

		default:
			break;
	}
};
