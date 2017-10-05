const site = {};

const target = require('./targets/target.js');

site.url = target.url;
site.pages = target.pages;

module.exports = site;