export const addScore = () => {
	const currScore = document.querySelector('.active .score');
	let overallScore = document.querySelector('.active .overallScore');

	const oScoreNum = Number(overallScore.textContent);
	const cScoreNum = Number(currScore.textContent);

	overallScore.textContent = (oScoreNum + cScoreNum).toString();

	currScore.textContent = '0';
};
