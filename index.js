const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require("./lib/generateSVG");
const { generateShape } = require("./lib/generateShape");

inquirer
  .prompt([
    {
      type: "input",
      name: "logoName",
      message: "Please enter letters for logo no longer than 3 letters",
    },
    {
      type: "input",
      name: "textColor",
      message: `Please enter color name or the hexadecimal number for the desired color`,
    },
    {
      type: "input",
      name: "logoColor",
      message: `Please enter a color keyword or the hexadecimal number for the desired background color`,
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

    // Generates code to display logo in Generated logo.svg
    fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
      err
        ? console.error(err)
        : console.log("Successfully generated logo into logo.svg")
    );
  })
  .catch((err) => console.error(err));
