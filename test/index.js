require('should')
var spec = require('./spec.js')
var CLIEngine = require("eslint").CLIEngine;
var linter = require("eslint").linter;

var cli = new CLIEngine({
	envs: ["node", "mocha"],
	configFile: './index.js',
})

describe('ESlint standard extendsion tests', () => {
	spec.forEach(s => {
		it(`${s.rule} test : ${s.tester} .. `, () => {
			var result = cli.executeOnText(s.tester).results[0]
			var errors = result.messages.map(err => err.ruleId)
			errors.should.containEql(s.rule)
		})
	})
})
