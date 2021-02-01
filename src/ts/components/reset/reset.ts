const resetbtn = document.querySelector('.newGame') as HTMLElement;
const scores: any = document.getElementsByClassName('score');
const overallScores: any = document.getElementsByClassName('overallScore');

// const allScores:HTMLElement[] = [...scores, ...overallScores];

export const reset = () => {
	resetbtn.addEventListener('click', () => {
		console.log('reset the game');

		for (let s of scores) {
			console.log(s);
			s.textContent = '0';
		}

		for (let o of overallScores) {
			console.log(o);
			o.textContent = '0';
		}
	});
};
