export const rollRandom = (): number => {
	console.log('roll a random dice');
	return Math.floor(Math.random() * 6) + 1;
};
