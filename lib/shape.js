// NPM package to validate CSS3 compatible color values.
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
    if (!input) throw new Error("Cannot enter nothing");
  }

  validateTextResponse(input) {
    this.ifResponseEmpty(input);

    if (input.length > 3) {
      throw new Error("Please enter letters for logo no longer than 3 letters");
    }
  }

  validateColorResponse(input) {
    this.ifResponseEmpty(input);

    input = input.toLowerCase();

    if (!isCss3Color(input)) {
      throw new Error("Please enter a vaild css color or hexadecimal code");
    }
  }

  render() {
    throw new Error(
      "Child shapes must incorporate a render() method in order to work"
    );
  }
}
module.exports = Shape;
