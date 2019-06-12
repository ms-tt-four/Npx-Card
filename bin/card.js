#!/usr/bin/env node
// ðŸ‘† Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');


// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};
// Text + chalk definitions
const data = {
  'name': chalk.white('Martin Schloegl /'),
  'handle': chalk.cyan('martinschloegl'),
  'work': chalk.blueBright('Senior Software Architect & Developer @ tt-four'),
  'twitter': chalk.cyan('@MartinSchloegl'),
  'github': chalk.cyan('https://github.com/ms-tt-four'),
  'linkedin': chalk.cyan('https://www.linkedin.com/in/martin-schlögl-6b42b956/'),
  'xing': chalk.cyan('https://www.xing.com/profile/Martin_Schloegl'),
  'web': chalk.cyan('http://www.tt-four.com'),
  'npx': chalk.white('npx martinschloegl'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelXing': chalk.white.bold('      Xing:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = data.name + '  ' +  data.handle;
const working = data.labelWork + '  ' + data.work;
const twittering = data.labelTwitter + '  ' + data.twitter;
const githubing = data.labelGitHub + '  ' + data.github;
const linkedining = data.labelLinkedIn +  '  ' + data.linkedin;
const xinging = data.labelXing + '  ' + data.xing;
const webing = data.labelWeb + '  ' + data.web;
const carding = data.labelCard + '  ' + data.npx;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + 
               newline + working + 
               newline + newline + 
//               twittering + newline + 
               githubing + newline + 
//               linkedining + newline + 
//               xinging + newline + 
               webing + newline + 
               newline + carding;

console.log(chalk.white(boxen(output, options)));