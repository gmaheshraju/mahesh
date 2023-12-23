#!/usr/bin/env node
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
console.log(`Mahesh Guntumadugu 

Senior Engineer.Coding enthusiast with strong development skills,
eager to learn new technologies, and experienced as a freelancer



Medium: https://medium.com/@maheshguntumadugu
Github: https://github.com/gmaheshraju
LinkedIn: https://www.linkedin.com/in/gmaheshraju/

`);
