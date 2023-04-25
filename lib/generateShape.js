const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./shape");

const generateShape = (data) => {
  const { logoShape } = data;
  switch (logoShape) {
    case "circle":
      const generateCircle = new Circle(data);
      return generateCircle;
      break;

    case "triangle":
      const generateTriangle = new Triangle(data);
      return generateTriangle;
      break;

    case "square":
      console.log(data);
      const generateSquare = new Square(data);
      return generateSquare;
      break;

    default:
      return `Something went wrong, please try again`;
      break;
  }
};

module.exports = { generateShape };
