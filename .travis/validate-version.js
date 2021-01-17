#!/bin/node

const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async function () {
  const package = require('../package.json');
  
  const { stdout: version, stderr } = await exec(`npm view ${package.name} version`, { shell: true});
  
  console.log('Version on npm: ', version.trim());
  console.log('Version in package.json: ', package.version.trim());
  
  if (version.trim() === package.version.trim()) {
    console.log('Versions are the same. They must be different in order to update.');
    process.exit(1);
  } else {
    console.log('success');
    process.exit(0);
  }
})();



