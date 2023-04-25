const Square = require("../lib/square");

describe("Square", () => {
  describe("Render Method", () => {
    it("expected to render square string", () => {
      const square = new Square({
        logoName: "Sun",
        textColor: "red",
        bgColor: "yellow",
        logoShape: "square",
      });
      expect(square.render()).toBe(
        `<rect width="100" height="100" rx="15" fill="yellow" />`
      );
    });
  });
});
