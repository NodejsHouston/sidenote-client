/*
* launchChromeExtention.js - launches a temp instance of chrome and loads dist/ folder as an extension.
*
* The command will create a temporary user dir (.chromeTmp) but is deleted after the process exits.
* NOTE: The module isn't well written and might not work 100%. We might need to write our own launcher
* if decide to go down this path. Essentially this file is a placeholder for that code.
* For reference see https://github.com/hughsk/chrome-launch
*/

const chrome = require('chrome-launch')
const path = require('path');

// Project Root
const projDir = path.resolve()

const tmpDir = path.join(projDir, '.chromeTmp');
const extensionDir = path.join(projDir, 'dist');

chrome('www.google.com', {
  args: '--load-extension=' + extensionDir,
  dir: tmpDir,
  nuke: true
})
