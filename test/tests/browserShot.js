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
        .remote({ desiredCapabilities: { browserName: config.browser } })
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

    for(var pi in config.pages){
      for(var vi in config.viewports){
        describe('Browser Screen Shot', () => {
          var page = config.pages[pi];
          var viewport = config.viewports[vi];
          before(function(done){
            client
              .setViewportSize({
                width: viewport.width,
                height: viewport.height
              })
              .url(config.url + page.url)
              .call(done);
          });
          it('is OK', function (done) {
            this.timeout(10000);
            client
              .saveScreenshot(joinOutputPath(page.name + viewport.name))
              .call(done);
          });
        });
      }
    }
  });
};