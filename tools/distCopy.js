/*
* distCopy.js - Copies assets to dist/ directory
*/

const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

const SCRIPT_NAME = path.basename(__filename);

// This could be configurable in the future
const outputDir = 'dist'

// NOTE: when copying directories, pay attention to trailing slashes
// 'dirA' results in output/dirA/(contents of dirA)
// 'dirA/' results in output/(contents of dirA)
const assets = [
  'index.html',
  'js/bundle.min.js',
  'images',
  'manifest.tpl.json'
];

function _exitProcess(err) {
  if (err) {
    _log('ERROR: ' + err)
    ;
    console.log(SCRIPT_NAME + '...' + chalk.red('FAIL'))
    shell.exit(1);
  }
  console.log(SCRIPT_NAME + '...' + chalk.green('OK'))
  console.log();
  shell.exit(0);
}

// Ideally we could have a way of turning this off for less verbosity
function _log(msg) {
  console.log(chalk.yellow('>> ') + msg);
}

/////////////
//  START  //
/////////////
console.log(chalk.underline('Running ' + SCRIPT_NAME));
_log('rootDir = dist');

// Source check - makes sure that sources exist
assets.forEach(function(path) {
  if (!shell.test('-e', path)) { _exitProcess(path + ' does not exist') };
})
_log('Source check passed');

// Copy assets
assets.forEach(function(path) {
  const type = shell.test('-f', path) ? 'file' : 'directory';
  _log('Copying ' + path + ' ' + type);
  shell.cp('-rf', path, outputDir);
})

_exitProcess();
