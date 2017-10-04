const config = {};
config.url = 'localhost:9000/';
config.outdir = 'ss';

const pages = require('./pages.js');
config.pages = pages;

const viewports = require('./viewports.js');
config.viewports = viewports;


module.exports = config;