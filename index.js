const promptUser = require('./utils/promptUser');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = require('./utils/writeFileAsync');


async function init() {

    const answers = await promptUser();

	console.log(answers);

	const md = generateMarkdown(answers);

	console.log(md);

	await writeFileAsync("./output/README.md", md)

}


init();
