const inquirer = require('inquirer');

const prompt = [
	{
		type: "confirm",
		name: "continue",
		message: "Would you like to continue?",
		default: true
	}
]

function continuePrompt() {

	// const result = inquirer.prompt(prompt);
	return inquirer.prompt(prompt);
	// console.log(result.continue);
	// return result.continue;

}

module.exports = continuePrompt;