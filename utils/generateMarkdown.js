// Object containing license names and badge URLs
const badges = {
		"Apache License 2.0": "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
		"GNU General Public License v3.0": "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
		"MIT License": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
		"BSD 2-Clause \"Simplified\" License": "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)",
		"BSD 3-Clause \"New\" or \"Revised\" License": "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)",
		"Boost Software License 1.0": "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)",
		"Creative Commons Zero v1.0 Universal": "![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)",
		"Eclipse Public License 2.0": "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)",
		"GNU Affero General Public License v3.0": "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)",
		"GNU General Public License v2.0": "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)",
		"GNU Lesser General Public License v2.1": "![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)",
		"Mozilla Public License 2.0": "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
		"The Unlicense": "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)"
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${badges[data.license]}

## Description
${data.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)


## Installation
To install ${data.title}:

${data.installation}


## Usage
${data.usage}


## Contributing
If you would like to contribute to this project please follow these guidelines:

${data.contributing}


## Tests
Recommended testing procedures:

${data.test}


## Questions
Questions? Comments? Suggestions? Please get in touch.

Gitlab: https://github.com/${data.githubusername}

Email: [${data.email}](mailto:${data.email})


## License
This project is licensed under the ${data.license}.
`;
}


module.exports = generateMarkdown;
