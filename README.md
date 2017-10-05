# About

Get screen shot of browser with multiple view size and pages.

fork from ysk-sky/sample

# Quick Start
## 1．npm install
```bash
$ npm install
```

## 2．npm run
```bash
$ npm test

#or

$ gulp test

```

# Settings

```js
// rename test/settings/targets.target.sample1.js to target.js and move to targets directory.
  // set Site URL
  target.url = 'localhost:8080/';

  // set page name & page filepath
  target.pages = [
    {
      name: 'top',
      url: 'index.html'
    }
  ];

// rename test/settings/viewports.sample.js to viewports.js
  // set viewport name & size
  {
    name: 'H1920_1080',
    width: 1920,
    height: 1080
  }

// If you rename test/settings/targets.target.sample2.js to target.js and move to targets directory. By holding multiple files in the targets directory, you can test many sites simply by rewriting target.js.
  // test/settings/targets/target.js
  const target = require('./<your js>');

```

#

# Debug
## 1 npm install && selenium-server run
```bash
$ npm i -g selenium-standalone mocha
$ selenium-standalone install
$ selenium-standalone start
```
## 2 実行
別terminalでテストファイルを実行(例：t.js)
```bash
$ mocha t.js
```

grep optionで特定のテストのみを実行

```
$ mocha t.js -g 002
```
