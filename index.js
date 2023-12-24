#!/usr/bin/env node

const chalk = require("chalk");
const pkgjson = require("./package.json");
const logSymbols = require("log-symbols");
const welcome = require("cli-welcome");

// Alerts
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warn = chalk.keyword("orange").inverse;
const error = chalk.red.bold.inverse;

welcome({
  title: `${chalk.bgBlue.bold(`Mahesh Guntumadugu`)}`,
  tagLine: `Howdy, nice to meet you yey!`,
  description: pkgjson.description,
  version: pkgjson.version,
  bgcolor: `#FADC00`,
  bold: true,
  clear: true,
});

console.log(`
${chalk.italic(
  `Senior Engineer.Coding enthusiast with strong development skills,
eager to learn new technologies, and experienced as a freelancer.`
)}

${chalk.bgGreen.bold(` Medium `)} https://medium.com/@maheshguntumadugu;
${chalk.bgGrey.bold(` Github `)} https://github.com/gmaheshraju;
${chalk.bgBlue.bold(` LinkedIn `)} https://www.linkedin.com/in/gmaheshraju/

`);

console.log(`
${logSymbols.success} ${success(` SUCCESS`)} Thank you for checking out my CLI

${logSymbols.error} ${error(` WARNING `)} Be yourself. Don't copy without credit

${logSymbols.info} ${info(
  ` INFO `
)} To develop insane cli's together, contact me at maheshraju1218@gmail.com or through the above social media accounts.
   

`);
