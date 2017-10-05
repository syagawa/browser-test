const config = {};
const site = require('./site.js');

config.url = site.url;
config.outdir = 'ss';
config.browser = 'chrome';//'firefox', 'chrome', 'opera', 'safari'

config.pages = site.pages;

const viewports = require('./viewports.js');
config.viewports = viewports;


module.exports = config;