require('should')
var linter = require("eslint").linter
var spec = require('./spec.js')

var eslintConfig = require("../index.js")
describe('ESlint standard extendsion tests', () => {
	spec.forEach(s => {
		it(s.tester, () => {
			var result = linter.verify(s.tester, eslintConfig)
			var errors = result.map(err => err.ruleId)
			errors.should.containEql(s.rule)
		})
	})
})


