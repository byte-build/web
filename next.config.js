/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = require('next-compose-plugins')([
	[require('next-optimized-classnames')],
	[require('next-optimized-images')]
])
