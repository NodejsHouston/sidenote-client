/*
* distRename.js - Renames dist/ files and updates references to them
*/

const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

const SCRIPT_NAME = path.basename(__filename);

// This could be configurable in the future
const rootDir = 'dist'

// [src, dst] - will rename 'src' to 'dst' relative to rootDir
// NOTE: This does not create any directories (directories in destination path must already exist)
const renameMap = [
  ['index.html', 'popup.html'],
  ['bundle.min.js', 'popup.js'],
  ['manifest.tpl.json', 'manifest.json']
];

// file = file (relative to rootDir) to find and replace references
// refs = array of string pairs to update inside the file [searchString, replaceString]
const updateReferenceConfig = [
  {
    file: 'popup.html',
    refs: [['./js/bundle.js', 'popup.js']]
  },
  {
    file: 'manifest.json',
    refs: [['%IMAGE_DIR%', 'images']]
  }
];

function _resolvePath(relativePath) {
  return path.join(rootDir, relativePath);
}

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

// Source/Destination check - make sure sources and destination directories exist
renameMap.forEach(function(paths) {
  const srcFile = _resolvePath(paths[0]);
  const dstDir = path.dirname(_resolvePath(paths[1]));
  if (!shell.test('-e', srcFile)) { _exitProcess(srcFile + ' does not exist') };
  if (!shell.test('-d', dstDir)) { _exitProcess(dstDir + ' is an invalid directory') };
})
_log('Source/Destination check passed');

// Rename files
renameMap.forEach(function(paths) {
  const src = _resolvePath(paths[0]);
  const dst = _resolvePath(paths[1]);
  _log('Renaming ' + src + ' to ' + dst);
  shell.mv(src, dst);
})

// Source template file check - make sure source exists and is not a directory
updateReferenceConfig.forEach(function(fileObj) {
  const srcTemplateFile = _resolvePath(fileObj.file)
  if (!shell.test('-e', srcTemplateFile)) { _exitProcess(srcTemplateFile + ' does not exist') };
  if (shell.test('-d', srcTemplateFile)) { _exitProcess(srcTemplateFile + ' is a directory, should be a file') };
})
_log('Source template file check passed');

// Update references
updateReferenceConfig.forEach(function(fileObj) {
  const fileName = _resolvePath(fileObj.file)
  fileObj.refs.forEach(function(updatePair) {
    _log('Replacing "' + updatePair[0] + '" with "' + updatePair[1] + '" in ' + fileName);
    shell.sed('-i', updatePair[0], updatePair[1], fileName);
  })
})

_exitProcess();
