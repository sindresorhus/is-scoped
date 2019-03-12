'use strict';
const scopedRegex = require('scoped-regex');

const isScoped = input => scopedRegex({exact: true}).test(input);

module.exports = isScoped;
module.exports.default = isScoped;
