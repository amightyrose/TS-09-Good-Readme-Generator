// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}


## Description
${data.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


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
