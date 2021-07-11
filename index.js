#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy       = require('clipboardy');
const log              = console.log;
const createPassword   = require('./utils/createPassword');
const savePassword     = require('./utils/savePassword');

program.version('1.0.0').description('Simple Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to password.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

//console.debug(program.opts());

// -- Get options passed by default or user
const {length, save, numbers, symbols} = program.opts();
//console.debug(numbers, symbols);

// -- Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// -- Save to file
if (save) savePassword(generatedPassword);

// -- Copy to clipboard
//clipboardy.writeSync(generatedPassword);
 
// -- Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
//log(chalk.yellow('Password copied to clipboard'));

// NOTES
// -----------------------
// node index.js
// node index --help
// node index.js -l=20 -nn -s
// node index.js --length=20 --nn --save


