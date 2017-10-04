const config = {};
config.url = 'localhost:9000/';
config.outdir = 'ss';
config.browser = 'chrome';//'firefox', 'chrome', 'opera', 'safari'

const pages = require('./pages.js');
config.pages = pages;

const viewports = require('./viewports.js');
config.viewports = viewports;


module.exports = config;