//npm package to vaild for CSS3 compatible color value.
const isCss3Color = require("is-css3-color");

class Shape {
  constructor({ logoName, textColor, logoColor, logoShape }) {
    this.logoShape = logoShape;

    this.validateTextResponse(logoName);
    this.logoName = logoName;

    this.validateColorResponse(textColor);
    this.textColor = textColor;

    this.validateColorResponse(logoColor);
    this.logoColor = logoColor;
  }

  ifResponseEmpty(input) {
    if (!input) throw new Error("Input cannot be empty");
  }

  validateTextResponse(input) {
    this.ifResponseEmpty(input);

    if (input.length > 3) {
      throw new Error("Logo text cannot be more than 3 characters");
    }
  }

  validateColorResponse(input) {
    this.ifResponseEmpty(input);

    //Change all css named color to lowercase
    input = input.toLowerCase();

    if (!isCss3Color(input)) {
      throw new Error("Please enter a vaild css color keyword or hex code");
    }
  }

  render() {
    throw new Error("Child shapes must incorporate a render() method");
  }
}
module.exports = Shape;
