const Shape = require("../lib/shape");
var testCases = [
  {
    desc: "expected to throw an error if user response is empty",
    input: {},
    expectedErr: new Error("Invalid, input cannot be empty"),
  },
  {
    desc: "expected to throw an error if logo text is longer than 3 letters",
    input: { logoName: "noah" },
    expectedErr: new Error(
      "Invalid, logo text cannot be longer than 3 characters"
    ),
  },
  {
    desc: "expected to throw error if response is not a valid or recognized CSS color",
    input: { logoName: "Sun", textColour: "NotColor" },
    expectedErr: new Error(
      "Please enter a valid CSS color name or hexadecimal code"
    ),
  },
  {
    desc: "expected to throw an error if render() is called",
    input: { logoName: "Sun", textColour: "green", bgColour: "brown" },
    expectedErr: new Error("Child shapes must implement a render() method"),
    shouldRender: true,
  },
  {
    desc: "expected to add background colour if it is a valid color",
    input: { logoName: "Sun", textColour: "green", bgColour: "brown" },
    expectedKey: "bgColour",
    expectedValue: "brown",
  },
  {
    desc: "expected to add text colour if it is a valid color",
    input: { logoName: "Sun", textColour: "red", bgColour: "brown" },
    expectedKey: "textColour",
    expectedValue: "red",
  },
];
describe("Shape test suite", () => {
  for (let tc of testCases) {
    it(tc.desc, () => {
      if (tc.shouldRender) {
        const shape = new Shape(tc.input);
        expect(shape.render).toThrow(tc.expectedErr);
      } else if (tc.expectedErr) {
        const shape = () => new Shape(tc.input);
        expect(shape).toThrow(tc.expectedErr);
      } else {
        const shape = new Shape(tc.input);
        expect(shape[tc.expectedKey]).toBe(tc.expectedValue);
      }
    });
  }
});
