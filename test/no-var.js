require('should')
var linter = require("eslint").linter;

var eslintConfig = require("../index.js")
describe('ESlint standard extendsion tests', () => {
	it('no var', () => {
		var messages = linter.verify("var foo = bar", eslintConfig)
		console.log(messages)
		messages.should.be.an.Object()
	})
})


