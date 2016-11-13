module.exports = [
{
	rule:'no-var',
	tester: 'var a = 0'
},
{
	rule:'no-var',
	tester: `let a = '0'`
},
{
	rule:'semi',
	tester: `let a = 0;`
}
]


