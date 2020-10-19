const util = require('util');
const fs = require('fs');

const writeFileWithPromise = util.promisify(fs.writeFile);

async function writeFileAsync(path, data) {

	writeFileWithPromise(path, data, (err) => {
		if (err) {
			console.log(`The following error was encountered: ${err}`);
		}
		else {
			console.log("File written");
		}
	})
	
}

module.exports = writeFileAsync;