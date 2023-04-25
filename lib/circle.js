const Shape = require("./shape");

class Circle extends Shape {
  constructor(data) {
    super(data);
  }
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.logoColor}" />`;
  }
}

module.exports = Circle;
