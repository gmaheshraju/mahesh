#!/usr/bin/env node
const chalk = require("chalk");
const pkgjson = require("./package.json");

const welcome = require("cli-welcome");
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
${chalk.dim(
  `Senior Engineer.Coding enthusiast with strong development skills,
eager to learn new technologies, and experienced as a freelancer.`
)}

${chalk.bgGreen.bold(` Medium `)} https://medium.com/@maheshguntumadugu;
${chalk.bgGrey.bold(` Github `)} https://github.com/gmaheshraju;
${chalk.bgBlue.bold(` LinkedIn `)} https://www.linkedin.com/in/gmaheshraju/

`);
