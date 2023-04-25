const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require("./lib/generateSVG");
const { generateShape } = require("./lib/generateShape");

inquirer
  .prompt([
    {
      type: "input",
      name: "logoName",
      message: "Please enter 1-3 letters for your logo",
    },
    {
      type: "input",
      name: "textColor",
      message: `Please enter text color keyword or a hexadecimal number as the logo's text color`,
    },
    {
      type: "input",
      name: "logoColor",
      message: `Please enter a color keyword or a hexadecimal number as the logo's background color`,
    },
    {
      type: "list",
      name: "logoShape",
      message: `Please choose logo shape`,
      choices: ["triangle", "circle", "square"],
    },
  ])
  .then((data) => {
    const svgPath = "./dist/logo.svg";
    const finalLogo = generateShape(data);

    //Generate the svg logo here.
    fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  })
  .catch((err) => console.error(err));
