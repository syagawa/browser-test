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
// test/config.js
  // set Site URL
  config.url = 'localhost:8080/';
  // set screenshot save directory
  config.outdir = 'ss';

// test/pages.js
  // set page name & page filepath
  {
    name: 'top',
    url: 'index.html'
  }

// test/viewports.js
  // set viewport name & size
  {
    name: 'H1920_1080',
    width: 1920,
    height: 1080
  }


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
