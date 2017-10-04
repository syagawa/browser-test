const config = {};
config.url = 'localhost:9000/';
config.outdir = 'ss';

const pages = require('./pages.js');
config.pages = pages;

module.exports = config;