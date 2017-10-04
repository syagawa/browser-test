const should = require('should');
const webdriverio = require('webdriverio');
const fs = require('fs');

const config = require('../settings/config.js');

let client;

const fomatDate = require('../formatDate.js');

var outdir = config.outdir + '/' + fomatDate(new Date(), 'YYYYMMDDhhmmss');

function joinOutputPath(str) {
  return `${outdir}/${str}.png`;
}

// Creates output dir for screenshot if NOT exists
if (!fs.existsSync(outdir)) {
  fs.mkdirSync(outdir);
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
              .saveScreenshot(joinOutputPath(page.name + '_' + viewport.name))
              .call(done);
          });
        });
      }
    }
  });
};