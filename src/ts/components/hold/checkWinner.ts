export const checkWinner = () => {
	const currScore = document.querySelector('.active .score');
	let overallScore = document.querySelector('.active .overallScore');

	const oScoreNum = Number(overallScore.textContent);
	const cScoreNum = Number(currScore.textContent);

	if (oScoreNum >= 100 && cScoreNum > 0) {
		console.log('dispay something');
	}
};
