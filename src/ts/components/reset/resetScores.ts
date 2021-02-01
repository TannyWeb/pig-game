const scores: any = document.getElementsByClassName('score');
const overallScores: any = document.getElementsByClassName('overallScore');
const allScores = [...scores, ...overallScores];

export const resetScores = () => {
	for (const allScore of allScores) {
		allScore.textContent = '0';
	}
};
