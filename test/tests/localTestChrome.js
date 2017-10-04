const should = require('should');
const webdriverio = require('webdriverio');
const fs = require('fs');

const config = require('../config.js');

let client;

function joinOutputPath(str) {
  return `${config.outdir}/${str}.png`;
}

// Creates output dir for screenshot if NOT exists
if (!fs.existsSync(config.outdir)) {
  fs.mkdirSync(config.outdir);
}


module.exports = function () {
  describe('Test Chrome', () => {
    before(function (done) {
      this.timeout(30000);
      client = webdriverio
        .remote({ desiredCapabilities: { browserName: 'chrome' } })
        .init().url(config.url).call(done);
      process.on('uncaughtException', (err) => {
        const date = new Date().toLocaleString().replace(/\s|\//g, '-').replace(/:/g, '');
        console.log(`        ScrrenShot: error${date}.png`);
        client.saveScreenshot(joinOutputPath(`error${date}`));
      });
    });
    after(function (done) {
      this.timeout(10000);
      client.end().call(done);
    });

    for(var i in config.pages){
      describe('Test Chrome', () => {
        var page = config.pages[i];
        before(function(done){
          client.url(config.url + page.url).call(done);
        });
        it('is OK', function (done) {
          this.timeout(10000);
          client
            .saveScreenshot(joinOutputPath(page.name))
            .call(done);
        });
      });
    }
  });
};