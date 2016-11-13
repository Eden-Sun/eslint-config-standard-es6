module.exports = {
  root: true,
  extends: 'standard',
  rules: {
    //disallow use var
    'no-var': 'error',
    'no-unused-vars': ['error', { 'args': 'after-used' }],
  }
}
