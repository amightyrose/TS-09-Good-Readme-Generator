const util = require('util');
const fs = require('fs');
const userDialogs = require('./utils/userDialogs.js')
const promptUser = require('./utils/promptUser');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


async function init() {

	try {

		userDialogs.showWelcome();

		if (!(await userDialogs.continuePrompt()).continue) {return};

		const answers = await promptUser();

		const md = generateMarkdown(answers);

		userDialogs.previewMD(md);

		if (!(await userDialogs.continuePrompt()).continue) {return};

		await writeFileAsync("./output/README.md", md)

		userDialogs.showSuccessMsg();

	}
	catch(err) {

		console.log(`The following error was encountered: ${err}`);

	}

}


init();
