const util = require('util');
const fs = require('fs');
const showWelcome = require('./utils/showWelcome.js')
const promptUser = require('./utils/promptUser');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


async function init() {

	try {

		const continuePrompt = await showWelcome();

		if (!continuePrompt.continue) {return}

		const answers = await promptUser();

		console.log(answers);

		const md = generateMarkdown(answers);

		console.log(md);

		await writeFileAsync("./output/README.md", md)

		console.log("README.md successfully generated.");

	}
	catch(err) {

		console.log(`The following error was encountered: ${err}`);

	}

}


init();
