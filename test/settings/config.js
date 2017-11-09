const config = {};
const site = require('./targets/target.js');

config.url = site.url;
config.outdir = 'ss';
config.browser = 'chrome';//'firefox', 'chrome', 'opera', 'safari'

config.pages = site.pages;
config.login = site.login;

const viewports = require('./viewports.js');
config.viewports = viewports;


module.exports = config;