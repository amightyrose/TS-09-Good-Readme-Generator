const colors = require('colors');
const inquirer = require('inquirer');


function showWelcome() {

	const welcomeHeader = `

============================================================
||                                                        ||
|                 Good README Generator                    |
||                                                        ||
============================================================

`

const welcomeMessage = `
Welcome to the Good README Generator!
This application will generate a README.md file based on information you provide.

`

const continuePrompt = [
	{
		type: "confirm",
		name: "continue",
		message: "Would you like to continue?",
		default: true
	}
]

	console.clear();

	console.log(colors.green(welcomeHeader));
	console.log(colors.yellow(welcomeMessage));

	return inquirer.prompt(continuePrompt);
	// console.log(inquirer.prompt(continuePrompt).continue);

}

module.exports = showWelcome;
