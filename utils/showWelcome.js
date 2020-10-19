const colors = require('colors');


// Function to show the welcome header and message.
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

	console.clear();

	console.log(colors.green(welcomeHeader));
	console.log(colors.yellow(welcomeMessage));


}

module.exports = showWelcome;
