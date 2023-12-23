#!/usr/bin/env node
const chalk = require("chalk");
const pkgjson = require("./package.json");

const welcome = require("cli-welcome");
welcome({
  title: pkgjson.name,
  tagLine: `Howdy, nice to meet you yey!`,
  description: pkgjson.description,
  version: pkgjson.version,
  bgcolor: `#FADC00`,
  bold: true,
  clear: true,
});
console.log(`${chalk.bgBlue.bold(`Mahesh Guntumadugu`)}

${chalk.dim(
  `Senior Engineer.Coding enthusiast with strong development skills,
eager to learn new technologies, and experienced as a freelancer.`
)}

${chalk.hex(`#00ab6c`).bold(`Medium`)}: https://medium.com/@maheshguntumadugu;
${chalk.hex(`#333`).bold(`Github`)}: https://github.com/gmaheshraju;
${chalk
  .hex(`#0a66c2`)
  .bold(`LinkedIn`)}: https://www.linkedin.com/in/gmaheshraju/

`);
