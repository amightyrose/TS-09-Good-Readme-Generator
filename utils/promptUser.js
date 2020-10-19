const inquirer = require('inquirer');

const arrQuestions = [
	{
	type: "input",
	name: "title",
	message: "Enter the name of your project:"
	},
	{
	type: "input",
	name: "description",
	message: "Enter a description for your project:"
	},
	{
	type: "input",
	name: "installation",
	message: "Enter the installation instructions for the application: "
	},
	{
	type: "input",
	name: "usage",
	message: "Enter usage instructions for the application:"
	},
	{
	type: "list",
	name: "license",
	message: "Choose a license for your project:",
	choices: [
		"Apache License 2.0",
		"GNU General Public License v3.0",
		"MIT License",
		"BSD 2-Clause \"Simplified\" License",
		"BSD 3-Clause \"New\" or \"Revised\" License",
		"Boost Software License 1.0",
		"Creative Commons Zero v1.0 Universal",
		"Eclipse Public License 2.0",
		"GNU Affero General Public License v3.0",
		"GNU General Public License v2.0",
		"GNU Lesser General Public License v2.1",
		"Mozilla Public License 2.0",
		"The Unlicense"
		]
	},
	{
	type: "input",
	name: "contributing",
	message: "Enter contribution guidelines for your project:"
	},
	{
	type: "input",
	name: "test",
	message: "Enter instructions for testing your application:"
	},
	{
	type: "input",
	name: "githubusername",
	message: "What is your GitHub username?"
	},
	{
	type: "input",
	name: "email",
	message: "What is your email address?"
	}
]

function promptUser() {
	return inquirer.prompt(arrQuestions);
  }

module.exports = promptUser;
